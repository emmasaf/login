import React, { useEffect } from 'react'
import './styles/App.css'
import routesArray from '../entities/routesArray'
import { Route, Routes } from 'react-router-dom'
import Logo from '../widgets/SVG/Logo'
import { useSelector } from 'react-redux'
import Notification from '../features/notifications/Notifications'
import { gapi } from 'gapi-script'

const clientId =
  '704640950707-8o2387j5b73pi6au9a8q1pdpnvjp0ajm.apps.googleusercontent.com'
const clientSecret = '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'

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
