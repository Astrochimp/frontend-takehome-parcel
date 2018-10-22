/* global describe it expect */
import React from 'react'
import Main from './Main'
import { shallow } from 'enzyme'

describe('Main', () => {
  const app = shallow(<Main />)

  it('renders the title', () => {
    expect(app.find('h1').exists()).toBe(true)
  })

  it('toggles the form to Search', () => {
    app.instance().toggleView('search')
    expect(app.find('.selected').text()).toBe('Search')
  })

  it('toggles the form to Saved', () => {
    app.instance().toggleView('saved')
    expect(app.find('.selected').text()).toBe('Saved')
  })

  it('show tab wrapper div', () => {
    expect(app.find('.tabs__wrapper').exists()).toBe(true)
  })

  it('show two divs as children of tab wrapper', () => {
    expect(app.find('.tabs__wrapper').children().length).toBe(2)
  })
})
