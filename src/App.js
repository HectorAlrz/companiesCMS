import './App.css';

// .: Components
import CompanieCard from './components/CompanieCard'

function App() {
  return (
    <div className="flex justify-center text-center mt-50px">
      <div className=''>
        <div className='mb-2'>
          <h3 className=' text-center text-2xl'>Companies CMS</h3>
        </div>
        <CompanieCard />
      </div>
    </div>
  );
}

export default App;
