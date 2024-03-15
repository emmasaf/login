import React from 'react'
import Title from '../../widgets/Title'
import Divider from '../../widgets/Divider'
import { FormProvider, useForm } from 'react-hook-form'
import Input from '../../widgets/Input'
import Button from '../../widgets/Button'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'
import { Link } from 'react-router-dom'

const validationSchema = yup.object().shape({
  email: yup.string().email('Invalid email').required('Email is required'),
})

export default function ForgetComponent() {
  const methods = useForm({ resolver: yupResolver(validationSchema) })

  const onSubmit = data => {
    console.log(data)
  }
  return (
    <div>
      <Title text="Forgot Password?" />
      <div className="w-[400px]"></div>
      <div className="my-10" />
      <Divider />
      <FormProvider {...methods}>
        <form onSubmit={methods.handleSubmit(onSubmit)}>
          <Input name="email" type="email" label="Email" />
          <div className="my-7" />

          <Button text="Send" />
          <div className="my-3" />

          <Button
            variant="out"
            type="button"
            text={<Link to="/">Cancel </Link>}
          />
        </form>
      </FormProvider>
    </div>
  )
}
