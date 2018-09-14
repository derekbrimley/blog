import * as React from 'react'
import { Link } from 'react-router-dom'
import * as Markdown from 'react-markdown'

interface IBookItemProps {
  title: string
  content: string
  path: string
}

const BookItem: React.SFC<IBookItemProps> = props => (
  <div>
    <Link
      to={{
        pathname: `/books${props.path}`,
        state: props,
      }}
    >
      <h1>{props.title}</h1>
      <Markdown source={props.content.split(" ").splice(0,10).join(" ").concat('...')} />
    </Link>
  </div>
)
export default BookItem