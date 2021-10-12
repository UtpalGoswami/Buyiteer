import { call, cancel, cancelled, fork, put, take, takeLatest, takeEvery } from 'redux-saga/effects';
import { Alert } from 'react-native';
import { getDeviceDetails, DeviceRefreshFunction } from '../../services/Api';
import * as dashboardActions from '../actions/dashboardActions';

/**
 * Create deviceDetailsAsync file for manage saga effects
 * @class deviceDetailsAsync
 */
export default function* deviceDetailsAsync(action) {

  try {
    // Enable dashboard loader
    yield put(dashboardActions.enableLoader());

    // Call api
    const response = yield call(DeviceRefreshFunction,action.device_id);

    console.log('function*deviceDetailsAsync :: response :: ', response);

    if (response.status === 200) {
      // Store get device response
      yield put(dashboardActions.getDeviceDetailsResponse(response.response));
      // Disable loader
      yield put(dashboardActions.disableLoader());
    } else {
      // Get device details fail
      yield put(dashboardActions.getDeviceDetailsFailed());
      // Disable loader
      yield put(dashboardActions.disableLoader());
    }
  } catch (error) {
    // Get device details fail
    yield put(dashboardActions.getDeviceDetailsFailed());
    console.log('Error Here Device Details : ' + error);
    yield put(dashboardActions.disableLoader());
  }

}
