import './App.css'
import CreateCategory from './pages/CreateCategory/CreateCategory'
import EditForm from './pages/EditForm/EditForm'
import Home from './pages/Home/Home'
import { Navigate, Routes, Route } from "react-router-dom"
import { Toaster } from "react-hot-toast";
import LoginPage from './pages/Login/LoginPage'
import { useAuthContext } from "./context/AuthContext";

function App() {
  const { authUser } = useAuthContext()
  console.log(authUser)

  return (
    <>
      <Routes>

        <Route path='/' element={authUser ? <Home /> : <Navigate to={"/login"} />} />
        <Route path="/login" element={authUser ? <Navigate to={"/"} /> : <LoginPage />} />
        < Route path='/create/application' element={authUser ? <EditForm /> : <Navigate to={"/login"} />} />
        < Route path='/update/application/:applicationId' element={authUser ? <EditForm /> : <Navigate to={"/login"} />} />
        < Route path='/create/category' element={authUser ? <CreateCategory/> : <Navigate to={"/login"} />} /> 
      </Routes>
      <Toaster />

    </>
  )
}

export default App
