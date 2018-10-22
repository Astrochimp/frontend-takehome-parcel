import React, { Component } from 'react'
import Gem from './Gem'

class Saved extends Component {
  render () {
    const localGems = JSON.parse(localStorage.getItem('localgems')) || []
    const gemList = localGems.map((data, ind) => {
      return (
        <Gem gemInfo={data} key={ind}
          savedGems={localGems} />
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
