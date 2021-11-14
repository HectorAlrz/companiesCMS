import React, { useState } from 'react'
import {useField } from 'formik'
import * as Yup from 'yup'


const TextInput = ({ label, ...props }) => {
  const [field, meta] = useField(props)
  return (
    <>
    <div className='h-auto my-5 flex flex-col flex-auto'>
      <label
        className='peer text-sm mb-1 text-gray-700 '
        htmlFor={props.id || props.name}
      >
        {label}
      </label>
      <textarea
        className='w-280px sm:w-full pl-1 pt-1 hover:border-gray-800 bg-white rounded border  focus:bg-white focus:shadow-xl'
        {...field}
        {...props}
      />
      {(meta.touched && meta.error) && (
        <div className='top-12 mt-1 text-white bg-red-500 text-center rounded'>{meta.error}</div>
      )}
    </div>
    </>
  )
}

export default TextInput