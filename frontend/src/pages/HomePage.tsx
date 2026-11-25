const HomePage = () => {
  const user = localStorage.getItem('loggedhungyUser')?.replaceAll('"', '') // user is saved as a string "user", this removes the outer " symbols 
  return (
    <div className="centerdiv text-fade-in" >
      <h1>Welcome to homepage yay!</h1>
      <p>currently logged in as: {user}</p>
    </div>
  )
}

export default HomePage