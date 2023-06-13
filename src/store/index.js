import { configureStore } from '@reduxjs/toolkit';
import kotReducer from '../features/kot/kotSlice';

export default configureStore({
  reducer: {
    kotReducer: kotReducer
  }
});
