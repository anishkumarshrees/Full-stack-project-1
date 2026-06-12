import './About.css'

function About(){
return(
   <>
    <nav className="navbar">
  <div className="logo">MyBlog</div>

  <ul className="nav-links">
    <li><a href="#">Home</a></li>
    <li><a href="#">Blogs</a></li>
    <li><a href="#">Categories</a></li>
    <li><a href="/About">About</a></li>
    <li><a href="#">Contact</a></li>
  </ul>

  <div className="icons">
    <button className="search-btn">🔍</button>
    <button className="theme-btn">🌙</button>
  </div>
</nav>
<div className='hello'>this is about page
</div>
   </>
)
}

export default About