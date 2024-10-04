import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Login from './components/Login'
import Signup from './components/Signup'
import Appbar from './components/Appbar'
import { Route, Routes } from 'react-router-dom'
import StateBasics from './components/StateBasics'
import Counter from './components/Counter'
import Api from './components/Api'
import Pokemon from './components/Pokemon'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Appbar />
      <h1>AFSINH</h1>
      <h6>&copy;afsinh </h6>
      <Routes>
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<Signup />} />
        <Route path='/s' element={<StateBasics />} />
        <Route path='/c' element={<Counter />} />
        <Route path='/ap' element={<Api></Api>} />
        <Route path='/pa' element={<Pokemon/>} />
      </Routes>
    </>
  )
}

export default App
