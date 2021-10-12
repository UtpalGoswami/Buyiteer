import { call, cancel, cancelled, fork, put, take, takeLatest, takeEvery } from 'redux-saga/effects';
import { Alert } from 'react-native';
import { updateDeviceDetails } from '../../services/Api';
import * as settingActions from '../actions/settingActions';

/**
 * Create updateDeviceDetailsAsync file for manage saga effects
 * @class updateDeviceDetailsAsync
 */
export default function* updateDeviceDetailsAsync(action) {

  try {
    // Enable dashboard loader
    yield put(settingActions.enableLoader());

    // Call api
    const response = yield call(updateDeviceDetails, action.data);

    // console.log('function*updateDeviceDetailsAsync :: response :: ', response);

    if (response.status === 200) {
      // Store get device response
      yield put(settingActions.updateDeviceResponse(response));
      // Disable loader
      yield put(settingActions.disableLoader());
    } else {
      // Get device details fail
      yield put(settingActions.updateDeviceFailed());
      // Disable loader
      yield put(settingActions.disableLoader());
    }
  } catch (error) {
    // Get device details fail
    yield put(settingActions.updateDeviceFailed());
    console.log('Error Here Device Details : ' + error);
    yield put(settingActions.disableLoader());
  }

}
