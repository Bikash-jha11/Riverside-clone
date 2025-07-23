import React from 'react'
import {createStore, Store,applyMiddleware} from 'redux'
import { Provider } from 'react-redux'
import rootReducer from './reducer/index'
import {thunk} from "redux-thunk"
import { composeWithDevTools } from 'redux-devtools-extension';


interface AuxProps {
    children: React.ReactNode
  }


const store: Store = createStore(rootReducer,composeWithDevTools(applyMiddleware(thunk)))


export const ReduxProvider = ({children}:AuxProps) => {
    return(
        <Provider store={store}>
        {children}
      </Provider>
    )
}