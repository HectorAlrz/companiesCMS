import React, { useState } from 'react'
import {useField } from 'formik'
import * as Yup from 'yup'

const DataInput = ({ label, ...props }) => {
  const [field, meta] = useField(props)
  return (
    <>
    <div className='h-auto w-280px md:w-408px  lg:w-539px my-5 flex flex-col flex-auto'>
      <label
        className='peer text-md mb-1 text-gray-700 '
        htmlFor={props.id || props.name}
      >
        {label}
      </label>
      <input
        className=' pl-1 pt-1 hover:border-gray-400 bg-white rounded border  focus:bg-white focus:shadow-xl'
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

export default DataInput