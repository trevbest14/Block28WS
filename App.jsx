
/*import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg' */
import './App.css'
import {Routes, Route, Link} from "react-router-dom"
import Blue from "./Blue.jsx"
import Red from "./Red.jsx"
import Home from "./Home.jsx"

function App() {
 /* const [count, setCount] = useState(0) 


    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1> */
      return (
        <> 
      <div id="container">
      <h1></h1>
      <div id="navbar">
        <Link to="/blue">blue</Link>
        <Link to="/red">red</Link>
        <Link to="/home">home</Link>
        </div>
      <div id="main-section">
        <Routes>
          <Route path="/blue" element={Blue} />
          <Route path="/red" element={Red} />  
          <Route path="/home" element={Home} />
         </Routes>
          </div>
    </div>
   
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App