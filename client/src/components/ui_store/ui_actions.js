import axios from 'axios'

export const SET_SHOW_STATS = '[UI] SET_SHOW_STATS'
export const SET_SUMMONER_DATA = '[UI] SET_SUMMONER_DATA'

export const toggleShowStats = showStats => dispatch => {
  dispatch({ type: SET_SHOW_STATS, payload: showStats })
}

export const getSummonerData = term => async dispatch => {
  const summonerData = await axios.get(`/api/riotgames/summoner?name=${term}&startIndex=0&endIndex=5`)
  dispatch({ type: SET_SUMMONER_DATA, payload: summonerData.data })
  dispatch({ type: SET_SHOW_STATS, payload: true })
}