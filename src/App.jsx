import {BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './assets/components/home'
import Signin from './assets/components/signin'
import Signup from './assets/components/signup'
import Dashbard from './assets/components/dashboard'

function App() {

  return (
      <div>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/signin" element={<Signin/>}/>
            <Route path="/signup" element={<Signup/>}/>
            <Route path="/dashbard" element={<Dashbard/>}/>
          </Routes>
        </BrowserRouter>
      </div>
  )
}

export default App
