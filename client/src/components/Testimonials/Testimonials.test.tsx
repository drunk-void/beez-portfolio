import React from 'react';
import ReactDOM from 'react-dom';
import Testimonials from './Testimonials';

it('It should mount', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Testimonials />, div);
  ReactDOM.unmountComponentAtNode(div);
});