import {BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './assets/components/home'
import Signin from './assets/components/signin'

function App() {

  return (
      <div>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/signin" element={<Signin/>}/>
          </Routes>
        </BrowserRouter>
      </div>
  )
}

export default App
