import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
} from "react-router-dom"

// .: Components
import AddCompanie from './Pages/AddCompanie';
import CompanieList from './Pages/CompanieList';
import CompanieInfo from './Pages/CompanieInfo'

function App() {
  return (
    <>
      <Router>
      <div className='flex flex-col justify-center '>

        <div className="sticky top-0 flex justify-evenly h-30px mb-2 shadow-lg bg-white">
          <div className="mt-1 flex justify-center w-full">

            <Link className="mr-5" to="/">
              <button className='hover:text-gray-600 hover:bg-gray-50 px-1 rounded' >
                Home
              </button>
            </Link>

            <Link to="/addCompanie">
              <button className='hover:text-gray-600 hover:bg-gray-50 px-1 rounded'>
                Add Company
              </button>
            </Link>

            <button className='hidden'>
              <svg className="inline-block w-6 h-6 stroke-current" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" >
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path>
              </svg>
            </button>

          </div>
        </div>
          <Routes>
            <Route path='/' element={<CompanieList />} />
            <Route path='AddCompanie' element={<AddCompanie />} />
            <Route path='/CompanieInfo/:id' element={<CompanieInfo />} />
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
