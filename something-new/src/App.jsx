import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Last from './components/Last'
import First from './components/First'
import {BrowserRouter as Router, Routes, Route } from "react-router-dom"

function App() {
  return (
      <Router>
        <Routes>
            <Route exact path="/" element={<Last />} />
            <Route exact path="/First" element={<First />} />
        </Routes>
      </Router>
    // <div className="App">
    // <Last /> 
    // <First />
    // </div>
  )

  }
  export default App