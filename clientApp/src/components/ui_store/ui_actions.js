export const SET_MODAL = '[UI] SET_MODAL'

export const toggleModal = showModal => dispatch => {
  dispatch({ type: SET_MODAL, payload: showModal})
}