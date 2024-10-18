import React, { useState, useEffect } from 'react'
import Navbar from './navbar'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

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
          onClick={() => downloadExcel(subjectCode)}>
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
        <thead className="text-gray-700 dark:text-white uppercase bg-grey-500 ">
          <tr className="rounded-lg">
            <th scope="col" className="px-6 py-3 text-lg">Enrollment No.</th>
            <th scope="col" className="px-6 py-3 text-lg">Name</th>

            {/* Main columns for MST1 and MST2 with sub-columns */}
            <th scope="col" colSpan="3" className="px-6 py-3 text-lg">MST1</th>
            <th scope="col" colSpan="3" className="px-6 py-3 text-lg">MST2</th>

            <th scope="col" className="px-6 py-3 text-lg">Ass / Quiz</th>

            {/* Main column for Endsem with sub-columns */}
            <th scope="col" colSpan="5" className="px-6 py-3 text-lg">Endsem</th>
          </tr>
          <tr className="rounded-lg">
            {/* Sub-columns for Enrollment No. */}
          <th scope="col" className="px-6 py-3 "></th>
          <th scope="col" className="px-6 py-3"></th>
            {/* Sub-columns for MST1 */}
            <th scope="col" className="px-6 py-3">Q1</th>
            <th scope="col" className="px-6 py-3">Q2</th>
            <th scope="col" className="px-6 py-3">Q3</th>

            {/* Sub-columns for MST2 */}
            <th scope="col" className="px-6 py-3">Q1</th>
            <th scope="col" className="px-6 py-3">Q2</th>
            <th scope="col" className="px-6 py-3">Q3</th>

            {/* Sub-columns for Ass / Quiz */}
            <th scope="col" className="px-6 py-3"></th>
            {/* Sub-columns for Endsem */}
            <th scope="col" className="px-6 py-3">Q1</th>
            <th scope="col" className="px-6 py-3">Q2</th>
            <th scope="col" className="px-6 py-3">Q3</th>
            <th scope="col" className="px-6 py-3">Q4</th>
            <th scope="col" className="px-6 py-3">Q5</th>
          </tr>
        </thead>
        <tbody>
          {sheets.length === 0 ? (
            <tr className="bg-white border-b dark:bg-black dark:text-gray-300">
              <td colSpan="14" className="px-6 py-4 text-center">
                No sheets found
              </td>
            </tr>
          ) : (
            sheets.map((sheet) => (
              <tr key={sheet.id} className="bg-white border-b dark:bg-black dark:text-gray-300">
                <td className="px-6 py-3">{sheet.id}</td>
                <td className="px-6 py-3">{sheet.name}</td>

                {/* MST1 Sub-columns */}
                <td className="px-6 py-3">{sheet.MST1_Q1 ?? '-'}</td>
                <td className="px-6 py-3">{sheet.MST1_Q2 ?? '-'}</td>
                <td className="px-6 py-3">{sheet.MST1_Q3 ?? '-'}</td>

                {/* MST2 Sub-columns */}
                <td className="px-6 py-3">{sheet.MST2_Q1 ?? '-'}</td>
                <td className="px-6 py-3">{sheet.MST2_Q2 ?? '-'}</td>
                <td className="px-6 py-3">{sheet.MST2_Q3 ?? '-'}</td>

                <td className="px-6 py-3">{sheet.Quiz_Assignment ?? '-'}</td>

                {/* Endsem Sub-columns */}
                <td className="px-6 py-3">{sheet.EndSem_Q1 ?? '-'}</td>
                <td className="px-6 py-3">{sheet.EndSem_Q2 ?? '-'}</td>
                <td className="px-6 py-3">{sheet.EndSem_Q3 ?? '-'}</td>
                <td className="px-6 py-3">{sheet.EndSem_Q4 ?? '-'}</td>
                <td className="px-6 py-3">{sheet.EndSem_Q5 ?? '-'}</td>
              </tr>
            ))
          )}
        </tbody>
      </table>
      </div>
    </div>
  );
};


const AddStudentPopup = ({ setCreate, subjectCode }) => {
  const navigate = useNavigate();
    const [formData, setFormData] = useState({
      id: '',
      subjectCode,
      name: '',
      MST1_Q1: 0,
      MST1_Q2: 0,
      MST1_Q3: 0,

      MST2_Q1: 0,
      MST2_Q2: 0,
      MST2_Q3: 0,

      Quiz_Assignment: 0,

      EndSem_Q1: 0,
      EndSem_Q2: 0,
      EndSem_Q3: 0,
      EndSem_Q4: 0,
      EndSem_Q5: 0,
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
        navigate(0);
      } catch (err) {
        console.error('Error adding student:', err);
        setError(err.response?.data?.error || 'Failed to add student. Please try again.');
      }
    };
  
    return (
      <div className="absolute h-screen w-full flex items-center justify-center z-50 poppins-regular backdrop-brightness-50">
        <form className="max-w-md mx-auto bg-white dark:bg-black rounded-xl p-2 w-1/3" onSubmit={handleSubmit}>
          <div className="p-4">
            <div className="flex justify-end text-white cursor-pointer" onClick={() => setCreate(false)}>
              <div>❌</div>
            </div>
  
            <div className="mb-4">
              <label htmlFor="id" className="block mb-2 dark:text-white text-lg font-semibold">Enrollment Number</label>
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
              <label htmlFor="name" className="block mb-2 dark:text-white text-lg font-semibold">Student Name</label>
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
            <div className='block mb-2 dark:text-white text-lg font-semibold'> MID SEMESTER EXAM - 1 MARKS</div>
            <div className='flex'>
              <div className="mb-4">
                <label htmlFor="MST1_Q1" className="block mb-2 ml-2 dark:text-white">Q1</label>
                <input
                  type="number"
                  name="MST1_Q1"
                  id="MST1_Q1"
                  value={formData.MST1_Q1}
                  onChange={handleChange}
                  required
                  className="w-32 mr-1 px-3 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300 dark:bg-gray-800 dark:text-white"
                />
              </div>
              <div className="mb-4">
                <label htmlFor="MST1_Q2" className="block mb-2 ml-2 dark:text-white">Q2</label>
                <input
                  type="number"
                  name="MST1_Q2"
                  id="MST1_Q2"
                  value={formData.MST1_Q2}
                  onChange={handleChange}
                  required
                  className="w-32 mx-1 px-3 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300 dark:bg-gray-800 dark:text-white"
                />
              </div>
            <div className="mb-4">
                <label htmlFor="MST1_Q3" className="block mb-2 ml-2 dark:text-white">Q3</label>
                <input
                  type="number"
                  name="MST1_Q3"
                  id="MST1_Q3"
                  value={formData.MST1_Q3}
                  onChange={handleChange}
                  required
                  className="w-32 mx-1 px-3 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300 dark:bg-gray-800 dark:text-white"
                />
              </div>
            </div>
  
                      {/* MST2 Field */}  
            <div className='block mb-2 dark:text-white text-lg font-semibold'> MID SEMESTER EXAM - 2 MARKS</div>
            <div className='flex'>
              <div className="mb-4">
                <label htmlFor="MST2_Q1" className="block mb-2 ml-2 dark:text-white">Q1</label>
                <input
                  type="number"
                  name="MST2_Q1"
                  id="MST2_Q1"
                  value={formData.MST2_Q1}
                  onChange={handleChange}
                  required
                  className="w-32 mr-1 px-3 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300 dark:bg-gray-800 dark:text-white"
                />
              </div>
              <div className="mb-4">
                <label htmlFor="MST2_Q2" className="block mb-2 ml-2 dark:text-white">Q2</label>
                <input
                  type="number"
                  name="MST2_Q2"
                  id="MST2_Q2"
                  value={formData.MST2_Q2}
                  onChange={handleChange}
                  required
                  className="w-32 mx-1 px-3 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300 dark:bg-gray-800 dark:text-white"
                />
              </div>
            <div className="mb-4">
                <label htmlFor="MST2_Q3" className="block mb-2 ml-2 dark:text-white">Q3</label>
                <input
                  type="number"
                  name="MST2_Q3"
                  id="MST2_Q3"
                  value={formData.MST2_Q3}
                  onChange={handleChange}
                  required
                  className="w-32 mx-1 px-3 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300 dark:bg-gray-800 dark:text-white"
                />
              </div>
            </div>
  
            {/* Assignment/Quiz (AssQuiz) Field */}
            <div className="mb-4">
              <label htmlFor="Quiz_Assignment" className="block mb-2 dark:text-white text-lg font-semibold">Assignment / Quiz</label>
              <input
                type="number"
                name="Quiz_Assignment"
                id="Quiz_Assignment"
                value={formData.Quiz_Assignment}
                onChange={handleChange}
                required
                className="w-1/2 px-3 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300 dark:bg-gray-800 dark:text-white"
              />
            </div>
  
            {/* Endsem Field */}
            <div className='block mb-2 dark:text-white text-lg font-semibold'> END SEMESTER EXAM MARKS</div>
            <div className='flex gap-1'>
              <div className="mb-4">
                <label htmlFor="Endsem_Q1" className="block mb-2 dark:text-white">Q1</label>
                <input
                  type="number"
                  name="EndSem_Q1"
                  id="EndSem_Q1"
                  value={formData.EndSem_Q1}
                  onChange={handleChange}
                  required
                  className="w-full mr-1 px-3 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300 dark:bg-gray-800 dark:text-white"
                />
              </div>
              <div className="mb-4">
                <label htmlFor="Endsem_Q2" className="block mb-2 dark:text-white">Q2</label>
                <input
                  type="number"
                  name="EndSem_Q2"
                  id="EndSem_Q2"
                  value={formData.EndSem_Q2}
                  onChange={handleChange}
                  required
                  className="w-full mr-1 px-3 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300 dark:bg-gray-800 dark:text-white"
                />
              </div>
              <div className="mb-4">
                <label htmlFor="Endsem_Q3" className="block mb-2 dark:text-white">Q3</label>
                <input
                  type="number"
                  name="EndSem_Q3"
                  id="EndSem_Q3"
                  value={formData.EndSem_Q3}
                  onChange={handleChange}
                  required
                  className="w-full mr-1 px-3 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300 dark:bg-gray-800 dark:text-white"
                />
              </div>
              <div className="mb-4">
                <label htmlFor="Endsem_Q4" className="block mb-2 dark:text-white">Q4</label>
                <input
                  type="number"
                  name="EndSem_Q4"
                  id="EndSem_Q4"
                  value={formData.EndSem_Q4}
                  onChange={handleChange}
                  required
                  className="w-full mr-1 px-3 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300 dark:bg-gray-800 dark:text-white"
                />
              </div>
              <div className="mb-4">
                <label htmlFor="Endsem_Q5" className="block mb-2 dark:text-white">Q5</label>
                <input
                  type="number"
                  name="EndSem_Q5"
                  id="EndSem_Q5"
                  value={formData.EndSem_Q5}
                  onChange={handleChange}
                  required
                  className="w-full mr-1 px-3 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300 dark:bg-gray-800 dark:text-white"
                />
              </div>
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

  const downloadExcel = (subjectCode) => {
    axios.get(`http://localhost:8080/api/operation/download-sheets?subjectCode=${subjectCode}`, {
      responseType: 'blob', // Important to set response type as blob for file download
    })
    .then((response) => {
      // Create a URL for the blob
      const url = window.URL.createObjectURL(new Blob([response.data]));
      const a = document.createElement('a');
      a.href = url;
      a.download = 'sheets.xlsx';
      document.body.appendChild(a);
      a.click();
      a.remove();
    })
    .catch((error) => {
      console.error('Error downloading the Excel sheet:', error);
    });
  };

export default SubDash;