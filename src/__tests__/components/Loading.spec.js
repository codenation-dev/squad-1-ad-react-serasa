import React from 'react';
import { mount } from 'enzyme';

import Loading from '../../components/Loading';

it('should render Loading component', () => {
  const wrapper = mount(<Loading />);

  expect(wrapper.find("div[className='lds-ring']").exists()).toBe(true);
});
