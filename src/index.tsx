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

const Main = () => (
  <Router>
    <div className='main'>
      <div className='content'>
        <div className='title'>Derek Brimley's Website</div>
        <div style={{ display: 'flex' }}>
          <div style={{ width: 200 }}>
            <div className='sections'>
              <div><Link to="/">Home</Link></div>
              <div><Link to='/pictures'>Pictures</Link></div>
              <div><Link to='/projects'>Projects</Link></div>
              <div><Link to='/blog'>Blog</Link></div>
              <div><Link to='/movies'>Movies</Link></div>
            </div>
          </div>
          <Route exact={true} path="/" component={Home}/>
          <Route path="/Pictures" component={Pictures}/>
          <Route path="/projects" component={Projects}/>
          <Route exact path="/blog" component={Blog} />
          <Route path='/blog/:blogPost' component={BlogPost} />
          {/* <Route exact path='/movies' component /> */}
        </div>
      </div>
    </div>
  </Router>
)

ReactDOM.render(
  <Main />,
  document.getElementById('root') as HTMLElement
);
