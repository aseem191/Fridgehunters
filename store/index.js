import rootReducer from "../reducers/index";
import { createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunkMiddleware from 'redux-thunk'

const store = createStore(rootReducer);

export default store