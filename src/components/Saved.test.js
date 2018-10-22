/* global describe it expect */
import React from 'react'
import Saved from './Saved'
import { shallow } from 'enzyme'

describe('<Saved />', () => {
  const wrapper = shallow(<Saved />)

  it('contains an h3 tag', () => {
    expect(wrapper.find('h3').length).toBe(1)
  })

  it('contains an h3 with the title', () => {
    expect(wrapper.find('h3').text()).toBe('Saved Gems')
  })
})
