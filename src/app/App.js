import React, { useEffect } from 'react'
import './styles/App.css'
import routesArray from '../entities/routesArray'
import { Route, Routes } from 'react-router-dom'
import Logo from '../widgets/SVG/Logo'
import { useSelector } from 'react-redux'
import Notification from '../features/notifications/Notifications'
import { gapi } from 'gapi-script'

const clientId =
  '920853738337-c4ont5cuif052e4ml3mabdi4nv80o0ed.apps.googleusercontent.com'

function App() {
  const { message, type } = useSelector(s => s.notification)

  useEffect(() => {
    function start() {
      gapi.client.init({
        clientId,
        scope: '',
      })
    }

    gapi.load('client:auth2', start)
  })

  return (
    <div className="App">
      <Logo />
      <Routes>
        {routesArray.map(({ id, path, component }) => {
          return <Route key={id} path={path} element={component} />
        })}
      </Routes>
      {message && <Notification message={message} type={type} />}
    </div>
  )
}

export default App
