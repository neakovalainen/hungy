import { Link } from "react-router-dom"

const NavBar = () => {
  return (
    <div className="navbar">
      <p className="navbartext">⋆｡ﾟ☁︎｡⋆｡ ﾟ☾ ﾟ｡⋆ ᨳ𐔌՞҂ ˕ ֊՞𐦯ᜊ</p>
      <Link to='/' className="navbarlinks">Home</Link>
      <Link to='/ingredients' className="navbarlinks">Ingredients</Link>
      <p className="navbartext">ᨳ𐔌՞҂ ˕ ֊՞𐦯ᜊ ⋆｡ﾟ☁︎｡⋆｡ ﾟ☾ ﾟ｡⋆</p>
    </div>
  )
}

export default NavBar