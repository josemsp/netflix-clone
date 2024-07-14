import { UserAuth } from '@/core/context/AuthContext'
import { Navigate } from 'react-router-dom'

const ProtectedRoute = ({ children }: { children: React.ReactNode }) => {
  const { user } = UserAuth()

  if (!user) {
    return <Navigate to={'/'} />
  }
  return children
}

export default ProtectedRoute