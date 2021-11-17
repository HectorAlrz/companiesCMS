import React from 'react'


export default function CompanieCard({ title, resume, image }) {
    return (
        <>
            <div className='text-center border-2 border-gray-300 rounded shadow-2xl mb-4 mx-2 h-30 hover:bg-gray-200 sm:w-539px'>

                <h2 className='text-center sm:text-left sm:pl-2 mt-2'>{title}</h2>

                <div className='flex flex-col sm:flex-row items-center py-2 px-2'>
                    <img className='object-cover h-8 w-8 mb-2 sm:mr-2' src={image} alt='img' />

                    <div className='flex items-center'>
                        <span className='text-xs sm:text-left'>{resume.split(" ").splice(0, 20).join(" ")+ '...'}</span>
                    </div>

                </div>
            </div>
            
        </>
    )
}