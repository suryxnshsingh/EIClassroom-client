import React, { useState, useEffect } from 'react'
import Navbar from './navbar'
import { useParams } from 'react-router-dom'
import axios from 'axios'

const SubDash = () => {
  const { subjectCode } = useParams();
  console.log(subjectCode)
  const [create, setCreate] = useState(false);
  return (
    <div className="bg-white dark:bg-black dark:bg-dot-white/[0.2] bg-dot-black/[0.2] min-h-screen h-full pb-20 poppins">
      {create && <AddStudentPopup setCreate={setCreate} subjectCode={subjectCode} />}
      <Navbar/>
      <div>
        <h1 className='text-3xl font-bold dark:text-white pt-28 text-center'>Subject Name</h1>
        <div className='flex justify-center gap-5 pt-5'>
          <button 
          className='bg-blue-500 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded'
          onClick={() => setCreate(true)}
          >
            Add Student
          </button>
          <button className='bg-blue-500 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded'
          onClick={() => console.log(subjectCode)}>
            Download Report
          </button>  
        </div>
        <List subjectCode={subjectCode}/>
      </div>
    </div>
  )
}

// Separate List component with its own state management
const List = ({ subjectCode }) => {
  // Declare all state variables at the beginning of the component
  const [sheets, setSheets] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Define the fetch function
    const fetchData = async () => {
      try {
        setLoading(true);
        const response = await axios.get(`http://localhost:8080/api/operation/sheets?subjectCode=${subjectCode}`);
        console.log(response.data);
        setSheets(response.data);
        console.log(sheets);
        setError(null);
        setLoading(false);
      } catch (err) {
        console.error('Error fetching sheets:', err);
        setError(err.response?.data?.error || 'Failed to fetch sheets');
      }
    };

    if (subjectCode) {
      fetchData();
    }
  }, [subjectCode]);

  if (loading) {
    return (
      <div className="m-4 p-3 bg-[#F5F5F5] dark:bg-zinc-800 rounded-lg mt-8 flex justify-center items-center">
        <div className="dark:text-white">Loading...</div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="m-4 p-3 bg-[#F5F5F5] dark:bg-zinc-800 rounded-lg mt-8">
        <div className="text-red-500 text-center">{error}</div>
      </div>
    );
  }

  return (
    <div className="m-4 p-3 bg-[#F5F5F5] dark:bg-zinc-800 rounded-lg mt-8">
      <div className="relative overflow-x-auto mx-2">
        <table className="w-full text-sm text-left rtl:text-right text-gray-500">
          <thead className="text-gray-700 dark:text-white uppercase bg-grey-500">
            <tr className="rounded-lg">
              <th scope="col" className="px-6 py-3">Enrollment No.</th>
              <th scope="col" className="px-6 py-3">Name</th>
              <th scope="col" className="px-6 py-3">MST1</th>
              <th scope="col" className="px-6 py-3">MST2</th>
              <th scope="col" className="px-6 py-3">Ass / Quiz</th>
              <th scope="col" className="px-6 py-3">Endsem</th>
            </tr>
          </thead>
          <tbody>
            {sheets.length === 0 ? (
              <tr className="bg-white border-b dark:bg-black dark:text-gray-300">
                <td colSpan="6" className="px-6 py-4 text-center">
                  No sheets found
                </td>
              </tr>
            ) : (
              sheets.map((sheet) => (
                <ListItem
                  key={sheet.id}
                  Enrollment={sheet.id}
                  Name={sheet.name}
                  MST1={sheet.MST1}
                  MST2={sheet.MST2}
                  AssQuiz={sheet.Quiz_Assignment}
                  Endsem={sheet.EndSem}
                />
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

const ListItem = ({Enrollment, Name, MST1, MST2, AssQuiz, Endsem}) => {
  return (
    <tr className="bg-white border-b dark:bg-black dark:text-gray-300">
      <th scope="row" className="px-6 py-4 font-medium text-blue-500 whitespace-nowrap">
        {Enrollment}
      </th>
      <td className="px-6 py-4">{Name}</td>
      <td className="px-6 py-4">{MST1}</td>
      <td className="px-6 py-4">{MST2}</td>
      <td className="px-6 py-4">{AssQuiz}</td>
      <td className="px-6 py-4">{Endsem}</td>
    </tr>
  );
};

const AddStudentPopup = ({ setCreate, subjectCode }) => {
    const [formData, setFormData] = useState({
      id: '',
      subjectCode,
      name: '',
      MST1: '',
      MST2: '',
      Quiz_Assignment: '',
      EndSem: '',
    });
    const [error, setError] = useState('');
  
    const handleChange = (e) => {
      setFormData({ ...formData, [e.target.name]: e.target.value });
    };
  
    const handleSubmit = async (e) => {
      e.preventDefault();
      setError('');
  
      try {
        const response = await axios.post(`http://localhost:8080/api/operation/submit-form`, formData, {
          headers: {
            'Authorization': `Bearer ${localStorage.getItem('token')}`,
            'Content-Type': 'application/json',
          },
        });
        console.log('Student added:', response.data);
        setCreate(false);  // Close popup on success
      } catch (err) {
        console.error('Error adding student:', err);
        setError(err.response?.data?.error || 'Failed to add student. Please try again.');
      }
    };
  
    return (
      <div className="absolute h-screen w-full flex items-center justify-center z-10 poppins-regular backdrop-brightness-50">
        <form className="max-w-md mx-auto bg-white dark:bg-black rounded-xl p-2 w-1/3" onSubmit={handleSubmit}>
          <div className="p-4">
            <div className="flex justify-end text-white cursor-pointer" onClick={() => setCreate(false)}>
              <div>❌</div>
            </div>
  
            <div className="mb-4">
              <label htmlFor="id" className="block mb-2 dark:text-white">Enrollment Number</label>
              <input
                type="text"
                name="id"
                id="id"
                value={formData.id}
                onChange={handleChange}
                required
                className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300 dark:bg-gray-800 dark:text-white"
              />
            </div>
  
            <div className="mb-4">
              <label htmlFor="name" className="block mb-2 dark:text-white">Student Name</label>
              <input
                type="text"
                name="name"
                id="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300 dark:bg-gray-800 dark:text-white"
              />
            </div>
  
            {/* MST1 Field */}
            <div className="mb-4">
              <label htmlFor="MST1" className="block mb-2 dark:text-white">MST1</label>
              <input
                type="number"
                name="MST1"
                id="MST1"
                value={formData.MST1}
                onChange={handleChange}
                required
                className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300 dark:bg-gray-800 dark:text-white"
              />
            </div>
  
            {/* MST2 Field */}
            <div className="mb-4">
              <label htmlFor="MST2" className="block mb-2 dark:text-white">MST2</label>
              <input
                type="number"
                name="MST2"
                id="MST2"
                value={formData.MST2}
                onChange={handleChange}
                required
                className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300 dark:bg-gray-800 dark:text-white"
              />
            </div>
  
            {/* Assignment/Quiz (AssQuiz) Field */}
            <div className="mb-4">
              <label htmlFor="Quiz_Assignment" className="block mb-2 dark:text-white">Assignment / Quiz</label>
              <input
                type="number"
                name="Quiz_Assignment"
                id="Quiz_Assignment"
                value={formData.Quiz_Assignment}
                onChange={handleChange}
                required
                className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300 dark:bg-gray-800 dark:text-white"
              />
            </div>
  
            {/* Endsem Field */}
            <div className="mb-4">
              <label htmlFor="Endsem" className="block mb-2 dark:text-white">End Semester</label>
              <input
                type="number"
                name="EndSem"
                id="EndSem"
                value={formData.EndSem}
                onChange={handleChange}
                required
                className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300 dark:bg-gray-800 dark:text-white"
              />
            </div>
  
            {error && <div className="text-red-500 mb-3">{error}</div>}
  
            <button type="submit" className="w-full bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-700">
              Submit
            </button>
          </div>
        </form>
      </div>
    );
  };
export default SubDash;