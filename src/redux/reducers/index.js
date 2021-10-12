// import login reducer
import loginReducer from './loginReducer';
// import signup reducer
import signUpReducer from './signUpReducer';
// import dashboard reducer
import dashboardReducer from './dashboardReducer';
// import dashboard reducer
import settingReducer from './settingReducer';
// import profile reducer
import profileReducer from './profileReducer';

const rootReducer = {
  loginReducer,
  signUpReducer,
  dashboardReducer,
  settingReducer,
  profileReducer
};

// export const LogOut = () => ({type : 'RESET_STORE'});

// const rootReducer = (state, action) => {
//   if(action.type === 'RESET_STORE'){
//     state={};
//   }
//   return appReducer(state, action)
// }

export default rootReducer;
