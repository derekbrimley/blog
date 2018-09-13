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
    <h1>{props.title}</h1>
    <Link
      to={{
        pathname: `/blog${props.path}`,
        state: props,
      }}
    >
      <Markdown source={props.content.split(" ").splice(0,150).join(" ").concat('...')} />
    </Link>
  </div>
)
export default BlogItem