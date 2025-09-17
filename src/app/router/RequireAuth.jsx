import { Navigate, Outlet } from 'react-router-dom'
import { useAuth } from '@/app/contexts/AuthContext'

export default function RequireAuth() {
  const { currentUser } = useAuth()

  if (!currentUser) {
    return <Navigate to="/login" />
  }

  return <Outlet />
}