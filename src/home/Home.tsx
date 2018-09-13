import * as React from 'react';
import './home.css';



class Home extends React.Component {
  public render() {
    return (
      <div className='content home'>
        <div>
          <div>My name is Derek.</div>
          <div>This is my website.</div>
        </div>
        <div className='profile-image' />
      </div>
    );
  }
}

export default Home;
