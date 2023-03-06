import './index.css'

const BlogItem = props => {
  const {listItem} = props
  const {title, description, publishedDate} = listItem
  return (
    <li className="li-item">
      <div className="first-container">
        <h1 className="post-name">{title}</h1>
        <p className="date-given">{publishedDate}</p>
      </div>
      <p className="content-given">{description}</p>
      <hr className="line" />
    </li>
  )
}

export default BlogItem
