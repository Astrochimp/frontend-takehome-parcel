import React, { Component } from 'react'
import axios from 'axios'
import Results from './Results'

class Form extends Component {
  constructor (props) {
    super(props)

    this.searchGems = this.searchGems.bind(this)
    this.state = {
      loading: false,
      searchres: []
    }
  }

  componentDidMount () {
    if (this.searchForm) {
      this.searchForm.focus()
    }
  }

  searchGems (event) {
    const searchText = event.target.value
    this.setState({
      loading: true
    })

    if ((searchText !== '') && (searchText.length > 2)) {
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
          <button onClick={this.searchGems}>Search</button>
        </div>
        <Results loading={this.state.loading} searchres={this.state.searchres} />
      </React.Fragment>
    )
  }
}

export default Form
