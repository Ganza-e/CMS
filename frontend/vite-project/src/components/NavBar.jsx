
import { Link } from "react-router-dom"

function NavBar() {
  return (
    
      
    <div className="container"> 
       
      <nav>
       LEADING TVET SCHOOL
        <Link to="/"className="nav-link">Home</Link>
        <Link to="/About"className="nav-link">About</Link>
        <Link to="/Contact"className="nav-link">Contact</Link>
        <Link to="/Dashboard"className="nav-link">Dashboard</Link>
        <Link to="/Login"className="nav-link">Login</Link>
        <Link to="/Register"className="nav-link">Register</Link>
        
        
      </nav>
    </div>
    
    
  )
}

export default NavBar
