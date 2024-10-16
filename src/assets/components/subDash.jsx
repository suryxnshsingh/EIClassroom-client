import React, { useState, useEffect } from 'react'
import Navbar from './navbar'
import { useParams } from 'react-router-dom'
import axios from 'axios'

const SubDash = () => {
  const { subjectCode } = useParams();
  return (
    <div className="bg-white dark:bg-black dark:bg-dot-white/[0.2] bg-dot-black/[0.2] min-h-screen h-full pb-20 poppins">
      <Navbar/>
      <div>
        <h1 className='text-3xl font-bold dark:text-white pt-28 text-center'>Subject Name</h1>
        <div className='flex justify-center gap-5 pt-5'>
          <button className='bg-blue-500 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded'>
            Add Student
          </button>
          <button className='bg-blue-500 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded'>
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
        const response = await axios.get('http://localhost:8080/api/operation/sheets', {
          params: { subjectCode },
          headers: {
            'Authorization': `Bearer ${localStorage.getItem('token')}`
          }
        });
        setSheets(response.data);
        setError(null);
        setLoading(false);
      } catch (err) {
        console.error('Error fetching sheets:', err);
        setError(err.response?.data?.error || 'Failed to fetch sheets');
      }
    };

    // Call the fetch function if we have a subjectCode
    if (subjectCode) {
      fetchData();
    }
  }, [subjectCode]); // Only re-run if subjectCode changes

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
                  key={sheet.enrollmentNo}
                  Enrollment={sheet.enrollmentNo}
                  Name={sheet.studentName}
                  MST1={sheet.mst1}
                  MST2={sheet.mst2}
                  AssQuiz={sheet.assQuiz}
                  Endsem={sheet.endsem}
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

export default SubDash;