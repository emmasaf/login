import React from 'react'
import Title from '../../widgets/Title'
import { FormProvider, useForm } from 'react-hook-form'
import Input from '../../widgets/Input'
import Button from '../../widgets/Button'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'
import { useDispatch } from 'react-redux'
import { setNewPassword } from '../../shared/api/requests'
import { useNavigate, useSearchParams } from 'react-router-dom'
import { triggerNotification } from '../notifications/api/notificationSlice'

const validationSchema = yup.object().shape({
  password: yup.string().required('Password is required'),
  password_confirm: yup.string().required('Password is required'),
})

export default function NewComponent() {
  const methods = useForm({ resolver: yupResolver(validationSchema) })
  const dispatch = useDispatch()
  const [searchParams] = useSearchParams()
  const token = searchParams.get('token') || null
  const secret = searchParams.get('secret') || null
  const nav = useNavigate()

  const onSubmit = data => {
    data.token = token
    data.secret = secret

    dispatch(setNewPassword(data)).then(({payload})=>{
      if (!payload.error) {
        dispatch(
          triggerNotification({ type: 'success', message: 'Password is changed' })
        );
        nav('/')
       }else{
        dispatch(
          triggerNotification({ type: 'error', message: 'Secret key or token is wrong' })
        );
       }
    })
  }

  return (
    <div>
      <Title text="Create new Password?" />
      <div className="my-10" />
      <FormProvider {...methods}>
        <form
          className="flex flex-col items-center justify-center"
          onSubmit={methods.handleSubmit(onSubmit)}
        >
          <div className="w-full sm:ml-6 -mb-7 text-start">
            <b>Password</b>
          </div>
          <Input name="password" type="password" label="Password" />
          <div className="my-3" />
          <div className="w-full sm:ml-6  -mb-7 text-start">
            <b>Confirm Password</b>
          </div>
          <Input
            name="password_confirm"
            type="password"
            label="Confirm Password"
          />
          <div className="my-7" />
          <Button text="Reset Password" disable={ !Boolean(token) && !Boolean(secret)}/>
        </form>
      </FormProvider>
    </div>
  )
}
