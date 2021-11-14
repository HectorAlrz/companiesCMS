import React, { useState, useEffect } from "react";
import { useParams } from "react-router";
import { getCompaniesById } from "../../lib/api";

export default function CompanieInfo() {
    
    let {id} = useParams()
    const [info, setInfo] = useState([])
    const {name, email, description, logo_url, url, linkedin_url, crunchbase_url, twitter_url} = info

    useEffect(()=>{
        async function fetchData(){
            const result = await getCompaniesById(id)
            console.log('info', result.data.companie)
            setInfo(result.data.companie)
        }
        fetchData(id)
    }, [])

     return (
        <div className="flex justify-center text-center mt-50px">

            <div className='text-center border-2 border-black rounded shadow-2xl w-280px sm:w-539px'>
                <div>
                    <div className='flex flex-wrap sm:flex-nowrap justify-center sm:justify-between   p-2 sm:p-3'>

                        <div className='flex justify-center mr-2'>
                            <img className='object-fit border-2 w-100px h-100px ' src={logo_url} alt='img' />
                        </div>

                        <div className='flex flex-col justify-between content-center sm:w-392px '>
                            <h1 className='text-center sm:text-left text-3xl pb-1'>{name}</h1>
                            <p className='text-xs sm:text-left'>{description}</p>
                        </div>

                    </div>

                    <div className='flex justify-start mb-2'>
                        <ul className='flex flex-col text-xs text-center italic'>
                            <li className='flex p-3 h-8' >
                                <div className='flex mr-2'>
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 " fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>
                                </div>
                                <a className='hover:text-blue-800 underline' href={url}>{url}</a>
                            </li>
                            <li className='flex p-3 h-8' >
                                <div className='flex mr-2'>
                                    <svg viewBox="0 0 128 128" className="h-5 w-5">
                                        <path d="M40.254 127.637c48.305 0 74.719-48.957 74.719-91.403 0-1.39 0-2.777-.075-4.156 5.141-4.547 9.579-10.18 13.102-16.633-4.79 2.602-9.871 4.305-15.078 5.063 5.48-4.02 9.582-10.336 11.539-17.774-5.156 3.743-10.797 6.38-16.68 7.801-8.136-10.586-21.07-13.18-31.547-6.32-10.472 6.86-15.882 21.46-13.199 35.617C41.922 38.539 22.246 26.336 8.915 6.27 1.933 20.94 5.487 39.723 17.022 49.16c-4.148-.172-8.207-1.555-11.832-4.031v.41c0 15.273 8.786 28.438 21.02 31.492a21.596 21.596 0 01-11.863.543c3.437 13.094 13.297 22.07 24.535 22.328-9.305 8.918-20.793 13.75-32.617 13.72-2.094 0-4.188-.15-6.266-.446 12.008 9.433 25.98 14.441 40.254 14.422" fill="#1da1f2"></path>
                                    </svg>
                                </div>
                                <a className='hover:text-blue-800 underline' href={twitter_url}>{twitter_url}</a>
                            </li>
                            <li className='flex p-3 h-8' >
                                <div className='flex mr-2'>
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                    </svg>
                                </div>
                                <a className='hover:text-blue-800 unerline' href='https://wwww.gmail.com'>{email}</a>
                            </li>
                            <li className='flex p-3 h-8' >
                                <div className='flex mr-2'>
                                    <svg viewBox="0 0 128 128" className="h-5 w-5">
                                        <path fill="#0076b2" d="M116 3H12a8.91 8.91 0 00-9 8.8v104.42a8.91 8.91 0 009 8.78h104a8.93 8.93 0 009-8.81V11.77A8.93 8.93 0 00116 3z"></path><path fill="#fff" d="M21.06 48.73h18.11V107H21.06zm9.06-29a10.5 10.5 0 11-10.5 10.49 10.5 10.5 0 0110.5-10.49M50.53 48.73h17.36v8h.24c2.42-4.58 8.32-9.41 17.13-9.41C103.6 47.28 107 59.35 107 75v32H88.89V78.65c0-6.75-.12-15.44-9.41-15.44s-10.87 7.36-10.87 15V107H50.53z"></path>
                                    </svg>
                                </div>
                                <a className='hover:text-blue-800 underline' href={linkedin_url}>{linkedin_url}</a>
                            </li>
                            <li className='flex p-3 h-8' >
                                <div className='flex mr-2'>
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                                    </svg>
                                </div>
                                <a className='hover:text-blue-800 underline' href={crunchbase_url}>{crunchbase_url}</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}