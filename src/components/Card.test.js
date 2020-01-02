import React from 'react';
import Card from './Card';
import renderer from 'react-test-renderer';

it('renders Card component correctly', () => {
  const card = renderer
    .create(<Card />)
    .toJSON();
  expect(card).toMatchSnapshot();
});
