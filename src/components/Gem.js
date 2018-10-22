/* global localStorage */
import PropTypes from 'prop-types'
import React, { Component } from 'react'

class Gem extends Component {
  constructor (props) {
    super(props)

    this.saveGem = this.saveGem.bind(this)

    const localGems = JSON.parse(localStorage.getItem('localgems')) || []

    this.state = {
      savedGems: localGems
    }
  }

  removeGem (data) {
    let totalSaved = this.props.savedGems || []
    const checkArr = totalSaved.filter(gempkg => (gempkg.sha !== data.sha))

    localStorage.setItem('localgems', JSON.stringify(checkArr))

    this.props.updateList(checkArr)
  }

  saveGem (data) {
    let totalSaved = this.props.savedGems || []
    const checkArr = totalSaved.filter(gempkg => (gempkg.sha === data.sha))

    if (checkArr.length === 0) {
      totalSaved.push(data)
      localStorage.setItem('localgems', JSON.stringify(totalSaved))

      this.props.updateList(totalSaved)
    }
  }

  render () {
    const { project_uri, name, downloads, version, authors } = this.props.gemInfo
    const dwn = new Intl.NumberFormat('en-US').format(downloads)
    const gemList = this.props.savedGems || []
    const checkArr = gemList.filter(gempkg => (gempkg.sha === this.props.gemInfo.sha))

    return (
      <div className='search--list'>
        <div className='gem--title'>
          <a href={project_uri} target='new'>
            <h3>{name}</h3>
          </a>
          <div className='action'>
            {checkArr.length === 0 &&
              <button title='save this gem'
                onClick={() => this.saveGem(this.props.gemInfo)}>+</button>
            }

            {checkArr.length === 1 &&
              <button title='remove from saved list'
                onClick={() => this.removeGem(this.props.gemInfo)}>-</button>
            }
          </div>
        </div>
        <div className='gem--details'>
          <div>
            {authors}
          </div>
          <div>
            v. {version}
          </div>
          <div>
            downloads: {dwn}
          </div>
        </div>
      </div>
    )
  }
}

Gem.propTypes = {
  gemInfo: PropTypes.object,
  savedGems: PropTypes.array,
  updateList: PropTypes.func
}

export default Gem
