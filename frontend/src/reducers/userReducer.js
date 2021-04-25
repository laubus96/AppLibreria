import {
  USER_SINGIN,
  USER_SINGUP,
  USER_UPDATE,
  USER_GET_ID,
} from "../constants/userContants";

function singinUserReducuer(state = {}, action) {
  switch (action.type) {
    case USER_SINGIN:
      return action.payload;
    default:
      return state;
  }
}

function singupUserReducer(state = {}, action) {
  switch (action.type) {
    case USER_SINGUP:
      return { userRegister: action.payload };
    default:
      return state;
  }
}
function getUserByIdReducer(state = {}, action) {
  switch (action.type) {
    case USER_GET_ID:
      return action.payload;
    default:
      return state;
  }
}
function putUserReducer(state = {}, action) {
  switch (action.type) {
    case USER_UPDATE:
      return { userUpdate: action.payload };
    default:
      return state;
  }
}
export {
  singinUserReducuer,
  singupUserReducer,
  getUserByIdReducer,
  putUserReducer,
};
