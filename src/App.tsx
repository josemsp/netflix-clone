import Navbar from "@/components/Navbar"
import Home from "@/features/Home"
import { Route, Routes } from "react-router-dom"
import { AuthContextProvider } from "./core/context/AuthContext"
import SignUp from "./features/SignUp"
import Account from "./features/Account"
import LogIn from "./features/LogIn"
import ProtectedRoute from "./components/ProtectedRoute"

function App() {

  return (
    <AuthContextProvider>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<LogIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/account" element={<ProtectedRoute><Account /></ProtectedRoute>} />
      </Routes>
    </AuthContextProvider>
  )
}

export default App
