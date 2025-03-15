import { useState } from 'react'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import './App.css'
import Login from './components/Login'
import Home from './components/Home'
function App() {
  const [name, setName] = useState("")

  return (
    <div>
      <BrowserRouter>
      <Routes>
    <Route path="/" element={<Login setName={setName}/>}/>
    <Route path='/home' element={<Home name={name}/>}/>
      </Routes>
      </BrowserRouter>
    </div>
      
  )
}

export default App
