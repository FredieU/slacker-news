import React from 'react';
import { Link } from "react-router-dom";

/*
* Functional component since state/lifecyle methods are not needed.
*/
const Story = (props) => {
  // Destructure 'props' to avoid syntax repetition, avoids clutter.
  const { _id, points, submitter, title, url } = props;
  // Story ID to create a unique URL.
  let path = '/story/' + _id;
  return (
    // 'key' attribute since this will be duplicated in Stories component.
    // Avoids default React warnings.
    <article className='story-item' key={_id}>
      <h4><a href={url}>{title}</a></h4>
      <p>
        {/* <Link> to trigger a match in <Switch> block within App component */}
        {/* Sets '_id' as a match parameter from '/story/:id' */}
        {points} points | Submitted by {submitter} | <Link to={path}>View comments</Link>
      </p>
    </article>
  );
}
 
export default Story;