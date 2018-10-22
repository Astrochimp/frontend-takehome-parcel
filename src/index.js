import React from 'react'
import ReactDOM from 'react-dom'
import './css/main.css'
import Main from './components/Main'

const App = () => (
  <div className='App'>
    <Main />
  </div>
)

ReactDOM.render(<App />, document.getElementById('root'))

// Hot Module Replacement
if (module.hot) {
  module.hot.accept()
}
