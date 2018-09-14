import * as React from 'react'
import { Link } from 'react-router-dom'
import * as Markdown from 'react-markdown'
import ArrowBack from '@material-ui/icons/ArrowBack'
import IconButton from '@material-ui/core/IconButton'
import { Icon } from '@material-ui/core';

interface IBookReviewProps {
  location: {
    state: {
      rating: number
      title: string
      content: string
    }
  }
}

const BookReview: React.SFC<IBookReviewProps> = props => {
  const { rating, title, content } = props.location.state
  return (
    <div className='content'>
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <Link to="/books"><IconButton><ArrowBack /></IconButton></Link>
        <div>
          <h1>{title}</h1>
        </div>
      </div>
      <div>
        <Markdown source={content} />
      </div>
      <div>
        {Array.from(Array(5).keys()).map(num =>
          <Icon key={num} color={num < rating ? 'primary' : 'disabled'}>star</Icon>
        )}
      </div>
    </div>
  )
}
export default BookReview