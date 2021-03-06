import * as React from 'react'
import * as contentful from 'contentful'
import BlogItem from './BlogItem';

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
export default class Blog extends React.Component<{}, IState> {
  client = contentful.createClient({
    space: 'ouum3dzu7fjd',
    accessToken: 'fcf692aa2400dc90b038ca1d1ddcf3c8a85e7c1e213c178abaf31ecc3c264da2'
  })
  state: IState = {
    posts: []
  }
  componentDidMount() {
    this.client.getEntries<IItem>().then((entries) => {
      const posts = entries.items
        .filter(entry => entry.sys.contentType.sys.id === 'blog')
        .sort((a, b) =>
          new Date(b.sys.createdAt) < new Date(a.sys.createdAt) ? -1 :
          new Date(b.sys.createdAt) > new Date(a.sys.createdAt) ? 1 : 0
        )
        .map((entry) => (entry as any).fields)
      this.setState({ posts })
    })
  }

  public render() {
    return (
      <div className='content'>
        {this.state.posts.map((post, i) => (
          <BlogItem key={i} {...post} />
        ))}
      </div>
    )
  }
}