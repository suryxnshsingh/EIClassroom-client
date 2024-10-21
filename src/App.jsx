import {BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './assets/components/land/home'
import Signin from './assets/components/signin'
import Signup from './assets/components/signup'
import Dashbard from './assets/components/dashboard'
import SubDash from './assets/components/subDash'
import HOD from './assets/components/HOD'

function App() {

  return (
      <div>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/signin" element={<Signin/>}/>
            <Route path="/signup" element={<Signup/>}/>
            <Route path="/dashboard" element={<Dashbard/>}/>
            <Route path="/subject/:subjectCode" element={<SubDash />} />
            <Route path='/allsubs' element={<HOD />} />
          </Routes>
        </BrowserRouter>
      </div>
  )
}

export default App
