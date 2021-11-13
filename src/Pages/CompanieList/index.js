import React from "react";
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link,
    BrowserRouter
  } from "react-router-dom"

// .: Components
import CompanieCard from "../../components/CompanieCard";
import CompanieInfo from '../../Pages/CompanieInfo'

export default function CompanieList() {

    return (
        <div className="flex justify-center text-center mt-50px">
            <div className=''>
                <div className='mb-2'>
                    <h3 className=' text-center text-2xl'>Companies CMS</h3>
                </div>
                <Link to='/CompanieInfo'>
                <CompanieCard />
                </Link>
            </div>
        </div>
    )
}