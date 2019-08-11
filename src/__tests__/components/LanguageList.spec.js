import React from 'react';
import { mount } from 'enzyme';
import { Provider } from 'react-redux';

import store from '../../store';
import LanguageList from '../../components/LanguageList';

it('should render empty LanguageList component', () => {
  const wrapper = mount(
    <Provider store={store}>
      <LanguageList />
    </Provider>,
  );

  expect(wrapper.contains(<h1>Not Result</h1>)).toBe(true);
});
