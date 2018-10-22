/* global describe it expect */
import React from 'react'
import Form from './Form'
import { shallow } from 'enzyme'

describe('<Form />', () => {
  const wrapper = shallow(<Form />)

  it('should contain one input form element', () => {
    expect(wrapper.find('input').length).toBe(1)
  })

  it('should contain one button', () => {
    expect(wrapper.find('button').length).toBe(1)
  })
})
