import {
  BrowserRouter,
  Routes,
  Route,
  Link
 } from 'react-router-dom'

import RegistrationPage from './pages/RegistrationPage'
import IngredientPage from './pages/IngredientPage'
import LogInPage from './pages/LogInPage'
const App = () => {
  return (
    <BrowserRouter>
      <div>
        <Link to="/registration">registration</Link>
      </div>
      <Routes>
        <Route path='/login' element={<LogInPage />} />
        <Route path='/registration' element={<RegistrationPage />} />
        <Route path='/ingredients' element={<IngredientPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
