import * as React from 'react'
import { Link } from 'react-router-dom'
import * as Markdown from 'react-markdown'

interface IBlogItemProps {
  title: string
  content: string
  path: string
}

const BlogItem: React.SFC<IBlogItemProps> = props => (
  <div>
    <Link
      to={{
        pathname: `/blog${props.path}`,
        state: props,
      }}
    >
      <h3>{props.title}</h3>
      <Markdown source={props.content.split(" ").splice(0,10).join(" ").concat('...')} />
    </Link>
  </div>
)
export default BlogItem