
import './App.css'
import { BrowserRouter,Link,Route,Routes } from 'react-router-dom'
import Home from './Home'
import About from './About'

function App() {
  
  //javscript sabai eha hanni function rw return ko bich maa

  return (
    <BrowserRouter>
    <Routes>
      <Route path='/'element={<Home />} />
      <Route path='about' element={<About />} />

      
    </Routes>
    </BrowserRouter>
  )
}

export default App
