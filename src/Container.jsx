
import './Container.css'
function Container({title , image}){
    return(
        <>
        <div className="blog-card">
  <img
    src={image}
    alt="blog"
    className="blog-image"
  />

  <div className="blog-content">
    <span className="category">Technology</span>

    <h2>{title}</h2>

    <p>
      Learn the latest React features, best practices,
      and how developers build scalable applications.
    </p>

    <div className="blog-footer">
      <span>John Doe • Jun 16, 2026</span>

      <button>Read More →</button>
    </div>
  </div>
</div>
        </>
    )
}

export default Container