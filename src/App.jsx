import './App.css'
import { BrowserRouter,Link,Route,Routes } from 'react-router-dom'
import Home from './Home'
import About from './About'
import Blog from './Blog'


function App() {
  
  //javscript sabai eha hanni function rw return ko bich maa

  return (
    <BrowserRouter>
    <Routes>
      <Route path='/'element={<Home />} />
      <Route path='/about' element={<About />} />
      <Route path='/blog' element={<Blog/>} />

      
    </Routes>
    </BrowserRouter>
  )
}

export default App