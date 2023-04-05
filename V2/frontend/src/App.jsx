import {BrowserRouter, Routes, Route, Navigate} from 'react-router-dom'
import {useAuthContext} from './hooks/useAuthContext'

import Home from './pages/Home'
import Login from './pages/Login'
import Signup from './pages/Signup'
import PasswordReset from './pages/PasswordReset'

function App() {

  return (
   <>
   <BrowserRouter>
   <div className="pages">
    <Routes>
      <Route element={<Home />} path="/" />
      <Route element={<Login />} path="/login" />
      <Route element={<Signup />} path="/signup" />
      <Route element={<PasswordReset />} path="/password-reset" />
    </Routes>
   </div>
   </BrowserRouter>
   </>
  )
}

export default App
