import React from 'react';
import Stories from '../Stories.jsx';
import { mount } from 'enzyme';

test('It shows a message when database is empty', () => {
  const component = mount(<Stories />);
  const p = component.find('.no-data-message');
  const message = 'Sorry, there have been no stories submitted yet.';

  expect(p.text()).toBe(message);
});