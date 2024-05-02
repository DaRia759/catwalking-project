import { Route, Routes } from 'react-router-dom'
import { BrowserRouter } from 'react-router-dom'
import HomePage from './pages/HomePage'
import Animals from './pages/Animals'
import FAQ from './pages/FAQ'
import AboutUs from './pages/AboutUs'
import Donation from './pages/Donate'
import Contact from './pages/Contact'



const App = () => {
  return (
    <BrowserRouter>
      <Routes>
          <Route path='/' element={<HomePage/>} />
          <Route path='/animalslist' element={<Animals/>} />
          <Route path='/faq' element={<FAQ />} />
          <Route path='/about' element={<AboutUs />} />
          <Route path='/donation' element={<Donation/>} />
          <Route path='/contacts' element={<Contact/>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
