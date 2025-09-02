import '../index.css'
import { Routes, Route, Outlet } from 'react-router-dom'
import Layout from '@/app/layout/Layout'
import HomePage from '@/features/home/routes/HomePage'
import LoginPage from '@/features/auth/routes/LoginPage'
import SignUpPage from '@/features/auth/routes/SignUpPage'

const App = () => {
  return (
    <Routes>
      <Route path='/login' element={<LoginPage />}/>
      <Route path='/signup' element={<SignUpPage />}/>
      <Route element = {<Layout />}>
        <Route path='/' element={<HomePage />}/>
      </Route>
    </Routes>
  )
}

export default App
