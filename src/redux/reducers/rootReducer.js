// redux imports
import { combineReducers } from 'redux'

//  created reducers
import usersReducer from './usersReducer'

const rootReducer = combineReducers({
    users: usersReducer
})

export default rootReducer;