import {combineReducers, createStore} from "redux";
import {countReducer} from "./count-reducer";
import {composeWithDevTools} from "redux-devtools-extension";

const rootReducers=combineReducers({
    counter:countReducer
})

export type AppRootStateType = ReturnType<typeof rootReducers>;

export const store=createStore(rootReducers,composeWithDevTools())