import React from 'react'
import { connect } from 'react-redux'

const SummonerStats = ({summonerData}) => {
  return (
    <div>{summonerData.name}</div>
  )
}

const mapStateToProps = ({ ui }) => ({
	summonerData: ui.summonerData
})

export default connect(mapStateToProps)(SummonerStats)