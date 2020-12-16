import React from 'react';
import ReactAddons from 'react/addons';
import Stories from '../Stories.jsx';

describe("Story list output", () => {
  let { ReactTestUtils } = ReactAddons;
  
  const storiesComponent = ReactTestUtils.renderIntoDocument(
    <Stories
      stories={[]}
      getStories={() => []}
    />
  );
  const node = () => React.findDOMNode(storiesComponent);

  it('shows a message <p> when story database is empty', () => {
    let paragraph = node().querySelectorAll('p');

    expect(paragraph.length).toEqual(1);
  });
});