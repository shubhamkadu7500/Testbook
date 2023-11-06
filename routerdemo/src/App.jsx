
import './App.css'
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
 import { Navbar } from './Navbar/Navbar'
import { About } from './Pages/About'
import { Gallery } from './Pages/Gallery'
import { Home } from './Pages/Home'
import { Contact } from './Pages/Contact'
import { Error } from './Pages/Error'
import StudentData from './StudentData'
function App() {
  

  return (
    <Router>
        <Navbar/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/home' element={<Home/>}/>
          <Route path='/about'  element={<About/>}/>
          <Route path='/contact'  element={<Contact/>}/>
          <Route path='/gallery'  element={<Gallery/>}/>
          <Route path='/studentdata'  element={<StudentData/>}/>
          <Route path='/studentdata/:name/:location'  element={<StudentData/>}/>
          <Route path='*'  element={<Error/>}/>
        </Routes>
    </Router>
  )
}

export default App
