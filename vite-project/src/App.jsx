import { Route, Routes } from 'react-router-dom'
import { BrowserRouter } from 'react-router-dom'
import HomePage from './pages/HomePage'
import Animals from './pages/Animals'
import FAQ from './pages/FAQ'
import AboutUs from './pages/AboutUs'
import Navigation from './components/Header/Header'


const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Navigation/>}>
          <Route index element={<HomePage/>} />
          <Route path='/animals' element={<Animals/>} />
          <Route path='/faq' element={<FAQ />} />
          <Route path='/about' element={<AboutUs />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
