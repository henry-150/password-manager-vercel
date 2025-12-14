import './App.css'
import Footer from './components/Footer'
import MainLogo from './components/MainLogo'
import Manager from './components/Manager'
import Navbar from './components/Navbar'

function App() {

  return (
    <>
      <Navbar />
      <div className="">
        <MainLogo />
      </div>
      <div className="min-h-[78.8vh]">
        <Manager />
      </div>
      <Footer />
    </>
  )
}

export default App