import React from 'react'
import RegisterForm from './RegisterForm'

export default function RegisterPage() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8 text-center">
        <h1 className="text-3xl font-extrabold text-gray-900 mb-8">
          Become a Fresh Cart User
        </h1>
        <RegisterForm />
      </div>
    </div>
  )
}
