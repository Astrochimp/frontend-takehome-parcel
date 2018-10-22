/* global localStorage */
import PropTypes from 'prop-types'
import React, { Component } from 'react'
import Gem from '../components/Gem'

class Results extends Component {
  constructor (props) {
    super(props)
    const localGems = JSON.parse(localStorage.getItem('localgems')) || []

    this.state = {
      savedGems: localGems
    }

    this.updateList = this.updateList.bind(this)
  }

  updateList (savedGems) {
    this.setState({
      savedGems
    })
  }

  render () {
    const searchResults = this.props.searchres || []
    const resList = searchResults.map((data, ind) => {
      return (
        <Gem gemInfo={data} key={ind}
          savedGems={this.state.savedGems}
          updateList={this.updateList} />
      )
    })

    return (
      <div className='search-results'>
        {(this.props.loading && this.props.searchres.length === 0) &&
          <div className='loading' />
        }

        {this.props.searchres &&
          <div>{resList}</div>
        }
      </div>
    )
  }
}

Results.propTypes = {
  loading: PropTypes.bool,
  searchres: PropTypes.array
}

export default Results
