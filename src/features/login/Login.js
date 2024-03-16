import React from 'react'
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
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { login } from '../../entities/api/requests'

const validationSchema = yup.object().shape({
  email: yup.string().email('Invalid email').required('Email is required'),
  password: yup.string().required('Password is required'),
})

export default function LoginComponent() {
  const methods = useForm({ resolver: yupResolver(validationSchema) })
  const {user,error,loading} = useSelector((state)=>state.login)
  const dispatch = useDispatch()

  const onSubmit = data => {
    dispatch(login(data))
  }

  console.log(user,'user');
  console.log(error,'error');
  console.log(loading,'loading');

  return (
    <div>
      <Title text="Log in to your account" />
      <div className="flex gap-10">
        <IconButton text="Google" icon={<Google />} />
        <IconButton text="Google" icon={<Git />} />
      </div>
      <Divider />
      <FormProvider {...methods}>
        <form onSubmit={methods.handleSubmit(onSubmit)}>
          <Input name="email" type="email" label="Email" />
          <Input name="password" type="password" label="Password" />

          <div className="w-full text-end pb-10 pt-1  text-[#316FEA]">
            <Link to="/forget-password">Forgot your password?</Link>
          </div>
          <Button text="Log in to Qencode" />
        </form>
      </FormProvider>
      <div className="text-center w-full my-3">
        <span>Is your company new to Qencode? </span>
        <Link className="text-[#316FEA]" to="/">Sign up</Link>
      </div>
    </div>
  )
}
