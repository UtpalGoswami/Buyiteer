import { call, cancel, cancelled, fork, put, take, takeLatest, takeEvery } from 'redux-saga/effects';
import { Alert } from 'react-native';
import { makerequestFunction } from '../../services/Api';
import * as dashboardActions from '../actions/dashboardActions';

/**
 * Create makeRequesAsync file for manage saga effects
 * @class makeRequesAsync
 */
export default function* makeRequesAsync(action) {

  try {
    // Enable dashboard loader
    yield put(dashboardActions.enableLoader());

    // Call api
    const response = yield call(makerequestFunction, action.device_id, action.request_code);

    console.log('function*makeRequesAsync :: response :: ', response);

    if (response.status === 200) {
      // Store get device response
      yield put(dashboardActions.makeRequestAPIResponse(response));
      // Disable loader
      yield put(dashboardActions.disableLoader());
    } else {
      // Disable loader
      yield put(dashboardActions.disableLoader());
    }
  } catch (error) {
    console.log('Error Here make request : ' + error);
    yield put(dashboardActions.disableLoader());
  }

}
