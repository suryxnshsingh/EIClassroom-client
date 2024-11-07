import {BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './assets/components/land/home'
import Signin from './assets/components/auth/signin'
import Signup from './assets/components/auth/signup'
import SubDash from './assets/components/subDash'
import StudentSidebar from './assets/components/student/StudentSidebar'
import TeacherSidebar from './assets/components/teacher/TeacherSidebar'

function App() {

  return (
      <div>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/signin" element={<Signin/>}/>
            <Route path="/signup" element={<Signup/>}/>
            <Route path="/subject/:subjectCode" element={<SubDash />} />

            
            <Route path='/students/*' element={<StudentSidebar />} />
            <Route path='/teachers/*' element={<TeacherSidebar />} />
          </Routes>
        </BrowserRouter>
      </div>
  )
}

export default App
