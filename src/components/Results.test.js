/* global describe it expect */
import React from 'react'
import Results from './Results'
import { shallow } from 'enzyme'

describe('<Results />', () => {
  const wrapper = shallow(<Results />)

  it('should contain a wrapper div', () => {
    expect(wrapper.find('.search-results').length).toBe(1)
  })
})
