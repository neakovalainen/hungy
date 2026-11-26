import {
  Routes,
  Route,
  Navigate,
  useLocation
 } from 'react-router-dom'

import RecipePage from './pages/RecipePage' 
import RegistrationPage from './pages/RegistrationPage'
import IngredientPage from './pages/IngredientPage'
import LogInPage from './pages/LogInPage'
import HomePage from './pages/HomePage'
import NavBar from './components/NavBar'
import { useState } from 'react'


const App = () => {
  const [loggedIn, setLoggedIn] = useState(() => Boolean(window.localStorage.getItem('loggedhungyUser')))
  const location = useLocation()

  const authRoutes = ['/registration', '/login'] // don't show navbar on these routes
  const showNavigationBar = !authRoutes.includes(location.pathname)

  return (
    <div>
    {showNavigationBar && <NavBar setLoggedIn={setLoggedIn} />}
    <Routes>
      <Route 
      path='/' 
      element={loggedIn
      ? <HomePage />
      : <Navigate to='/login' replace />
      } />
      <Route 
      path='/ingredients'
      element={loggedIn
      ? <IngredientPage loggedIn={loggedIn}/>
      :  <Navigate to='/login' replace /> 
      } />
      <Route 
      path='/login' 
      element={loggedIn
      ? <Navigate to='/' replace />
      : <LogInPage setLoggedIn={setLoggedIn}/>
      } />
      <Route 
      path='/registration' 
      element={loggedIn
      ? <Navigate to='/' replace />
      : <RegistrationPage />
      } />
    </Routes>
    </div>
  )
}

export default App
