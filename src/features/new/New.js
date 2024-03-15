import React from 'react'
import Title from '../../widgets/Title'
import Divider from '../../widgets/Divider'
import { FormProvider, useForm } from 'react-hook-form'
import Input from '../../widgets/Input'
import Button from '../../widgets/Button'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'

const validationSchema = yup.object().shape({
  password: yup.string().required('Password is required'),
  passwordConfirm: yup.string().required('Password is required'),

})

export default function NewComponent() {
  const methods = useForm({ resolver: yupResolver(validationSchema) })

  const onSubmit = data => {
    console.log(data)
  }
  return (
    <div>
      <Title text="Create new Password?" />
      <div className="w-[400px]"></div>
      <div className="my-10" />
      <Divider />
      <FormProvider {...methods}>
        <form onSubmit={methods.handleSubmit(onSubmit)}>
          <div className='w-full -mb-7 text-start'><b>Password</b></div>
          <Input name="password" type="password" label="Password" />
          <div className="my-3" />

          <div className='w-full -mb-7 text-start'><b>Confirm Password</b></div>
          <Input name="password" type="password" label="Confirm Password" />

          <div className="my-7" />
          <Button text="Reset Password" />
      
        </form>
      </FormProvider>
    </div>
  )
}
