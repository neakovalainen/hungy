import {
  BrowserRouter,
  Routes,
  Route,
  Link
 } from 'react-router-dom'

import RegistrationPage from './pages/RegistrationPage'
import IngredientPage from './pages/IngredientPage'
import LogInPage from './pages/LogInPage'
import HomePage from './pages/HomePage'
import NavBar from './components/NavBar'
const App = () => {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path='/login' element={<LogInPage />} />
        <Route path='/registration' element={<RegistrationPage />} />
        <Route path='/' element={<HomePage />} />
        <Route path='/ingredients' element={<IngredientPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
