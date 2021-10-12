import { call, cancel, cancelled, fork, put, take, takeLatest, takeEvery } from 'redux-saga/effects';
import { Alert } from 'react-native';
import { linkNewDevice } from '../../services/Api';
import * as dashboardActions from '../actions/dashboardActions';

/**
 * Create linkDeviceAsync file for manage saga effects
 * @class linkDeviceAsync
 */
export default function* linkDeviceAsync(action) {

  try {
    // Enable dashboard loader
    yield put(dashboardActions.enableLoader());

    // Call api
    const response = yield call(linkNewDevice, action.link_code);
  
    // console.log('function*linkDeviceAsync :: response', response);
  
    if (response) {
      // Store get device response
      yield put(dashboardActions.getLinkDeviceResponse(response));
      // Disable loader
      yield put(dashboardActions.disableLoader());
    } else {
      // Disable loader
      yield put(dashboardActions.disableLoader());
    }  
  } catch (error) {
    console.log('Error Here LinkDevice : '+error);
    yield put(dashboardActions.disableLoader());
  }

}
