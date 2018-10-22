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

  toggleView () {
    const view = this.state.tabView === 'search' ? 'saved' : 'search'
    this.setState({
      tabView: view
    })
  }

  render () {
    return (
      <div>
        <div className='tabs'>
          <div onClick={this.toggleView}>Search</div>
          <div onClick={this.toggleView}>Saved</div>
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
