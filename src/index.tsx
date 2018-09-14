import * as React from 'react';
import * as ReactDOM from 'react-dom';
import {
  BrowserRouter as Router,
  Link,
  Route,
} from 'react-router-dom'
import './App.css'
import Home from './home/Home'
import './index.css';
import Pictures from './pictures/Pictures'
import Projects from './projects/Projects'
import Blog from './blog/Blog'
import BlogPost from './blog/BlogPost'
import Books from './books/Books'
import BookReview from './books/BookReview'
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles'

const Main = () => (
  <Router>
    <div className='main'>
      <div className='title'>Derek Brimley's Website</div>
      <div style={{ display: 'flex' }}>
        <div style={{ width: 200 }}>
          <div className='sections'>
            <div><Link to="/">Home</Link></div>
            <div><Link to='/blog'>Blog</Link></div>
            <div><Link to='/books'>Books</Link></div>
            <div><Link to='/pictures'>Pictures</Link></div>
            <div><Link to='/projects'>Projects</Link></div>
          </div>
        </div>
        <Route exact={true} path="/" component={Home}/>
        <Route exact path="/blog" component={Blog} />
        <Route path='/blog/:blogPost' component={BlogPost} />
        <Route exact path='/books' component={Books} />
        <Route path='/books/:bookReview' component={BookReview} />
        <Route path="/pictures" component={Pictures}/>
        <Route path="/projects" component={Projects}/>
        {/* <Route exact path='/movies' component /> */}
      </div>
    </div>
  </Router>
)

const theme = createMuiTheme({
  typography: {
    fontFamily: '"EB Garamond", sans-serif'
  }
})

ReactDOM.render(
  <MuiThemeProvider theme={theme}>
    <Main />
  </MuiThemeProvider>,
  document.getElementById('root') as HTMLElement
);
