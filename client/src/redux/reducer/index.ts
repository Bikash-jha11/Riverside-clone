import { combineReducers } from "redux";
import {authReducer} from '../reducer/authReducer'
import {notifyReducer} from './NotifyReducer'

export default combineReducers({
      auth:authReducer,
      notify: notifyReducer
})