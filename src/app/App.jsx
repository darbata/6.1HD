import '../index.css'

import { Routes, Route } from 'react-router-dom'
import { Toaster } from '@/components/ui/sonner'

import Layout from '@/app/layout/Layout'
import HomePage from '@/features/home/routes/HomePage'
import LoginPage from '@/features/auth/routes/LoginPage'
import SignUpPage from '@/features/auth/routes/SignUpPage'
import PricingsPage from '@/features/subscriptions/routes/PricingsPage'
import PostPage from '@/features/post/routes/PostPage'
import QuestionsPage from '@/features/questions/routes/QuestionsPage'
import SignOutPage from '@/features/auth/routes/SignOutPage'
import ChatPage from '@/features/chat/routes/ChatPage'
import ArticleGalleryPage from '@/features/articles/routes/ArticleGalleryPage'
import ArticlePage from '@/features/articles/routes/ArticlePage'
import AiPage from '@/features/ai-bot/routes/AiPage'

import { AuthProvider } from './contexts/AuthContext'
import RequireAuth from './router/RequireAuth'
import ForgotPasswordPage from '@/features/auth/routes/ForgotPasswordPage'

const App = () => {
  return (
    <>
      <Routes>
        <Route path='/login' element={<LoginPage />}/>
        <Route path='/signup' element={<SignUpPage />}/>
        <Route path='/signout' element={<SignOutPage />}/>
        <Route path='/forgot-password' element={<ForgotPasswordPage />}/>

        <Route element = {<Layout />}>

          <Route element = {<RequireAuth />}>
            <Route index element={<HomePage />}/>

            <Route path='post' element={<PostPage />}/>

            <Route path='questions' element={<QuestionsPage />}/>

            <Route path='articles' element={<ArticleGalleryPage />}/>
            <Route path="articles/:articleId" element={<ArticlePage />} />

            <Route path='pricing' element={<PricingsPage />}/>

            <Route path='chat' element={<ChatPage />}/>

            <Route path='ai' element={<AiPage />}/>

          </Route>

        </Route>

      </Routes>

      <Toaster />
    </>
  )
}

export default App