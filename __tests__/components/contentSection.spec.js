import React from 'react';
import { shallow } from 'enzyme';
import ContentSection from '../../src/components/ContentSection';

describe('<ContentSection>', () => {
  it('renders correctly', () => {
    const contentSection = shallow(<ContentSection />);
    expect(contentSection).toHaveLength(1);
  });

  it('renders <ContentItem>s', () => {
    const contentSection = shallow(<ContentSection />);
    expect(contentSection.find('ContentItem').length).toBeGreaterThanOrEqual(1);
  });
});
