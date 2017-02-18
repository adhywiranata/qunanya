import React from 'react';
import { shallow } from 'enzyme';

describe('<QuestionPostBox>', () => {
  it('renders correctly', () => {
    const questionPostBox = shallow(<QuestionPostBox />);
    expect(questionPostBox).toHaveLength(1);
  });
});
