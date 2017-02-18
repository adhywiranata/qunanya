import 'react-native';
import React from 'react';
import { shallow } from 'enzyme';
import App from '../../src/App';

describe('<App>', () => {
  it('renders normally', () => {
    const app = shallow(<App />);
    expect(app).toBeDefined();
  });
});
