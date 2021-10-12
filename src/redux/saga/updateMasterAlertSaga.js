import { call, cancel, cancelled, fork, put, take, takeLatest, takeEvery } from 'redux-saga/effects';
import { Alert } from 'react-native';
import { updateMasterAlert } from '../../services/Api';
import * as dashboardActions from '../actions/dashboardActions';

/**
 * Create updateMasterAlertsAsync file for manage saga effects
 * @class updateMasterAlertsAsync
 */
export default function* updateMasterAlertsAsync(action) {

  try {
    // Enable dashboard loader
    yield put(dashboardActions.enableLoader());

    // Call api
    const response = yield call(updateMasterAlert,action.device_id, action.master_alerts_enabled);

    // console.log('function*updateMasterAlertsAsync :: response :: ', response);

    if (response.status === 200) {
      // Store get device response
      yield put(dashboardActions.updateMasterAlertResponse(response));
      // Disable loader
      yield put(dashboardActions.disableLoader());
    } else {
      // Disable loader
      yield put(dashboardActions.disableLoader());
    }
  } catch (error) {
     // Disable loader
    yield put(dashboardActions.disableLoader());
  }

}
