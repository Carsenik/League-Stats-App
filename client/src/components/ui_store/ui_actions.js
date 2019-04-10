import axios from 'axios'

export const SET_SHOW_STATS = '[UI] SET_SHOW_STATS'
export const SET_SUMMONER_DATA = '[UI] SET_SUMMONER_DATA'

export const toggleShowStats = showStats => dispatch => {
  dispatch({ type: SET_SHOW_STATS, payload: showStats})
}

export const getSummonerData = term => async dispatch => {
  const summoner = await axios.get(`/api/riotgames/summoner?name=${term}`)
  dispatch({ type: SET_SUMMONER_DATA, payload: summoner.data })

  const matchesResponse = await axios.get(`/api/riotgames/matches?accountId=${summoner.data.accountId}`)
  const matches = matchesResponse.data.matches.slice(0, 10)
  console.log(matches)

  const matchdata = matches.map(async (match) => {
    const matchResponse = await axios.get(`/api/riotgames/match?matchId=${match.gameId}`)
    return matchResponse.data

  })
  console.log(matchdata)
  dispatch({ type: SET_SHOW_STATS, payload: true })
}