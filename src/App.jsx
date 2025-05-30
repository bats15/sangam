import {useState, useEffect} from 'react'
import Navbar from './components/Navbar'
import Page1 from './components/page1/Page1'
import Page2 from './components/page2/Page2'
import Page0 from './components/page0/Page0'
import Page3 from './components/page3/Page3'
import Page4 from './components/page4/Page4'

import ClimbingBoxLoader from 'react-spinners/ClimbingBoxLoader';

import './App.css'


function App() {
  const [loading, setLoading] = useState(true);

  
useEffect(() => {
  const timer = setTimeout(() => {
    setLoading(false);  // stop loading after 2s
  }, 4000);

  return () => clearTimeout(timer);
}, []);
  if (loading) {
  return (
    <div style={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      height: '100vh',
      width: '100vw',
      scale: '0.5',
    }}>
      <ClimbingBoxLoader
        color="#DDA853"
        loading={loading}
        size={30}
        aria-label="Loading Spinner"
        data-testid="loader"
      />
    </div>
  );
}
  return (
    <main>
      <Navbar />
      <div id="page0"></div><Page0 />
      <div id="page1"></div><Page1 />
      <div id="page2"></div><Page2 />
      <div id="page3"></div><Page3 />
      <div id="page4"></div><Page4 />
    </main>
  )
}

export default App
