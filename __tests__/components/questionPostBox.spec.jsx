import React from 'react';
import { shallow } from 'enzyme';

import QuestionPostBox from '../../src/components/QuestionPostBox';

describe('<QuestionPostBox>', () => {
  it('renders correctly', () => {
    const questionPostBox = shallow(<QuestionPostBox />);
    expect(questionPostBox).toHaveLength(1);
  });

  it('renders a TextInput', () => {
    const questionPostBox = shallow(<QuestionPostBox />);
    expect(questionPostBox.find('TextInput')).toHaveLength(1);
  });
});
