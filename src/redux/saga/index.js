import { takeEvery, all, takeLatest, take } from 'redux-saga/effects';
import * as types from '../actions/types';
import loginSaga from './loginSaga';
import signUpSaga from './signUpSaga';
import dashboardSaga from './dashboardSaga';
import linkDeviceSaga from './linkDeviceSaga';
import deviceDetailsSaga from './deviceDetailsSaga';
import updateDeviceDetailsSaga from './updateDeviceDetailsSaga';
import settingDeviceDetailsSaga from './settingDeviceDetailsSaga';
import profileSaga from './profileSaga';
import updateMasterAlertSaga from './updateMasterAlertSaga';
import unlinkTattleboxSaga from './unlinkTattleboxSaga';
import makeRequestSaga from './makeRequestSaga';
import getCommonRefreshFunctionSaga from './getCommonRefreshFunctionSaga';
import pushNotificationSubscribeSaga from './pushNotificationSubscribeSaga';

/**
 * Create root saga file for manage api request and response
 * @class rootSaga
 */
export default function* rootSaga() {

  // Take login saga request
  yield all([takeEvery(types.LOGIN_REQUEST, loginSaga)]);
  // Take signup saga request
  yield all([takeEvery(types.SIGNUP_REQUEST, signUpSaga)]);
  // Take dashboard saga request
  yield all([takeEvery(types.GET_DEVICE_REQUEST, dashboardSaga)]);
  // Take new link device saga request
  yield all([takeEvery(types.LINK_NEW_DEVICE, linkDeviceSaga)]);
  // Take link device saga request
  yield all([takeEvery(types.GET_DEVICE_DETAILS_REQUEST, deviceDetailsSaga)]);
  // Take setting saga request
  yield all([takeEvery(types.SETTING_UPDATE_REQUEST, updateDeviceDetailsSaga)]);
  // Take device details saga request
  yield all([takeEvery(types.SETTING_GET_DEVICE_DETAILS_REQUEST, settingDeviceDetailsSaga)]);
  // Take logout saga request
  yield all([takeEvery(types.PROFILE_LOGOUT_REQUEST, profileSaga)]);
  // Take master alert action saga request
  yield all([takeEvery(types.UPDATE_MASTER_ALERT_REQUEST, updateMasterAlertSaga)]);
  // Take make request saga request
  yield all([takeEvery(types.MAKE_REQUEST_API_REQUEST, makeRequestSaga)]);
  // Take unlink tattlebox saga request
  yield all([takeEvery(types.UNLINK_TATTLEBOX_REQUEST, unlinkTattleboxSaga)]);
  // Take Common Refresh Function saga request
  yield all([takeEvery(types.GET_COMMON_REFRESH_FUNCTION_REQUEST, getCommonRefreshFunctionSaga)]);
  // Take set FCM token request saga request
  yield all([takeEvery(types.PUSH_NOTIFICATION_SUBSCRIBE_REQUEST, pushNotificationSubscribeSaga)]);
}
