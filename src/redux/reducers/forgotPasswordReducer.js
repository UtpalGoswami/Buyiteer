import * as types from '../actions/types';

// init state value
const initialState = {
  isLoggedIn: false,
  id: 0,
  email: '',
  password: '',
  spinner : false,
};

/**
 * Reducer related with signup
 * @class forgotPasswordReducer
 */
export default function forgotPasswordReducer(state = initialState, action) {
  switch (action.type) {
    case types.FORGOT_PASSWORD_REQUEST:
      return {
        ...state,
        email: action.email,
        spinner : true,
      };
    case types.FORGOT_PASSWORD_ENABLE_LOADER:
      return {
        ...state,
        spinner : true,
      };
    case types.FORGOT_PASSWORD_DISABLE_LOADER:
      return {
        ...state,
        spinner : false,
      };
    case types.FORGOT_PASSWORD_RESPONSE:
      return {
        ...state,
        isLoggedIn: true,
        spinner : false,
      };
    case types.FORGOT_PASSWORD_FAILED:
      return {
        ...state,
        isLoggedIn: false,
        spinner : false,
      };
    default:
      return state;
  }
}
