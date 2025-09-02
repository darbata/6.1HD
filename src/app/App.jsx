import '../index.css'

import { Routes, Route, Outlet } from 'react-router-dom'
import { Toaster } from '@/components/ui/sonner'

import Layout from '@/app/layout/Layout'
import HomePage from '@/features/home/routes/HomePage'
import LoginPage from '@/features/auth/routes/LoginPage'
import SignUpPage from '@/features/auth/routes/SignUpPage'
import PricingsPage from '@/features/subscriptions/routes/PricingsPage'

const App = () => {
  return (
    <>
      <Routes>
        <Route path='/login' element={<LoginPage />}/>
        <Route path='/signup' element={<SignUpPage />}/>
        <Route element = {<Layout />}>
          <Route path='/' element={<HomePage />}/>
          <Route path='/pricing' element={<PricingsPage />}/>
        </Route>
      </Routes>

      {/* global notification component */}
      <Toaster />
    </>
  )
}

export default App