import React, {useState, useEffect} from "react";
import {
    BrowserRouter as Router,
    Link,
  } from "react-router-dom"

// .: API
import { getCompanies } from '../../lib/api'

// .: Components
import CompanieCard from "../../components/CompanieCard";

export default function CompanieList() {
    const [companieCards, setCompanieCards] = useState([])
    
    useEffect(() => {
        async function fetchData() {
            const result = await getCompanies()
            setCompanieCards(result.data.companies)
            console.log('companies', result.data.companies)
            console.log('estado', companieCards)
        }
        fetchData()
    }, [])

    return (
        <div className="flex justify-center text-center mt-50px">
            <div className=''>
                <div className='mb-2'>
                    <h3 className=' text-center text-2xl'>Companies CMS</h3>
                </div>
                {
                    companieCards.map((item)=> {
                        const {_id, name, description, logo_url} = item
                        console.log(name)
                        return (
                            <Link to={`/CompanieInfo/${_id}`}>
                            <CompanieCard
                             title={name}
                             key={_id}
                             resume={description}
                             image={logo_url} 
                            />
                            </Link>
                        )
                    })                   
                } 
            </div>
        </div>
    )
}