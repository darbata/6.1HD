import '../index.css'

import { Routes, Route, Outlet } from 'react-router-dom'
import { Toaster } from '@/components/ui/sonner'

import Layout from '@/app/layout/Layout'
import HomePage from '@/features/home/routes/HomePage'
import LoginPage from '@/features/auth/routes/LoginPage'
import SignUpPage from '@/features/auth/routes/SignUpPage'
import PricingsPage from '@/features/subscriptions/routes/PricingsPage'
import PostPage from '@/features/post/routes/PostPage'
import QuestionsPage from '@/features/questions/routes/QuestionsPage'
import SignOutPage from '@/features/auth/routes/SignOutPage'

import { AuthProvider } from './contexts/AuthContext'
import RequireAuth from './RequireAuth'

const App = () => {
  return (
    <>
      <Routes>
        <Route path='/login' element={<LoginPage />}/>
        <Route path='/signup' element={<SignUpPage />}/>
        <Route path='/signout' element={<SignOutPage />}/>

        <Route element = {<Layout />}>

          <Route element = {<RequireAuth />}>
            <Route index element={<HomePage />}/>
            <Route path='pricing' element={<PricingsPage />}/>
            <Route path='post' element={<PostPage />}/>
            <Route path='questions' element={<QuestionsPage />}/>
          </Route>

        </Route>

      </Routes>

      <Toaster />
    </>
  )
}

export default App