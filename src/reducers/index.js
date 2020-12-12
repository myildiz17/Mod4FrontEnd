import { combineReducers } from 'redux'
import notesReducer from './notes.js'

export default combineReducers({
    notes: notesReducer
})



// import { combineReducers } from 'redux'
// import notes from './notes.js'

// export default combineReducers({
//     notes
// })     ES6