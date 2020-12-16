import React, { Component } from 'react';
import { Switch, Route, BrowserRouter as Router, Link } from "react-router-dom";
import Stories from './components/Stories';
import StoryPage from './components/StoryPage';
import NewStory from './components/NewStory';
import './App.css';

class App extends Component {
  /*
  * Handle routes with React Router.
  * Returns corresponding component to render.
  */
  routes() {
    return (
      <main>
        {/* Switches to relevant route depending on 'Link to=path' */}
        <Switch>
          {/* Match '/' exactly, avoids Router matching '/' to '/new' due to
          partial patching */}
          <Route exact path='/' component={Stories}/>
          <Route path='/new' component={NewStory}/>
          {/* ':id' to set story ID as a parameter for the Route match */}
          <Route path='/story/:id' component={StoryPage}/>
        </Switch>
      </main>
    )
  }

  render() {
    console.log('RENDER App');
    return (
      <Router>
        {/* Necessary to wrap with <Router> for routes to work. */}
        <React.Fragment>
          {/* 'ReactDOM.render' only takes 1 element to render */}
          {/* Wrap <header> and <main>, also avoids unnecessary 'div' */}
          <header className='header'>
            <h1 className='header-title'>Slacker News</h1>
            <nav className='navigation'>
              <ul>
                <li><Link to='/'>Story list</Link></li>
                <li><Link to='/new'>New story</Link></li>
              </ul>
            </nav>
          </header>
          {this.routes()}
        </React.Fragment>
      </Router>
    );
  }
}

export default App;