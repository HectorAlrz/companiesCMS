import React from 'react'


export default function CompanieCard(props) {

    return (
        <>
                <div className='border-2 border-black rounded shadow-2xl mb-4 pr-2 hover:bg-gray-200 w-280px sm:w-539px'>

                    <h2 className='text-center sm:text-left p-2'>Coinbase</h2>

                    <div className='flex flex-wrap sm:flex-nowrap justify-center p-3'>

                        <div className='flex justify-center w-12 h-10 mr-2  mb-1'>
                            <img className='object-contain border-2' src='https://pbs.twimg.com/profile_images/1389265488836890624/8u5wEQ9Z_400x400.png' alt='img' />
                        </div>

                        <div>
                            <p className='text-xs'>Coinbase is an online platform that allows merchants, consumers, and traders to transact with digital currency.</p>
                        </div>

                    </div>
                </div>
        </>
    )
}