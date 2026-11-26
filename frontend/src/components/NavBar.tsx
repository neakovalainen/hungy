import { Link } from "react-router-dom"
import { useNavigate } from "react-router-dom"

const NavBar = ({ setLoggedIn }: { setLoggedIn:(value: boolean) => void }) => {
  const navigate = useNavigate()

  const Logout = () => {
    window.localStorage.clear()
    setLoggedIn(false)
    navigate('/login')
  }
  return (
    <div className="navbar">
      <p className="navbartext">⋆｡ﾟ☁︎｡⋆｡ ﾟ☾ ﾟ｡⋆ ᨳ𐔌՞҂ ˕ ֊՞𐦯ᜊ</p>
      <Link to='/' className="navbarlinks">Home</Link>
      <Link to='/ingredients' className="navbarlinks">Ingredients</Link>
      <Link to='/recipes' className="navbarlinks">Recipes</Link>
      <p className="navbartext">ᨳ𐔌՞҂ ˕ ֊՞𐦯ᜊ ⋆｡ﾟ☁︎｡⋆｡ ﾟ☾ ﾟ｡⋆</p>
      <button id="logoutbutton" type="button" onClick={() => Logout()}> Log out </button>
    </div>
  )
}

export default NavBar