/**
 * Reducer actions related with dshboard
 * @class dashboardActions
 */
import * as types from './types';

/**
 * @description getDeviceList - get Device List request
 * @param  {string} token - User token for get device list request
 */
export function getDeviceList() {
  return {
    type: types.GET_DEVICE_REQUEST,
  };
}

/**
 * @description  getDeviceList - get evice List failed action
 */
export function getDeviceFailed() {
  return {
    type: types.GET_DEVICE_FAILED,
  };
}

/**
 * @description  getDeviceResponse - get Device List failed action
 * @param  {object} response - Login Response
 */
export function getDeviceResponse(response) {
  return {
    type: types.GET_DEVICE_RESPONSE,
    response,
  };
}

// ---

/**
 * @description  getSensorDetailsResponse - get Device List failed action
 * @param  {object} response - Login Response
 */
export function getSensorDetailsResponse(response) {
  return {
    type: types.GET_SENSOR_RESPONSE,
    response,
  };
}
// ---

//----
/**
 * @description getDeviceList - get Device List request
 * @param  {string} token - User token for get device list request
 */
 export function getCommonRefreshFunctionRequest(device_id) {
  return {
    type: types.GET_COMMON_REFRESH_FUNCTION_REQUEST,
    device_id
  };
}

/**
 * @description  getDeviceDetailsResponse - get Device List failed action
 * @param  {object} response - Login Response
 */
 export function getCommonRefreshFunctionResponse(response) {
  return {
    type: types.GET_COMMON_REFRESH_FUNCTION_RESPONSE,
    response,
  };
}
//----

/**
 * @description linkNewDevice - get Device List request
 * @param  {string} link_code - User token for get device list request
 */
export function linkNewDevice(link_code) {
  return {
    type: types.LINK_NEW_DEVICE,
    link_code
  };
}

/**
 * @description  getDeviceResponse - get Device List failed action
 * @param  {object} response - Dasjboard Response
 */
export function getLinkDeviceResponse(response) {
  return {
    type: types.GET_LINK_DEVICE_RESPONSE,
    response,
  };
}
/**
 * @description  clearLinkDeviceResponse - get Device List failed action
 */
export function clearLinkDeviceResponse() {
  return {
    type: types.CLEAR_LINK_DEVICE_RESPONSE,
  };
}

/**
 * @description getDeviceDetails - get Device List request
 * @param  {string} token - User token for get device list request
 */
export function getDeviceDetails(device_id, id_greater_than, timestamp_greater_than, timestamp_less_than, limit, offset) {
  return {
    type: types.GET_DEVICE_DETAILS_REQUEST,
    device_id,
    id_greater_than,
    timestamp_greater_than,
    timestamp_less_than,
    limit,
    offset
  };
}

/**
 * @description  getDeviceDetailsFailed - get evice List failed action
 */
export function getDeviceDetailsFailed() {
  return {
    type: types.GET_DEVICE_DETAILS_FAILED,
  };
}

/**
 * @description  getDeviceDetailsResponse - get Device List failed action
 * @param  {object} response - Login Response
 */
export function getDeviceDetailsResponse(response) {
  return {
    type: types.GET_DEVICE_DETAILS_RESPONSE,
    response,
  };
}
//----
/**
 * @description getDeviceList - get Device List request
 * @param  {string} token - User token for get device list request
 */
 export function updateMasterAlert(device_id,master_alerts_enabled) {
  return {
    type: types.UPDATE_MASTER_ALERT_REQUEST,
    device_id,
    master_alerts_enabled
  };
}

/**
 * @description  getDeviceDetailsResponse - get Device List failed action
 * @param  {object} response - Login Response
 */
 export function updateMasterAlertResponse(response) {
  return {
    type: types.UPDATE_MASTER_ALERT_RESPONSE,
    response,
  };
}
//----

//----
/**
 * @description getDeviceList - get Device List request
 * @param  {string} device_id - selected device id
 * @param  {string} request_code - click button request code
 */
 export function makeRequestAPIRequest(device_id,request_code) {
  return {
    type: types.MAKE_REQUEST_API_REQUEST,
    device_id,
    request_code
  };
}

/**
 * @description  getDeviceDetailsResponse - get Device List failed action
 * @param  {object} response - Login Response
 */
 export function makeRequestAPIResponse(response) {
  return {
    type: types.MAKE_REQUEST_API_RESPONSE,
    response,
  };
}
//----

//----
/**
 * @description getDeviceList - get Device List request
 * @param  {string} token - User token for get device list request
 */
 export function unlinkTattleboxRequest(device_id) {
  return {
    type: types.UNLINK_TATTLEBOX_REQUEST,
    device_id
  };
}

/**
 * @description  getDeviceDetailsResponse - get Device List failed action
 * @param  {object} response - Login Response
 */
 export function unlinkTattleboxResponse(response) {
  return {
    type: types.UNLINK_TATTLEBOX_RESPONSE,
    response,
  };
}
//----

/**
 * @description pushNotificationSubscribeRequest - set FCM token request request
 * @param  {string} fcm_token - FCM token for push notification
 * @param  {string} platformType - Platform type Android / iOS
 */
 export function pushNotificationSubscribeRequest(fcm_token,platformType) {
  return {
    type: types.PUSH_NOTIFICATION_SUBSCRIBE_REQUEST,
    fcm_token,
    platformType
  };
}

/**
 * @description  pushNotificationSubscribeResponse - get Device List failed action
 * @param  {object} response - FCM Response
 */
 export function pushNotificationSubscribeResponse(response) {
  return {
    type: types.PUSH_NOTIFICATION_SUBSCRIBE_RESPONSE,
    response,
  };
}

/**
 * @description  pushNotificationSubscribeResponse - get Device List failed action
 * @param  {object} response - FCM Response
 */
 export function pushNotificationCount(count) {
  return {
    type: types.PUSH_NOTIFICATION_COUNT,
    count,
  };
}
//----

/**
 * @description enableLoader - enable Loader
 */
export function enableLoader() {
  return {
    type: types.DASHBOARD_ENABLE_LOADER,
  };
}

/**
 * @description  disableLoader - disable Loader
 */
export function disableLoader() {
  return {
    type: types.DASHBOARD_DISABLE_LOADER,
  };
}
