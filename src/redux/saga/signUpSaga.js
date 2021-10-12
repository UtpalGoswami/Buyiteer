import { call, cancel, cancelled, fork, put, take } from 'redux-saga/effects';
import { Alert } from 'react-native';
import { signUp } from '../../services/Api';
import * as signUpActions from '../actions/signUpActions';

export default function* signUpAsync(action) {

  // Enable loader
  yield put(signUpActions.enableLoader());

  // Calling function for API
  const response = yield fork(signUp, action.firstName, action.lastName, action.email, action.password);

  console.log('function*signUpAsync :: response', response)

  if (response) {
    // Store signup response
    yield put(signUpActions.onsignUpResponse(response.data));
    // Disable loader
    yield put(signUpActions.disableLoader());
    // no need to call navigate as this is handled by redux store with SwitchNavigator
    // yield call(navigationActions.navigateToHome);
  } else {
    // Signup failed
    yield put(signUpActions.signUpFailed());
    // Disable loader
    yield put(signUpActions.disableLoader());
  }
}
