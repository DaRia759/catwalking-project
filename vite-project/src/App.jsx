import { Route, Routes } from 'react-router-dom'
import HomePage from './pages/HomePage'
import Animals from './pages/Animals'
import FAQ from './pages/FAQ'
import AboutUs from './pages/AboutUs'

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<HomePage/>} />
      <Route path='/animals' element={<Animals/>} />
      <Route path='/faq' element={<FAQ />} />
      <Route path='/about' element={<AboutUs/>} />
  </Routes>
  )
}

export default App
