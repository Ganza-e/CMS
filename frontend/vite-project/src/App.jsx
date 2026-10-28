/*import Student from "./components/Student"

function App(){
  const subject = ["py","math"]
  return(
    <Student
    name = "ganza"
    skills = { subject }
    />
  )
}
export default App



import Student from "./components/Student"
function App () {
   
  return (
    <div>
      <Student
      name = "mama"
      age = {42}
      
      />
    </div>
    
  )
}
export default App */
import { BrowserRouter, Routes,Route } from 'react-router-dom'
import "./index.css"
import About from './components/About'
import Contact from './components/Contact'
import Dashboard from './components/Dashboard'
import Login from './components/Login'
import Register from './components/Register'
import NavBar from './components/NavBar'
import Home from './components/Home'


function App() {
  return (
    <div className="container">
      
      <BrowserRouter>
      <NavBar />
        <Routes >
            <Route path='/' element={<Home />}/>
            <Route path='/About' element={<About />}/>
            <Route path='/Contact' element={<Contact />}/>
            <Route path='/Login' element={<Login />}/>
            <Route path='/Register' element={<Register />}/>
            <Route path='/Dashboard' element={<Dashboard />}/>

        </Routes>
      </BrowserRouter>
        </div>
  )
}
export default App