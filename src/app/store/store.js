import { configureStore } from '@reduxjs/toolkit';
import locationReducer from './reducers/location/locationSlice';
import userReducer from './reducers/user/userSlice';

export default configureStore({
  reducer: {
    location: locationReducer,
    user: userReducer
  }
});
