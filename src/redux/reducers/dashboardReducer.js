import * as types from '../actions/types';

// init state value 
const initialState = {
  id: 0,
  device_id: 0,
  id_greater_than: 0,
  timestamp_greater_than: '',
  timestamp_less_than: '',
  limit: 10,
  offset: 10,
  pushNotificationCount: 0,
  token: '',
  spinner: false,
  deviceList: {},
  link_code: '',
  linkDeviceResponse: {},
  deviceDetailsResponse: {},
  sensorDetailsResponse: {},
  updateMasterAlertResponse: {},
  unlinkTattleboxResponse: {},
  makeRequestResponse: {},
  getCommonRefreshFunctionResponse: {},
  pushNotificationSubscribeResponse: {},
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
        deviceList: action.response,
        spinner: false,
      };
    case types.LINK_NEW_DEVICE:
      return {
        ...state,
        link_code: action.link_code,
        spinner: true,
      };
    case types.GET_LINK_DEVICE_RESPONSE:
      return {
        ...state,
        linkDeviceResponse: action.response,
        spinner: false,
      };
    case types.CLEAR_LINK_DEVICE_RESPONSE:
      return {
        ...state,
        linkDeviceResponse: {},
        getCommonRefreshFunctionResponse: {},
        spinner: false,
      };
    //--
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
    case types.GET_SENSOR_REQUEST:
      return {
        ...state,
        spinner: true,
      };
    case types.GET_SENSOR_RESPONSE:
      return {
        ...state,
        sensorDetailsResponse: action.response,
        spinner: false,
      };
    case types.GET_SENSOR_FAILED:
      return {
        ...state,
        sensorDetailsResponse: {},
        spinner: false,
      };
    case types.GET_DEVICE_FAILED:
      return {
        ...state,
        spinner: false,
      };
    case types.UPDATE_MASTER_ALERT_REQUEST:
      return {
        ...state,
        spinner: true,
      };
    case types.UPDATE_MASTER_ALERT_RESPONSE:
      return {
        ...state,
        updateMasterAlertResponse: action.response,
        spinner: false,
      };
    case types.PUSH_NOTIFICATION_SUBSCRIBE_REQUEST:
      return {
        ...state,
        fcm_token: action.fcm_token,
        platformType: action.platformType
      };
    case types.PUSH_NOTIFICATION_SUBSCRIBE_RESPONSE:
      return {
        ...state,
        pushNotificationSubscribeResponse: action.response
      };
    case types.PUSH_NOTIFICATION_COUNT:
      return {
        ...state,
        pushNotificationCount: action.count
      };
    case types.MAKE_REQUEST_API_REQUEST:
      return {
        ...state,
        spinner: true,
      };
    case types.MAKE_REQUEST_API_RESPONSE:
      return {
        ...state,
        makeRequestResponse: action.response,
        spinner: false,
      };
    case types.UNLINK_TATTLEBOX_REQUEST:
      return {
        ...state,
        spinner: true,
      };
    case types.UNLINK_TATTLEBOX_RESPONSE:
      return {
        ...state,
        unlinkTattleboxResponse: action.response,
        spinner: false,
      };
    case types.GET_COMMON_REFRESH_FUNCTION_REQUEST:
      return {
        ...state,
        spinner: true,
      };
    case types.GET_COMMON_REFRESH_FUNCTION_RESPONSE:
      return {
        ...state,
        getCommonRefreshFunctionResponse: action.response,
        spinner: false,
      };
    default:
      return state;
  }
}