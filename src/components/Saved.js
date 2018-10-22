/* global localStorage */
import React, { Component } from 'react'
import Gem from './Gem'

class Saved extends Component {
  constructor (props) {
    super(props)
    this.updateList = this.updateList.bind(this)
  }

  updateList (savedGems) {
    this.setState({
      savedGems
    })
  }

  render () {
    const localGems = JSON.parse(localStorage.getItem('localgems')) || []
    const sortGems = localGems.sort((a, b) => {
      if (a.name.toUpperCase() < b.name.toUpperCase()) {
        return -1
      } else {
        return 1
      }
    })

    const gemList = sortGems.map((data, ind) => {
      return (
        <Gem gemInfo={data} key={ind}
          savedGems={localGems}
          updateList={this.updateList} />
      )
    })

    return (
      <div>
        <h3>Saved Gems</h3>
        <div className='search-results'>
          {localGems.length > 0 &&
            <div>{gemList}</div>
          }
        </div>
      </div>
    )
  }
}

export default Saved
