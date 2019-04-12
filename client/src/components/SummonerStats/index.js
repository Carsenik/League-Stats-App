import React from 'react'
import { connect } from 'react-redux'
import styled from 'styled-components'

import Match from './Match'

const SummonerStats = ({ summonerData }) => {
  const { summoner, matches } = summonerData
  return (
    <SummonerStatsContainer>
      <SummonerTitle>{summoner}</SummonerTitle>
      {matches.map(match => (
        <Match key={match.gameCreation} {...match} />
      ))}
    </SummonerStatsContainer>
  )
}

const mapStateToProps = ({ ui }) => ({
  summonerData: ui.summonerData
})

export default connect(mapStateToProps)(SummonerStats)

const SummonerStatsContainer = styled.main`
  display: grid;
  justify-content: center;
  grid-template-columns: 1fr;
  grid-auto-rows: min-content;
  grid-gap: 0.5rem;
  width: max-content;
`

const SummonerTitle = styled.h2`
  color: #333;
  text-align: center;
`
