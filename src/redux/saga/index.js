import { takeEvery, all, takeLatest, take } from 'redux-saga/effects';
import * as types from '../actions/types';
import loginSaga from './loginSaga';
import signUpSaga from './signUpSaga';
import dashboardSaga from './dashboardSaga';
import linkDeviceSaga from './forgotPasswordSaga';
import deviceDetailsSaga from './resetPasswordSaga';
import updateDeviceDetailsSaga from './uploadFileSaga';
import profileSaga from './profileSaga';

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
  // Take logout saga request
  yield all([takeEvery(types.PROFILE_LOGOUT_REQUEST, profileSaga)]);
}
