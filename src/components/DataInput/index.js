import React, { useState } from 'react'
import {useField } from 'formik'
import * as Yup from 'yup'


const DataInput = ({ label, ...props }) => {
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
      <input
        className='w-280px h-30px pl-1 pt-1 hover:border-gray-400 bg-white rounded border  focus:bg-white focus:shadow-xl'
        {...field}
        {...props}
      />
      {(meta.touched && meta.error) && (
        <div className='w-280px top-12 mt-1 text-white bg-red-500 text-center rounded'>{meta.error}</div>
      )}
    </div>
    </>
  )
}

export default DataInput