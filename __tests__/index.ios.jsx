import 'react-native';
import React from 'react';
import renderer from 'react-test-renderer';

import Index from '../index.ios';

describe('React renderer', () => {
  it('renders correctly', () => {
    const tree = renderer.create(
      <Index />,
    );
    expect(tree).toBeDefined();
  });
});
