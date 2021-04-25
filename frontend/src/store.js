import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import {
  singinUserReducuer,
  singupUserReducer,
  getUserByIdReducer,
  putUserReducer,
} from "./reducers/userReducer";
import {
  getBooksMoreSoldReducer,
  getBooksForGerderReducer,
} from "./reducers/booksReducer";

const token = JSON.parse(localStorage.getItem("token")) || "null";
const rolName = JSON.parse(localStorage.getItem("rolName")) || "null";
const user = JSON.parse(localStorage.getItem("user")) || {};
const data = { token: token, rolName: rolName };
console.log(data);
console.log(user);
const inizialite = {
  singinUser: data,
  getByIdUser: user,
};
const reducer = combineReducers({
  singinUser: singinUserReducuer,
  singupUser: singupUserReducer,
  getByIdUser: getUserByIdReducer,
  putUser: putUserReducer,
  getMoreSold: getBooksMoreSoldReducer,
  getForGerder: getBooksForGerderReducer,
});

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  reducer,
  inizialite,
  composeEnhancer(applyMiddleware(thunk))
);
export default store;
