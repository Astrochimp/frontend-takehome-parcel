import React, { Component } from 'react'
import axios from 'axios'
import Results from './Results'

class Form extends Component {
  constructor (props) {
    super(props)

    this.searchGems = this.searchGems.bind(this)
    this.state = {
      searchres: []
    }
  }

  componentDidMount () {
    this.searchForm.focus()
  }

  searchGems (event) {
    const searchText = event.target.value

    if ((searchText !== '') && (searchText.length > 3)) {
      axios.get(`http://localhost:3000/api/v1/search.json?query=${searchText}`)
        .then((res) => {
          this.setState({
            searchres: res.data
          })
        })
        .catch((err) => {
          console.log('error', err)
        })
    }
  }

  render () {
    return (
      <React.Fragment>
        <div className='search--form'>
          <input type='text'
            ref={(input) => { this.searchForm = input }}
            name='searchForm'
            onChange={this.searchGems}
            placeholder='Search Ruby Gems' />
          <button>Search</button>
        </div>
        <Results searchres={this.state.searchres} />
      </React.Fragment>
    )
  }
}

export default Form
