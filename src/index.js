import React from 'react'
import ReactDOM from 'react-dom'
import './css/main.css'
import Main from './components/Main'

const App = () => (
  <div className='App'>
    <h1 className='App-Title'>Ruby Gem Search</h1>
    <Main />
  </div>
)

ReactDOM.render(<App />, document.getElementById('root'))

// Hot Module Replacement
if (module.hot) {
  module.hot.accept()
}
