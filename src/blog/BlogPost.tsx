import * as React from 'react'
import { Link } from 'react-router-dom'
import * as Markdown from 'react-markdown'
import ArrowBack from '@material-ui/icons/ArrowBack'
import IconButton from '@material-ui/core/IconButton'

// import PageContent from './../components/PageContent'

interface IBlogPostProps {
  location: {
    state: {
      icon?: string
      title: string
      content: string
    }
  }
}

const BlogPost: React.SFC<IBlogPostProps> = props => {
  const { icon, title, content } = props.location.state
  return (
    <div className='content'>
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <Link to="/blog"><IconButton><ArrowBack /></IconButton></Link>
        <div>
          <h1>{title}</h1>
        </div>
      </div>
      <div>
        <Markdown source={content} />
      </div>
      {icon && (
        <div>
          <img src={icon} alt="Image" />
        </div>
      )}
    </div>
  )
}
export default BlogPost