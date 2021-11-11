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
