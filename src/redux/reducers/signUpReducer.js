import * as types from '../actions/types';

// init state value
const initialState = {
  isLoggedIn: false,
  id: 0,
  firstName: '',
  lastName: '',
  email: '',
  password: '',
  spinner : false,
};

/**
 * Reducer related with signup
 * @class signupReducer
 */
export default function loginReducer(state = initialState, action) {
  switch (action.type) {
    case types.SIGNUP_REQUEST:
      return {
        ...state,
        firstName: action.firstName,
        lastName: action.lastName,
        email: action.email,
        password: action.password,
        spinner : true,
      };
    case types.SIGNUP_ENABLE_LOADER:
      return {
        ...state,
        spinner : true,
      };
    case types.SIGNUP_DISABLE_LOADER:
      return {
        ...state,
        spinner : false,
      };
    case types.SIGNUP_RESPONSE:
      return {
        ...state,
        isLoggedIn: true,
        spinner : false,
      };
    case types.SIGNUP_FAILED:
      return {
        ...state,
        isLoggedIn: false,
        spinner : false,
      };
    default:
      return state;
  }
}
