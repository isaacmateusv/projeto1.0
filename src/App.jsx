import { BrowserRouter, Routes, Route} from 'react-router-dom';
import './App.css'
import Home from './pages/Home/Home'
import Login from './pages/Login/Login'
import SignUp from './pages/SignUp/SignUP.JSX'
import RecoverPassword from './pages/RecoverPassword/RecoverPassword';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/home" element={<Home />} />
          <Route path="/recoverpassword" element={<RecoverPassword />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
