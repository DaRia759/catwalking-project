import { Route, Routes } from 'react-router-dom'
import { Suspense, lazy } from 'react'
import AppBar from './AppBar/AppBar';

const HomePage = lazy(() => import('./pages/HomePage'));
const Animals = lazy(() => import('./pages/Animals'));
const FAQ = lazy(() => import('./pages/FAQ'));
const AboutUs = lazy(() => import('./pages/AboutUs'));
const Donation = lazy(() => import('./pages/Donate'));
const Contact = lazy(() => import('./pages/Contact'));

const App = () => {
  return (
    <div>
      <AppBar/>
      <Suspense fallback={<div>Loading Page...</div>}>
      <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/animals' element={<Animals />} />
          <Route path='/faq' element={<FAQ />} />
          <Route path='/about' element={<AboutUs />} />
          <Route path='/donation' element={<Donation />} />
          <Route path='/contact' element={<Contact />} />
        </Routes>
      </Suspense>
    </div>
  )
}

export default App
