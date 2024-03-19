// src/components/Profile.js
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { checkRefreshToken } from '../../shared/api/requests'

const Profile = () => {
  const nav = useNavigate()
  const { token } = useSelector(s => s.login)
  const dispatch = useDispatch()

  const handleClick = () => {
    nav('/')
  }

  useEffect(() => {
    dispatch(checkRefreshToken({ refresh_token: localStorage.getItem('jwt_refresh_token') }))
  }, [dispatch])

  return (
    <div className="min-h-screen flex flex-col items-center justify-center">
      <h1 className="text-4xl mb-8">
        {token ? 'Successfully logged in' : '404 - Not Found'}
      </h1>
      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        onClick={handleClick}
      >
        Go to Home
      </button>
    </div>
  )
}

export default Profile
