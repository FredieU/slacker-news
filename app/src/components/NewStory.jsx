import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
// Redirect user to Stories component upon creating a new story.

class NewStory extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // Boolean to track when user should be redirected.
      storyCreated: false
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.createStory = this.createStory.bind(this);
  }

  handleChange(event) {
    // 'event.target' contains 'name' which corresponds to form input attribute
    const { name, value } = event.target;
    this.setState({[name]: value});
  }

  handleSubmit(event) {
    // Passed event to prevent page refresh in order to redirect to Stories.
    event.preventDefault();

    // Prepating payload for POST request.
    const { submitter, title, url } = this.state
    const payload = {
      title: title,
      url: url,
      submitter: submitter,
      points: 0,
      comments: []
    }
    this.createStory(payload);
  }

  createStory(payload) {
    // Set up POST request configuration, 2nd param for fetch().
    const config = {
      method: 'POST',
      // Added middleware in 'api/app.js' to allow this 'Content-Type' header.
      // Avoids CORS block by browser.
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(payload)
    };

    fetch('http://localhost:3001/stories', config)
    .then(response => {
      response.json().then(() => {
        // Toggle state for conditional state in render().
        if(response.status === 200) this.setState({storyCreated: true});
      })
    })
  }

  render() {
    console.log('RENDER NewStory');
    return (this.state.storyCreated
      ? <Redirect to='/'/> // Redirect to Stories component
      : (
        <section className='container'>
          <h2>New Story</h2>
          <form onSubmit={this.handleSubmit} className='form-group'>
            <label className='form-label-sm'>Your name</label>
            <input
              className='form-input-sm'
              // 'name' attribute to differentiate the fields in handleChange()
              name='submitter'
              // onChange event to update the state with the current input value
              onChange={this.handleChange}/><br/>
            <label className='form-label-sm'>Story title</label>
            <input
              className='form-input-sm'
              name='title' 
              onChange={this.handleChange}/><br/>
            <label className='form-label-sm'>Story URL</label>
            <input
              className='form-input-sm'
              name='url'
              onChange={this.handleChange}/><br/>
            <button className='btn'>Send</button>
          </form>
        </section>
      )
    )
  }
}
export default NewStory;