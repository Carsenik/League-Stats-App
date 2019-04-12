import {createStore, combineReducers, applyMiddleware} from 'redux'
import ReduxThunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import uiState from './ui_store/ui_reducer'

const rootReducer = combineReducers({
    ui: uiState
})

export const store = createStore(rootReducer, {}, composeWithDevTools(applyMiddleware(ReduxThunk)))