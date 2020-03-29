import { configureStore } from '@reduxjs/toolkit';
import locationReducer from './reducers/location/locationSlice';
import userReducer from './reducers/user/userSlice';
import notificationReducer from './reducers/notification/notificationSlice';

export default configureStore({
  reducer: {
    location: locationReducer,
    user: userReducer,
    notifications: notificationReducer
  }
});
