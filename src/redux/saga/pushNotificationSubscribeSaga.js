import { call, put } from 'redux-saga/effects';
import { notificationSubscribeFunction } from '../../services/Api';
import * as dashboardActions from '../actions/dashboardActions';

/**
 * Create pushNotificationSubscribeAsync file for manage saga effects
 * @class pushNotificationSubscribeAsync
 */
export default function* pushNotificationSubscribeAsync(action) {
  try {
    // Enable dashboard loader
    // yield put(dashboardActions.enableLoader());

    // Call api
    const response = yield call(notificationSubscribeFunction, action.fcm_token, action.platformType);

    // console.log('function*pushNotificationSubscribeAsync :: response :: ', response);

    if (response.status === 200) {
      // Store get device response
      yield put(dashboardActions.pushNotificationSubscribeResponse(response));
      // Disable loader
      // yield put(dashboardActions.disableLoader());
    } else {
      // Disable loader
      // yield put(dashboardActions.disableLoader());
    }
  } catch (error) {
    console.log('Error Here Device Details : ' + error);
    // yield put(dashboardActions.disableLoader());
  }

}
