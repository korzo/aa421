import {combineReducers, createStore} from "redux";
import {notificationsReducer} from "./notifications";
import { composeWithDevTools } from 'redux-devtools-extension';


const rootReducer = combineReducers({
    notifications: notificationsReducer
});

export const store = createStore(
    rootReducer,
    composeWithDevTools()
);

export type IAppState = ReturnType<typeof rootReducer>;