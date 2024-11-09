import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { toast } from 'react-hot-toast';

const Loading = () => (
  <div className="flex justify-center items-center h-screen text-black dark:text-white">
    <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-black dark:border-white"></div>
  </div>
);

const CourseCard = ({ course, onEnroll, status }) => {
  const getStatusButton = () => {
    switch (status) {
      case 'ACCEPTED':
        return (
          <button 
            className="w-full bg-green-500 text-white font-semibold py-2 px-4 rounded cursor-not-allowed"
            disabled
          >
            Enrolled
          </button>
        );
      case 'PENDING':
        return (
          <button 
            className="w-full bg-yellow-500 text-white font-semibold py-2 px-4 rounded cursor-not-allowed"
            disabled
          >
            Pending Approval
          </button>
        );
      default:
        return (
          <button
            onClick={() => onEnroll(course.id)}
            className="w-full bg-purple-500 hover:bg-purple-700 text-white font-semibold py-2 px-4 rounded"
          >
            Apply for Enrollment
          </button>
        );
    }
  };

  return (
    <div className=" rounded shadow-md p-6 border-[1px] border-slate-300 dark:border-neutral-700 bg-neutral-100 dark:bg-neutral-950">
      <h3 className="text-2xl font-semibold ">{course.name}</h3>
      <p className="text-xl font-semibold text-gray-600 dark:text-gray-400 mb-2">{course.courseCode}</p>
      <p className="text-gray-600 dark:text-gray-400 mb-2">
        Teacher: {course.teacher.firstName} {course.teacher.lastName}
      </p>
      <p className="text-gray-600 dark:text-gray-400 mb-4">
        Session: {course.session} | Semester: {course.semester}
      </p>
      {getStatusButton()}
    </div>
  );
};

const CourseSection = ({ title, courses, onEnroll, status, className }) => (
  <div className={`mb-12 ${className}`}>
    <h2 className="text-3xl font-semibold mb-6">{title}</h2>
    {courses.length === 0 ? (
      <div className="text-center text-gray-600 dark:text-gray-400 py-8">
        <p className="text-xl">No {title.toLowerCase()}.</p>
      </div>
    ) : (
      <div className="grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {courses.map((course) => (
          <CourseCard
            key={course.id}
            course={course}
            onEnroll={onEnroll}
            status={status}
          />
        ))}
      </div>
    )}
  </div>
);

const ManageCourses = () => {
  const [availableCourses, setAvailableCourses] = useState([]);
  const [acceptedCourses, setAcceptedCourses] = useState([]);
  const [pendingCourses, setPendingCourses] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [coursesResponse, enrollmentsResponse] = await Promise.all([
          axios.get('http://localhost:8080/api/courses/all-courses', {
            headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }
          }),
          axios.get('http://localhost:8080/api/enrollment/enrollments/my-courses', {
            headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }
          })
        ]);

        const enrollments = enrollmentsResponse.data;
        
        // Separate enrollments by status
        const accepted = enrollments.filter(e => e.status === 'ACCEPTED').map(e => e.course);
        const pending = enrollments.filter(e => e.status === 'PENDING').map(e => e.course);
        
        // Get all enrolled course IDs (both accepted and pending)
        const enrolledIds = enrollments.map(e => e.course.id);
        
        // Filter available courses to exclude all enrolled ones
        const available = coursesResponse.data.filter(
          course => !enrolledIds.includes(course.id)
        );

        setAvailableCourses(available);
        setAcceptedCourses(accepted);
        setPendingCourses(pending);
      } catch (error) {
        console.error('Error fetching data:', error);
        toast.error('Failed to fetch courses');
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const handleEnroll = async (courseId) => {
    try {
      await axios.post(
        'http://localhost:8080/api/enrollment/enrollments',
        { courseId },
        { headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }}
      );
      
      // Move the course from available to pending
      const courseToMove = availableCourses.find(c => c.id === courseId);
      setPendingCourses([...pendingCourses, courseToMove]);
      setAvailableCourses(availableCourses.filter(c => c.id !== courseId));
      
      toast.success('Enrollment application submitted successfully');
    } catch (error) {
      console.error('Error enrolling in course:', error);
      toast.error(error.response?.data?.message || 'Failed to apply for enrollment');
    }
  };

  if (loading) return <Loading />;

  return (
    <div className="w-full md:mr-16 pb-16">
      <div className="md:m-10 m-5">
        <CourseSection
          title="My Enrolled Courses"
          courses={acceptedCourses}
          onEnroll={handleEnroll}
          status="ACCEPTED"
          className="border-b pb-8"
        />
        
        <CourseSection
          title="Pending Enrollments"
          courses={pendingCourses}
          onEnroll={handleEnroll}
          status="PENDING"
          className="border-b pb-8"
        />
        
        <CourseSection
          title="Available Courses"
          courses={availableCourses}
          onEnroll={handleEnroll}
          status="AVAILABLE"
        />
      </div>
    </div>
  );
};

export default ManageCourses;