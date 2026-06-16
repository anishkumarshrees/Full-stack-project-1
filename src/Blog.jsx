import './Blog.css'
import { Link } from 'react-router-dom'
import Container from './Container'

function Blog(){
    return(
        <>
        <nav className="navbar">
  <div className="logo">MyBlog</div>

  <ul className="nav-links">
    <li><Link to="/">Home</Link></li>
    <li><a href="#">Blog</a></li>
    <li><a href="#">Categories</a></li>
    <li><Link to="/about">About</Link></li>
    <li><a href="#">Contact</a></li>
  </ul>

  <div className="icons">
    <button className="search-btn">🔍</button>
    <button className="theme-btn">🌙</button>
  </div>
</nav>
<div className='hello'>this is blog page
</div>
<div>
  <Container text="blog" />
</div>
        </>
    )
}
export default Blog