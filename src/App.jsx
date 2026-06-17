import './App.css'
import { BrowserRouter,Link,Route,Routes } from 'react-router-dom'
import Home from './Home'
import About from './About'
import Blog from './Blog'
import Test from './Test'
import UseState from './UseState'
import UseEffect from './UseEffect'


function App() {
  
  //javscript sabai eha hanni function rw return ko bich maa

  return (
    <BrowserRouter>
    <Routes>
      <Route path='/'element={<Home />} />
      <Route path='/about' element={<About />} />
      <Route path='/blog' element={<Blog/>} />
      <Route path='/test' element={<Test/>} />
      <Route path='/useState' element={<UseState/>} />
      <Route path='/useEffect' element={<UseEffect/>} />

      
    </Routes>
    </BrowserRouter>
  )
}

export default App