import {combineReducers} from "redux"
import newsReducer from "./reducer/SearchNews"
import userReducer from "./reducer/userReducer"
import movieReducer from "./reducer/movieReducer"
import subcriptionReducer from "./reducer/subcriptionReducer"

const reducer =combineReducers({
    newsState:newsReducer,
    userState:userReducer,
    movieState:movieReducer,
    subcriptionState:subcriptionReducer
})

export default reducer