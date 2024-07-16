import Main from "@/components/Main"
import { UserAuth } from "@/core/context/AuthContext"
import { Navigate } from "react-router-dom"

const Home = () => {
  const { user } = UserAuth()
  if (user) {
    return <Navigate to={'/account'} />
  }
  
  return (
    <div>
      <Main />
    </div>
  )
}

export default Home