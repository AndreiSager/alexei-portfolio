import { useState, useEffect } from 'react'
import { About } from './components/About'
import { Footer } from './components/Footer'
import { Gallery } from './components/Gallery'
import { Navbar } from './components/Navbar'
import { ClimbingBoxLoader } from 'react-spinners'

function App() {
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false)
    }, 3000);
  }, [])

  return (
    <>
    {isLoading ? 
      <div className='flex h-[100vh] justify-center items-center'>
            <ClimbingBoxLoader
            loading={isLoading}
            size={30}
            color='#7F5539'
            aria-label="Loading Spinner"
            data-testid="loader"
          />
      </div>
    :
    <div className={isLoading ? "hidden" : "block"}>
      <Navbar/>
      <About/>
      <Gallery/>
      <Footer/>
    </div>
    }
    </>
  )
}

export default App
