import { call, put } from 'redux-saga/effects';
import { getDeviceDetails,DeviceRefreshFunction } from '../../services/Api';
import * as settingActions from '../actions/settingActions';

/**
 * Create deviceDetailsAsync file for manage saga effects
 * @class deviceDetailsAsync
 */
export default function* settingDeviceDetailsAsync(action) {

  try {
    // Enable dashboard loader
    yield put(settingActions.enableLoader());

    // Call api
    const response = yield call(DeviceRefreshFunction,action.device_id);
    // const response = yield call(getDeviceDetails,action.device_id);

    // console.log('function*deviceDetailsAsync :: response :: ', response);

    if (response.status === 200) {
      // Store get device response
      yield put(settingActions.getDeviceDetailsResponse(response));
      // Disable loader
      yield put(settingActions.disableLoader());
    } else {
      // Get device details fail
      yield put(settingActions.getDeviceDetailsFailed());
      // Disable loader
      yield put(settingActions.disableLoader());
    }
  } catch (error) {
    // Get device details fail
    yield put(settingActions.getDeviceDetailsFailed());
    console.log('Error Here Device Details : ' + error);
    yield put(settingActions.disableLoader());
  }

}
