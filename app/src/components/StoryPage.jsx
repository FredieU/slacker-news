import React, { Component } from 'react';

class StoryPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      story: undefined,
      /*
      * Initialising as empty strings for form inputs to be controlled for the
      * first render before componentDidMount().
      * Avoids the following React warning on first render:
      * A component is changing an uncontrolled input of type text to be 
      * controlled.
      */
      comment: '',
      submitter: ''
    }
    /*
    * Bind 'this' to main class component, allows for calls such as 
    * 'this.setState()' within them. Alternatively, creating as arrow functions
    * also works but is not supported officially and may be unstable.
    */
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    // Reference story ID passed as a Route match parameter.
    fetch('http://localhost:3001/stories/' + this.props.match.params.id)
    .then(results => {
      results.json().then(data => {
        this.setState({story: data});
      });
    });
  }

  handleChange(event) {
    // 'event.target' contains 'name' which corresponds to form input attribute
    const { name, value } = event.target;
    // Destructured for readability in this case.
    this.setState({[name]: value});
  }

  /*
  * I did not pass the submit event from the form to preventDefault().
  * Allowed page to refresh intentionally to update comments section.
  * Could implement update without page refresh with componentDidUpdate()
  */
  handleSubmit() {
    // Prep payload for POST request, conforming to expected keys by the API.
    const { comment, submitter } = this.state
    const payload = {
      body: comment,
      submitter: submitter
    }
    this.createComment(payload);
  }

  createComment(payload) {
    // To be moved to '../api.js' together with other API calls across the app.

    // For readability in the string literal and remain within 80 columns.
    let id = this.state.story._id;
    // Set up POST request configuration, 2nd param for fetch().
    const config = {
      method: 'POST',
      // Added middleware in 'api/app.js' to allow this 'Content-Type' header.
      // Avoids CORS block by browser.
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(payload)
    };

    fetch(`http://localhost:3001/stories/${id}/comments`, config)
    .then(response => {
      response.json().then(() => {
        if(response.status === 200) {
          /*
          * Clear both input fields as initial step to implement 
          * componentDidUpdate(). Not actually necessary since I've allowed 
          * page refresh.
          */
          this.setState({submitter: '', comment: ''});
        }
      })
    })
  }

  render() { 
    console.log('RENDER StoryPage', this.state.story)
    // To handle the case of initial render before componentDidMount() triggers
    if(this.state.story) {
      let { 
        comments, date_submitted, points, submitter, title, url 
      } = this.state.story;

      /*
      * Initially separated as its own functional component but did not need
      * props, let alone states/lifecycle methods. 
      * Could potentially separate in order to declutter this render method.
      * Could also refactor StoryItem component to handle list of stories as 
      * well as comments.
      */
      let commentList = comments.map((comment) =>
        <div 
          className='comment-item' 
          key={comment.submitter + comment.date_submitted}>
          <h4>{comment.submitter}</h4>
          <p>{comment.body}</p>
        </div>
      );

      return (
        <section className='container'>
          <h2 id='story-title'><a href={url}>{title}</a></h2>
          <small>
            <span>{points} points | Submitted by {submitter}</span>
            {/* Temporary handling of date, ideally want to convert this 
            properly in a separate function. Perhaps in 'api.js'. */}
            <span> on {date_submitted.slice(0,10)}</span>
          </small>

          <form className='form-group'>
            <label className='form-label-sm'>Your name</label>
            <input 
              className='form-input-sm'
              // 'name' attribute to differentiate the fields in handleChange()
              name='submitter'
              // onChange event to update the state with the current input value
              onChange={this.handleChange}
              type='text'
              // Set corresponding state value to be able to clear these fields.
              value={this.state.submitter}/>
            <textarea 
              className='form-input-lg'
              name='comment'
              onChange={this.handleChange}
              value={this.state.comment}>
            </textarea>
            <input
              className='btn' 
              onClick={this.handleSubmit}
              type='submit'
              value='Add comment'
            />
          </form>

          <article className='comment-section'>
            {/* Render list of comments */}
            {commentList}
          </article>
        </section>
      )
    } else {
      // Alternative render before componentDidMount() triggers.
      // Could be handled differently?
      return(
        <section className='container'>
        </section>
      )
    }
  }
}
 
export default StoryPage;