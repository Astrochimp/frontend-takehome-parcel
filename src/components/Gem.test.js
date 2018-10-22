/* global describe it expect */
import React from 'react'
import Gem from './Gem'
import { shallow } from 'enzyme'

describe('<Gem />', () => {
  const gemProps = {
    project_uri: 'http://rubygems.com',
    name: 'Test Project',
    downloads: '1',
    version: '1.0',
    authors: 'Tim Tester'
  }

  const wrapper = shallow(<Gem gemInfo={gemProps} />)

  it('should contain a wrapper div', () => {
    expect(wrapper.find('.search--list').length).toBe(1)
  })

  it('Passes project url', () => {
    expect(wrapper.instance().props.gemInfo.project_uri).toBe('http://rubygems.com')
  })

  it('Passes project name', () => {
    expect(wrapper.instance().props.gemInfo.name).toBe('Test Project')
  })

  it('Passes project author', () => {
    expect(wrapper.instance().props.gemInfo.authors).toBe('Tim Tester')
  })

  it('contains an h3 tag', () => {
    expect(wrapper.find('h3').length).toBe(1)
  })

  it('contains an h3 with the title', () => {
    expect(wrapper.find('h3').text()).toBe('Test Project')
  })

  it('contains a save button', () => {
    expect(wrapper.find('button').length).toBe(1)
  })

  it('contains a details section', () => {
    expect(wrapper.find('.gem--details').length).toBe(1)
  })
})
