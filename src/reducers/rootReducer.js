import {combineReducers} from 'redux';
import bookListReducer from  './bookListReducer';
import activeBookReducer from  './activeBookReducer';


const rootReducer = combineReducers({
    books:bookListReducer,
    activeBook:activeBookReducer
})

export default rootReducer;