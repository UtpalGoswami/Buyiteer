import * as types from '../actions/types';

// init state value 
const initialState = {
  id: 0,
  device_id: 0,
  limit: 10,
  offset: 10,
  spinner: false,
  dealsList: {},
  deviceDetailsResponse: {},
};

/**
 * Reducer
 * @class dashboardReducer
 */
export default function dashboardReducer(state = initialState, action) {
  switch (action.type) {
    case types.GET_DEVICE_REQUEST:
      return {
        ...state,
        spinner: true,
      };
    case types.DASHBOARD_ENABLE_LOADER:
      return {
        ...state,
        spinner: true,
      };
    case types.DASHBOARD_DISABLE_LOADER:
      return {
        ...state,
        spinner: false,
      };
    case types.GET_DEVICE_RESPONSE:
      return {
        ...state,
        dealsList: action.response,
        spinner: false,
      };
    case types.GET_DEVICE_DETAILS_REQUEST:
      return {
        ...state,
        device_id: action.device_id,
        spinner: true,
      };
    case types.GET_DEVICE_DETAILS_RESPONSE:
      return {
        ...state,
        deviceDetailsResponse: action.response,
        spinner: false,
      };
    case types.GET_DEVICE_DETAILS_FAILED:
      return {
        ...state,
        deviceDetailsResponse: {},
        spinner: false,
      };
    case types.GET_DEVICE_FAILED:
      return {
        ...state,
        spinner: false,
      };
    default:
      return state;
  }
}