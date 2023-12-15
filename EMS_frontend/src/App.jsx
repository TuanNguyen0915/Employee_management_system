// mpm modules
import { Routes, Route } from 'react-router-dom'

//pages
import Home from "./pages/Home/Home"
import DashBoard from './pages/DashBoard/DashBoard'
import Employees from './pages/Employees/Employees'
import Category from './pages/Category/Category'
import Profile from './pages/Profile/Profile'
import LogOut from './pages/LogOut/LogOut'
import AddEmployees from './pages/AddEmployees/AddEmployees'
// css
import './App.css'


const App = () => {
  return (
    <>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/dashboard' element={<DashBoard />} />
        <Route path='/employees' element={<Employees />} />
        <Route path='/employees/add_employees' element={<AddEmployees />} />
        <Route path='/categories' element={<Category />} />
        <Route path='/profile' element={<Profile />} />
        <Route path='logout' element={<LogOut />} />
      </Routes>
    </>
  )
}

export default App