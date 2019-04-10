import { SET_SHOW_STATS, SET_SUMMONER_DATA } from './ui_actions'

const initialUIState = {
  showStats: false,
  summonerData: {},
}

const uiState = (lastState = initialUIState, action) => {
  switch (action.type) {
    case SET_SHOW_STATS:
      return {
        ...lastState,
        showStats: action.payload
      }
    case SET_SUMMONER_DATA:
      return {
        ...lastState,
        summonerData: action.payload
      }
    default:
      return lastState
  }
}

export default uiState