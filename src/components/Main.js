import React, { Component } from 'react'
import Saved from './Saved'
import Form from './Form'
import Results from './Results'

class Main extends Component {
  constructor (props) {
    super(props)

    this.state = {
      tabView: 'search'
    }

    this.toggleView = this.toggleView.bind(this)
  }

  toggleView (tab) {
    if (tab !== null) {
      this.setState({
        tabView: tab
      })
    }
  }

  render () {
    return (
      <div className='app__wrapper'>
        <h1 className='App-Title'>Ruby Gem Search</h1>
        <div className='tabs'>
          <div className={(this.state.tabView === 'search') ? 'selected' : ''}
            onClick={() => this.toggleView('search')}>Search</div>
          <div className={(this.state.tabView === 'saved') ? 'selected' : ''}
            onClick={() => this.toggleView('saved')}>Saved</div>
        </div>
        <div className='tabs__wrapper'>
          <div className={(this.state.tabView === 'search') ? 'selected__view' : 'hidden__view'}>
            <React.Fragment>
              <Form />
              <Results />
            </React.Fragment>
          </div>
          <div className={(this.state.tabView === 'saved') ? 'selected__view' : 'hidden__view'}>
            <React.Fragment>
              <Saved />
            </React.Fragment>
          </div>
        </div>
      </div>
    )
  }
}

export default Main
