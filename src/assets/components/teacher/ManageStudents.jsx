import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Loader2, Check, X, Users } from 'lucide-react';

const BASE_URL = 'http://localhost:8080';

const ManageStudentsPage = () => {
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchCourses = async () => {
    try {
      const response = await axios.get(`${BASE_URL}/api/courses/teacher-courses`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`
        }
      });
      setCourses(response.data);
      setLoading(false);
    } catch (err) {
      console.error('Error details:', err.response?.data || err);
      setError(err.response?.data?.message || "Failed to fetch courses");
      setLoading(false);
    }
  };

  const fetchPendingEnrollments = async () => {
    try {
      const response = await axios.get(`${BASE_URL}/api/enrollment/enrollments/pending`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`
        }
      });
      
      // Map pending enrollments to their respective courses
      const updatedCourses = courses.map(course => ({
        ...course,
        pendingEnrollments: response.data.filter(enrollment => 
          enrollment.course.courseCode === course.courseCode
        )
      }));
      
      setCourses(updatedCourses);
    } catch (err) {
      console.error('Error fetching pending enrollments:', err);
      setError("Failed to fetch pending enrollments");
    }
  };

  const handleEnrollmentStatus = async (enrollmentId, status) => {
    try {
      await axios.put(
        `${BASE_URL}/api/enrollment/enrollments/${enrollmentId}/status`,
        { "status": status },
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`
          }
        }
      );
      
      // Refresh both course and pending enrollment data
      fetchCourses();
      fetchPendingEnrollments();
    } catch (err) {
      console.error('Error updating enrollment status:', err);
      setError("Failed to update enrollment status");
    }
  };

  useEffect(() => {
    fetchCourses();
  }, []);

  useEffect(() => {
    if (courses.length > 0) {
      fetchPendingEnrollments();
    }
  }, [courses.length]);

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <Loader2 className="h-8 w-8 animate-spin" />
      </div>
    );
  }

  if (error) {
    return (
      <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded m-4">
        {error}
      </div>
    );
  }

  return (
    <div className="container mx-auto p-4 space-y-6">
      <h1 className="text-2xl font-bold mb-6">Manage Students</h1>
      
      {courses.map(course => (
        <div key={course.id} className="bg-white rounded-lg shadow-md mb-6">
          <div className="border-b border-gray-200 px-6 py-4">
            <div className="flex items-center gap-2 text-xl font-semibold">
              <Users className="h-5 w-5" />
              {course.name} ({course.courseCode})
            </div>
          </div>
          
          <div className="p-6">
            {/* Pending Enrollments Section */}
            {course.pendingEnrollments?.length > 0 && (
              <div className="mb-6">
                <h3 className="text-lg font-semibold mb-3">Pending Enrollments</h3>
                <div className="bg-yellow-50 rounded-lg border border-yellow-100">
                  {course.pendingEnrollments.map(enrollment => (
                    <div key={enrollment.id} 
                         className="flex items-center justify-between p-4 border-b last:border-0">
                      <div>
                        <span className="font-medium">
                          {enrollment.student.firstName} {enrollment.student.lastName}
                        </span>
                        <span className="text-sm text-gray-600 ml-2">
                          ({enrollment.student.enrollmentNumber})
                        </span>
                      </div>
                      <div className="space-x-2">
                        <button
                          className="inline-flex items-center px-3 py-1.5 border border-green-500 text-green-500 hover:bg-green-50 rounded text-sm font-medium transition-colors"
                          onClick={() => handleEnrollmentStatus(enrollment.id, 'ACCEPTED')}
                        >
                          <Check className="h-4 w-4 mr-1" /> Accept
                        </button>
                        <button
                          className="inline-flex items-center px-3 py-1.5 border border-red-500 text-red-500 hover:bg-red-50 rounded text-sm font-medium transition-colors"
                          onClick={() => handleEnrollmentStatus(enrollment.id, 'REJECTED')}
                        >
                          <X className="h-4 w-4 mr-1" /> Reject
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Enrolled Students Section */}
            <div>
              <h3 className="text-lg font-semibold mb-3">Enrolled Students</h3>
              {course.enrollments?.filter(e => e.status === 'ACCEPTED').length > 0 ? (
                <div className="space-y-2">
                  {course.enrollments
                    .filter(enrollment => enrollment.status === 'ACCEPTED')
                    .map(enrollment => (
                      <div key={enrollment.id} 
                           className="flex items-center justify-between p-4 bg-gray-50 rounded border border-gray-100">
                        <div>
                          <span className="font-medium">
                            {enrollment.student.firstName} {enrollment.student.lastName}
                          </span>
                          <span className="text-sm text-gray-600 ml-2">
                            ({enrollment.student.enrollmentNumber})
                          </span>
                        </div>
                      </div>
                    ))}
                </div>
              ) : (
                <p className="text-gray-500">No students currently enrolled</p>
              )}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ManageStudentsPage;