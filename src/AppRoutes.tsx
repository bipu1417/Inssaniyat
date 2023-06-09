import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';

import Home from './components/Home/Home';
//@ts-ignore
import Home2 from './components/Home/Home2';
import Login from './components/Login/Login';
import Admin from './components/Admin/Admin';
//@ts-ignore
import Navbar from './components/NavBar/Navbar';
import { useAuth } from './contexts/AuthContext';
import ForgotPassword from './components/Login/ForgotPassword';

const AppRoutes = () => {
    const { currentUser } = useAuth()
  
    return(<Router>
      <Navbar name='nav' /> 
         <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/h" element={<Home2 />} />
            <Route path="/login" element={<Login />} />
            <Route path="/forgot-password" element={currentUser ? <Navigate to="/"/> : <ForgotPassword />} />

            <Route path='/admin' element={currentUser ? <Admin /> : <Navigate to="/login" />} />

            <Route path='*' element={<Navigate to="/"/>} />
          </Routes>
    </Router>)
}

export default AppRoutes;