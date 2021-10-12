import { call, cancel, cancelled, fork, put, take, takeLatest, takeEvery } from 'redux-saga/effects';
import { Alert } from 'react-native';
import { unlinkTattlebox } from '../../services/Api';
import * as dashboardActions from '../actions/dashboardActions';

/**
 * Create unlinkTattleboxAsync file for manage saga effects
 * @class unlinkTattleboxAsync
 */
export default function* unlinkTattleboxAsync(action) {

  try {
    // Enable dashboard loader
    yield put(dashboardActions.enableLoader());

    // Call api
    const response = yield call(unlinkTattlebox, action.device_id);

    console.log('function*unlinkTattleboxAsync :: response :: ', response);

    if (response.status === 200) {
      // Store get device response
      yield put(dashboardActions.unlinkTattleboxResponse(response));
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
