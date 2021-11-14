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
        <div className='flexflex-col justify-center '>
          <nav className='flex items-center justify-center flex-wrap p-6'>
            <Link className="inline-block border border-blue-500 rounded py-1 px-3 mr-3 bg-blue-500 text-white" to="/">Home</Link>
            <Link className="inline-block border border-blue-500 rounded py-1 px-3 mr-3 bg-blue-500 text-white" to="/addCompanie">Add Company</Link>
          </nav>
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
