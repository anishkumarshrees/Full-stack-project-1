import About from './About'
import './Home.css'
import { Link } from 'react-router-dom'

function Home(){
    return (
        <>
        <nav className="navbar">
  <div className="logo">MyBlog</div>

  <ul className="nav-links">
    <li><a href="#">Home</a></li>
    <li><a href="#">Blogs</a></li>
    <li><a href="#">Categories</a></li>
    <li><Link to="/about">About</Link></li>
    <li><a href="#">Contact</a></li>
  </ul>

  <div className="icons">
    <button className="search-btn">🔍</button>
    <button className="theme-btn">🌙</button>
  </div>
</nav>
        </>
    )
}

export default Home