import React, { useState } from "react";
import { Formik, Form } from 'formik'
import * as Yup from 'yup'
import { companySchema } from "../../lib/validations";

import DataInput from "../../components/DataInput";
import TextInput from "../../components/TextInput"
export default function AddCompanie() {

    return (
        <>
            <div className="flex justify-center text-left mt-10px">
                <div className='border-2 border-gray-400 p-4 rounded-md mb-5 shadow-inner'>
                    <h3 >Create a New Company</h3>
                    <Formik
                        // .: form model formik
                        initialValues={{
                            name: '',
                            description: '',
                            logo_url: '',
                            email: '',
                            url: '',
                            crunchbase_url: '',
                            linkedin_url: '',
                            twitter_url: '',
                        }}
                        // .: Validation Schema using Yup
                        validationSchema={companySchema}
                        onSubmit={(values, { setSubmitting }) => {
                            setTimeout(() => {
                                alert(JSON.stringify(values, null, 2))
                                setSubmitting(false)

                            }, 400)
                        }}
                    >
                        <Form>
                            <div className='flex justify-center'>
                                <DataInput
                                    label='Company Name'
                                    name='name'
                                    type='text'
                                />
                            </div>
                            <div className='flex flex-col lg:flex-row content-center'>
                                <div className=' justify-center flex-col mr-5'>
                                    <DataInput
                                        label='Company Website URL'
                                        name='url'
                                        type='text'
                                    />
                                    <DataInput
                                        label='Logo URL'
                                        name='logo_url'
                                        type='text'
                                    />
                                    <DataInput
                                        label='Crunchbase URL'
                                        name='crunchbase_url'
                                        type='text'
                                    />
                                </div>
                                <div className=' justify-evenly flex-col'>
                                    <DataInput
                                        label='Email Adress'
                                        name='email'
                                        type='text'
                                    />
                                    <DataInput
                                        label='Twitter Handle'
                                        name='twitter_url'
                                        type='text'
                                    />
                                    <DataInput
                                        label='LinkedIn Url'
                                        name='linkedin_url'
                                        type='text'
                                    />
                                </div>
                            </div>
                            <div className='flex justify-center'>
                                <TextInput
                                    label='Description'
                                    name='description'
                                    type='text'
                                />
                            </div>

                            <div className='flex justify-end'>
                                <button type='submit' className=' bg-blue-400 w-100px  h-30px mb-1 bg-plover-blue hover:bg-blue-700 text-white font-normal rounded'>
                                    Save
                                </button>
                            </div>
                        </Form>
                    </Formik>
                </div>
            </div>
        </>
    )
}