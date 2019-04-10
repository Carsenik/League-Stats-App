import React, { useState, useEffect } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import axios from 'axios'
import '../styles/App.css'
import { toggleModal } from './ui_store/ui_actions'

const App = props => {
  const { toggleModal, showModal } = props
  const [rankData, updateRankData] = useState({})

  const getData = async () => {
    const response = await axios.get(
      '/api/riotgames/ranked-solo'
    )
    updateRankData(response.data)
  }
  
  useEffect(() => {
    getData()
  }, [])

  return (
    <div className="App">
      {showModal ? (
        <tableLe>
          <tbody>
            <tr>
              <th>League ID</th>
              <th>Name</th>
              <th>Queue</th>
              <th>Tier</th>
            </tr>
            <tr>
              <td>{rankData.leagueId}</td>
              <td>{rankData.name}</td>
              <td>{rankData.queue}</td>
              <td>{rankData.tier}</td>
            </tr>
          </tbody>
        </tableLe>
      ) : (
        <h1>React / Redux Starter</h1>
      )}
      <button onClick={() => toggleModal(!showModal)}>Click Me</button>
    </div>
  )
}

const mapStateToProps = ({ ui }) => ({
  showModal: ui.showModal
})

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      toggleModal
    },
    dispatch
  )

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App)
