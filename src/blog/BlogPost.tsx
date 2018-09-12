import * as React from 'react'
import { Link } from 'react-router-dom'
import * as Markdown from 'react-markdown'
// import PageContent from './../components/PageContent'

interface IBlogPostProps {
  location: {
    state: {
      props: {

        icon: string
        title: string
        content: string
      }
    }
  }
}

const BlogPost: React.SFC<IBlogPostProps> = ({ location: { state: { props } }}) => {
  return (
    <>
      <nav className="level">
        <div className="level-left">
          <Link className="level-item button is-small is-link is-outlined" to="/blog">Back to Blog</Link>
        </div>
      </nav>
      <article className="media">
        <div className="media-left">
          <figure className="image is-64x64">
            <img src={props.icon} alt="Image" />
          </figure>
        </div>
        <div className="media-content">
          <div className="content">
            <h1>{props.title}</h1>
            <Markdown source={props.content} />
          </div>
        </div>
      </article>
    </>
  )
}
export default BlogPost