import React from 'react'
import Navbar from './navbar'

const SubDash = () => {
  return (
    <div className="bg-white dark:bg-black dark:bg-dot-white/[0.2] bg-dot-black/[0.2] h-screen pb-20 poppins">
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
        <List/>
      </div>
    </div>
  )
}

const List = () =>{
  return(
      <div className="m-4 p-3 bg-[#F5F5F5] dark:bg-zinc-800 rounded-lg mt-8">
          <div class="relative overflow-x-auto mx-2">
              <table class="w-full text-sm text-left rtl:text-right text-gray-500 ">
                  <thead class=" text-gray-700 dark:text-white uppercase bg-grey-500">
                      <tr className="rounded-lg">
                          <th scope="col" class="px-6 py-3">
                              Enrollment No.
                          </th>
                          <th scope="col" class="px-6 py-3">
                              Name
                          </th>
                          <th scope="col" class="px-6 py-3">
                              MST1
                          </th>
                          <th scope="col" class="px-6 py-3">
                              MST2
                          </th>
                          <th scope="col" class="px-6 py-3">
                              Ass / Quiz
                          </th>
                          <th scope="col" class="px-6 py-3">
                              Endsem
                          </th>
                      </tr>
                  </thead>
                  <tbody>
                      <tr class="bg-white border-b dark:bg-zinc-950">
                          <th scope="row" class="px-6 py-4 font-medium text-blue-500 whitespace-nowrap">
                              0801EI231095
                          </th>
                          <td class="px-6 py-4">
                              Suryansh Singh
                          </td>
                          <td class="px-6 py-4">
                              10
                          </td>
                          <td class="px-6 py-4">
                              13
                          </td>
                          <td class="px-6 py-4">
                              10
                          </td>
                          <td class="px-6 py-4">
                              55
                          </td>
                      </tr>
                      <tr class="bg-white border-b dark:bg-black">
                          <th scope="row" class="px-6 py-4 font-medium text-blue-500 whitespace-nowrap">
                              0801EI231095
                          </th>
                          <td class="px-6 py-4">
                              Suryansh Singh
                          </td>
                          <td class="px-6 py-4">
                              10
                          </td>
                          <td class="px-6 py-4">
                              13
                          </td>
                          <td class="px-6 py-4">
                              10
                          </td>
                          <td class="px-6 py-4">
                              55
                          </td>
                      </tr>
                      <ListItem/>
                  </tbody>
              </table>
          </div>

      </div>   
  )
}

const ListItem = () => {
  return (
                            <tr class="bg-white border-b dark:bg-black">
                          <th scope="row" class="px-6 py-4 font-medium text-blue-500 whitespace-nowrap">
                              0801EI231072
                          </th>
                          <td class="px-6 py-4">
                              Pranshu Pandey
                          </td>
                          <td class="px-6 py-4">
                              15
                          </td>
                          <td class="px-6 py-4">
                              13
                          </td>
                          <td class="px-6 py-4">
                              10
                          </td>
                          <td class="px-6 py-4">
                              70
                          </td>
                      </tr>
  )
}

export default SubDash