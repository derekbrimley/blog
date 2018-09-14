import * as React from 'react';
import * as contentful from 'contentful'
import BookItem from './BookItem';

interface IField {
  title: string
  path: string
  content: string
}

interface IItem {
  fields: IField
}

interface IState {
  posts: IField[]
}
class App extends React.Component {
  client = contentful.createClient({
    space: 'ouum3dzu7fjd',
    accessToken: 'fcf692aa2400dc90b038ca1d1ddcf3c8a85e7c1e213c178abaf31ecc3c264da2'
  })
  state: IState = {
    posts: []
  }
  componentDidMount() {
    this.client.getEntries<IItem>().then((entries) => {
      const posts = entries.items.filter(entry => entry.sys.contentType.sys.id === 'bookReviews')
        .map((entry) => (entry as any).fields)
      this.setState({ posts })
    })
  }
  render() {
    return (
      <div className='content'>
        {this.state.posts.map((post, i) => (
          <BookItem key={i} {...post} />
        ))}
      </div>
    );
  }
}

export default App;
