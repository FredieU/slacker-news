import React, { Component } from 'react';
import StoryItem from './StoryItem';

class Stories extends Component {
  constructor(props) {
    /* 
    * Call base constructor with 'props', allows 'this.props' to be used  
    * within constructor. Official documentation does not state why this should
    * always be done.
    * https://reactjs.org/docs/state-and-lifecycle.html#adding-local-state-to-a-class
    */
    super(props);
    this.state = {
      // Initialise as empty array for later conditional checking
      stories: []
    }
  }

  componentDidMount() {
    console.log('MOUNT Stories');
    // Fetch data as soon as the component mounts.
    // To be moved to '../api.js' together with other API calls across the app.
    fetch('http://localhost:3001/stories')
    // Handle returning Promise which resolves as 'results'.
    .then(results => {
      // '.json()' seems to return another Promise. 
      // Could probably be done more elegantly/efficiently.
      results.json().then(data => {
        // Save data to state, causes re-render.
        this.setState({stories: data});
      })
    })
  }

  render() {
    console.log('RENDER Stories', this.state.stories);
    return (
      // Wrapping <section> around all the <article> tags from StoryItem comp.
      // Following semantic HTML5 convention.
      <section className='container'>
        <h2>Top stories</h2>
        {this.state.stories.length !== 0
        // Map each object in stories array to a StoryItem component.
        ? this.state.stories.map(story => StoryItem(story))
        : <p className='no-data-message'>
            Sorry, there have been no stories submitted yet.
          </p>}
      </section>
    );
  }
}

export default Stories;