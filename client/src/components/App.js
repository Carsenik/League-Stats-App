import React from 'react'
import { connect } from 'react-redux'
import '../styles/App.css'

import SummonerForm from './SummonerForm'
import SummonerStats from './SummonerStats/index'

const App = ({ showStats }) => {
  return (
    <div className="App">
      <h1>League Stats</h1>
      <SummonerForm />
      {showStats && (
        <SummonerStats />
      )}
    </div>
  )
}

const mapStateToProps = ({ ui }) => ({
  showStats: ui.showStats
})


export default connect(
  mapStateToProps
)(App)
