import { call, put } from 'redux-saga/effects';
import { DeviceRefreshFunction } from '../../services/Api';
import * as dashboardActions from '../actions/dashboardActions';

/**
 * Create getCommonRefreshFunctionAsync file for manage saga effects
 * @class getCommonRefreshFunctionAsync
 */
export default function* getCommonRefreshFunctionAsync(action) {

  try {
    // Enable dashboard loader
    yield put(dashboardActions.enableLoader());

    // Call api
    const response = yield call(DeviceRefreshFunction, action.device_id);
    // console.log('function*getCommonRefreshFunctionAsync :: response :: ', response);

    if (response.status === 200) {
      // Store get device response
      yield put(dashboardActions.getCommonRefreshFunctionResponse(response));
      // Disable loader
      yield put(dashboardActions.disableLoader());
    } else {
      // Disable loader
      yield put(dashboardActions.disableLoader());
    }
  } catch (error) {
    console.log('Error Here Common Refresh : ' + error);
    yield put(dashboardActions.disableLoader());
  }

}
