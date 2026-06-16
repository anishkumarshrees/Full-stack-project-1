import About from './About'
import Container from './Container'
import './Home.css'
import { Link } from 'react-router-dom'

function Home(){
    return (
        <>
        <nav className="navbar">
  <div className="logo"><Link to='/'>MyBlog</Link></div>

  <ul className="nav-links">
    {/* main use of link is when we use a the page refersh as whole but link doesnt referesh the page and directly get to the another page */}
    <li><Link to="/">Home</Link></li>
    <li><Link to="/blog">Blog</Link></li>
    <li><a href="#">Categories</a></li>
    <li><Link to="/about">About</Link></li>
    <li><a href="#">Contact</a></li>
  </ul>

  <div className="icons">
    <button className="search-btn">🔍</button>
    <button className="theme-btn">🌙</button>
  </div>
</nav>
<div className='container'>
<Container title="Hello" image="https://images.unsplash.com/photo-1498050108023-c5249f4df085"/>
<Container title="Hello" image="https://images.unsplash.com/photo-1506744038136-46273834b3fb"/>
</div>
        </>
    )
}

export default Home