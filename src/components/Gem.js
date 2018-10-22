import PropTypes from 'prop-types'
import React, { Component } from 'react'

class Gem extends Component {
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
              <button onClick={() => this.props.saveGem(this.props.gemInfo)}>save</button>
            }

            {checkArr.length === 1 &&
              <button>Saved</button>
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
            {dwn}
          </div>
        </div>
      </div>
    )
  }
}

Gem.propTypes = {
  gemInfo: PropTypes.object,
  saveGem: PropTypes.func,
  savedGems: PropTypes.array
}

export default Gem
