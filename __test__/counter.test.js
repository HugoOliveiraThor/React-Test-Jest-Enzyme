import React from 'react';
import { shallow } from 'enzyme'
import Counter from '../src/counter'

describe('Testing App Component', () => {
  it('should render correctly', () => {
    const wrapper = shallow(
      <Counter count={5} />
    );

    expect(wrapper).toMatchSnapshot();// This take a snapshot that will compare if the component has the same behavior as the first snapshot
    wrapper.setProps({ count: 10});
    expect(wrapper).toMatchSnapshot();// This take a snapshot that will compare if the component has the same behavior as the first snapshot
  })
})