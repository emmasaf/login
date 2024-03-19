import React, { useEffect } from 'react'
import Title from '../../widgets/Title'
import IconButton from '../../widgets/IconButton'
import Google from '../../widgets/SVG/Google'
import Git from '../../widgets/SVG/Git'
import Divider from '../../widgets/Divider'
import { FormProvider, useForm } from 'react-hook-form'
import Input from '../../widgets/Input'
import Button from '../../widgets/Button'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'
import { Link, useNavigate, useSearchParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { login } from '../../entities/api/requests'
import { triggerNotification } from '../notifications/api/notificationSlice'
import { GoogleLogin } from 'react-google-login'
import { gapi } from 'gapi-script'

const validationSchema = yup.object().shape({
  email: yup.string().email('Invalid email').required('Email is required'),
  password: yup.string().required('Password is required'),
})

const clientId =
  '920853738337-c4ont5cuif052e4ml3mabdi4nv80o0ed.apps.googleusercontent.com'

const clientIdGit = '38ee962a418e355c9f74'

export default function LoginComponent() {
  const methods = useForm({ resolver: yupResolver(validationSchema) })
  const { error } = useSelector(state => state.login)
  const dispatch = useDispatch()
  const [searchParams] = useSearchParams()

  const nav = useNavigate()

  const onSubmit = data => {
    dispatch(login(data)).then(action => {
      if (action?.payload?.error === 0) {
        localStorage.setItem('jwt_access_token', action.payload.access_token)
        localStorage.setItem('jwt_refresh_token', action.payload.refresh_token)
        nav('/profile')
      }
    })
  }

  const onGoogleSuccess = data => {
    localStorage.setItem('access_id', data.tokenId)
    console.log('succes: ', data)

    let accessToken = gapi.auth.getToken().access_token
    console.log(accessToken,'**accessToken');

  }



  const onGoogleFailure = data => {
    console.log('fail: ', data)
    dispatch(triggerNotification({ type: 'error', message: data.error }))
  }

  const onGitSuccess = data => {
    console.log('succes: ', data)
    window.location.assign(
      `https://github.com/login/oauth/authorize?client_id=${clientIdGit}`,
    )
  }

  useEffect(() => {
    const codeParams = searchParams.get('code')
    console.log(codeParams,'codeParams git')
  }, [searchParams])

  useEffect(() => {
    if (error) {
      dispatch(
        triggerNotification({ type: 'error', message: 'User is invalid' }),
      )
    }
  }, [error, dispatch])

  return (
    <div>
      <Title text="Log in to your account" />
      <div className="flex justify-center gap-10 sm:gap-5">
        <GoogleLogin
          clientId={clientId}
          buttonText={'ssad'}
          onSuccess={onGoogleSuccess}
          onFailure={onGoogleFailure}
          cookiePolicy={'single_host_origin'}
          render={renderProps => (
            <IconButton
              text="Google"
              icon={<Google />}
              onClick={renderProps.onClick}
            />
          )}
        />
        <IconButton onClick={onGitSuccess} text="GitHub" icon={<Git />} />
      </div>
      <Divider />
      <div className="w-full">
        <FormProvider {...methods}>
          <form
            onSubmit={methods.handleSubmit(onSubmit)}
            className="flex flex-col items-center justify-center"
          >
            <Input name="email" type="email" label="Email" />
            <Input name="password" type="password" label="Password" />

            <div className="w-full text-right pb-10 pt-1 text-[#316FEA]">
              <Link to="/forget-password">Forgot your password?</Link>
            </div>
            <Button text="Log in to Qencode" />
          </form>
        </FormProvider>
        <div className="text-center w-full my-3">
          <span>Is your company new to Qencode? </span>
          <Link className="text-[#316FEA]" to="/">
            Sign up
          </Link>
        </div>
      </div>
    </div>
  )
}
