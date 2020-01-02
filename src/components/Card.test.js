import React from 'react';
import { shallow } from 'enzyme';
import Card from './Card';

// shuld be inside a setupTests.js file inside containers
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
configure({ adapter: new Adapter() });

it('expect to render Card component', () => {
    const wraper = shallow(<Card />);
    expect(wraper).toMatchSnapshot();
});
