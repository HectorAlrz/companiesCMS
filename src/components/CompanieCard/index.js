import React from 'react'


export default function CompanieCard({ title, resume, image }) {

    return (
        <>
            <div className='text-center border-2 border-black rounded shadow-2xl mb-4 pr-2 hover:bg-gray-200 w-280px sm:w-539px'>

                <h2 className='text-center sm:text-left sm:pl-2'>{title}</h2>

                <div className='flex flex-wrap sm:flex-nowrap justify-center sm:justify-start  p-2 sm:p-3'>

                    <div className='flex justify-center w-12 h-10 mr-2  mb-1'>
                        <img className='object-fit border-2' src={image} alt='img' />
                    </div>

                    <div className='flex content-center sm:w-392px '>
                        <p className='text-xs sm:text-left'>{resume}</p>
                    </div>

                </div>
            </div>
        </>
    )
}