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

const validationSchema = yup.object().shape({
  email: yup.string().email('Invalid email').required('Email is required'),
  password: yup.string().required('Password is required'),
})

const clientId =
  '704640950707-8o2387j5b73pi6au9a8q1pdpnvjp0ajm.apps.googleusercontent.com'

const clientIdGit = 'af6895de3b570218d523'

export default function LoginComponent() {
  const methods = useForm({ resolver: yupResolver(validationSchema) })
  const { user, error, loading } = useSelector(state => state.login)
  const dispatch = useDispatch()
  const [searchParams] = useSearchParams()
  // const nav = useNavigate()

  const onSubmit = data => {
    dispatch(login(data))
  }

  const onGoogleSuccess = data => {
    console.log('succes: ', data)
  }

  const onGoogleFailure = data => {
    console.log('fail: ', data)
  }

  const onGitSuccess = data => {
    console.log('succes: ', data)
    window.location.assign(
      `https://github.com/login/oauth/authorize?client_id=${clientIdGit}`,
    )
  }

  useEffect(() => {
    const codeParams = searchParams.get('code')
    console.log(codeParams)
  }, [searchParams])

  useEffect(() => {
    if (error) {
      dispatch(
        triggerNotification({ type: 'error', message: 'User is invalid' }),
      )
    }
  }, [error])

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
