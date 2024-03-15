import React from 'react'
import './styles/App.css'
import routesArray from '../entities/routesArray'
import { Route, Routes } from 'react-router-dom'
import Logo from '../widgets/SVG/Logo'

function App() {
  return (
    <div className="App">
      <Logo/>
      <Routes>
        {routesArray.map(({ id, path, component }) => {
          return <Route  key={id} path={path} element={component}/>
        })}
      </Routes>
    </div>
  )
}

export default App
