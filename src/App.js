import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  BrowserRouter
} from "react-router-dom"

// .: Components
import AddCompanie from './Pages/AddCompanie';
import CompanieList from './Pages/CompanieList';
import CompanieInfo from './Pages/CompanieInfo'

function App() {
  return (
    <>
      <Router>
        <div>
          <nav>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/AddCompanie">About</Link>
              </li>
            </ul>
          </nav>
            <Routes>
              <Route path='/' element={<CompanieList />} />
              <Route path='AddCompanie' element={<AddCompanie />} />
              <Route path='CompanieInfo' element={<CompanieInfo />} />
            </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
