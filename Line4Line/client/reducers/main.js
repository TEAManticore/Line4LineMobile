//This file will combine all reducers into one big object
import { combineReducers, createStore, applyMiddleware } from 'redux'
//The individual reducers import here


const logMiddleware = ({ dispatch, getState }) => {
  // console.log('Enter logMiddleware')
  return function(next) {
    return function(action) {
      console.log('Action received:', action)
      return next(action)
    }
  }
}

const thunkMiddleware = ({ dispatch, getState }) => {
  // console.log('Enter thunkMiddleware')
  return function(next) {
    // console.log('Function "next" provided:', next)
    return function (action) {
      // console.log('Handling action:', action)
      return typeof action === 'function' ?
        action(dispatch, getState) :
        next(action)
    }
  }
}

const finalCreateStore = applyMiddleware(logMiddleware, thunkMiddleware)(createStore)
// const finalCreateStore = applyMiddleware(Thunk)(createStore)

//combine the reducers here
const allReducers = combineReducers({

})

export const store = finalCreateStore(allReducers)

// console.log('store state after initialization:', store.getState())
