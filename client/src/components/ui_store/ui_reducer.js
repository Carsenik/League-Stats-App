import { SET_MODAL } from './ui_actions'

const initialUIState = {
  showModal: false
}

const uiState = (lastState = initialUIState, action) => {
  switch (action.type) {
    case SET_MODAL:
      return {
        ...lastState,
        showModal: action.payload
      }
    default:
      return lastState
  }
}

export default uiState