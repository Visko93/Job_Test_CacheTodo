import { createStore } from "redux";
import combinedReducers from '../Modules/combinedReducers'

const store = createStore(combinedReducers)

export default store