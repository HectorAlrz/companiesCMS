import React, { useState } from 'react'
import {useField } from 'formik'
import * as Yup from 'yup'


const DataInput = ({ label, ...props }) => {
  const [field, meta] = useField(props)
  return (
    <>
    <div className='h-auto my-5 flex flex-col flex-auto'>
      <label
        className='flex peer text-sm mb-1 text-gray-700 '
        htmlFor={props.id || props.name}
      >
        {label}
      </label>
      
      <input
        className={(meta.touched && meta.error) ? 'w-280px h-30px pl-1 pt-1  border-2 border-red-700 rounded' : 'w-280px h-30px pl-1 pt-1 hover:border-gray-400 bg-white rounded border  focus:bg-white focus:shadow-xl'}
        {...field}
        {...props}
      />
      {(meta.touched && meta.error) && (
        <div className='w-280px lg:w-full top-12     text-white text-xs bg-red-500 text-center rounded'>{meta.error}</div>
      )}
    </div>
    </>
  )
}

export default DataInput