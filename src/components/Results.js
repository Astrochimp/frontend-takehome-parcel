/* global localStorage */
import PropTypes from 'prop-types'
import React, { Component } from 'react'
import Gem from '../components/Gem'

class Results extends Component {
  constructor (props) {
    super(props)

    this.saveGem = this.saveGem.bind(this)

    const localGems = JSON.parse(localStorage.getItem('localgems')) || []

    this.state = {
      savedGems: localGems
    }
  }

  saveGem (data) {
    let totalSaved = this.state.savedGems || []
    const checkArr = totalSaved.filter(gempkg => (gempkg.sha === data.sha))

    if (checkArr.length === 0) {
      totalSaved.push(data)
      localStorage.setItem('localgems', JSON.stringify(totalSaved))

      this.setState({
        savedGems: totalSaved
      })
    }
  }

  render () {
    const searchResults = this.props.searchres || []
    const resList = searchResults.map((data, ind) => {
      return (
        <Gem gemInfo={data} key={ind} savedGems={this.state.savedGems} saveGem={this.saveGem} />
      )
    })

    return (
      <div className='search-results'>
        {this.props.searchres &&
          <div>{resList}</div>
        }
      </div>
    )
  }
}

Results.propTypes = {
  searchres: PropTypes.array
}

export default Results
