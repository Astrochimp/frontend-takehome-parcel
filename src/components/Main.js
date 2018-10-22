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
      <div>
        <div className='tabs'>
          <div className={(this.state.tabView === 'search') ? 'selected' : ''}
            onClick={() => this.toggleView('search')}>Search</div>
          <div className={(this.state.tabView === 'saved') ? 'selected' : ''}
            onClick={() => this.toggleView('saved')}>Saved</div>
        </div>
        {this.state.tabView === 'search' &&
          <React.Fragment>
            <Form />
            <Results />
          </React.Fragment>
        }
        {this.state.tabView === 'saved' &&
          <React.Fragment>
            <Saved />
          </React.Fragment>
        }
      </div>
    )
  }
}

export default Main
