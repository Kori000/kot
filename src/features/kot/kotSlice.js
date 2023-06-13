import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { fetchData } from './secondSlice';
export const practiceSlice = createSlice({
  name: 'practice',
  initialState: {
    kot: 'kot',
    title: 'nothing'
  },
  reducers: {
    setValue(state, action) {
      console.log('action', action);
      state.kot = action.payload.title;
    }
  },
  extraReducers: {}
});

// 从 actions 里拿出 reducers
export const { setValue } = practiceSlice.actions;

export const fetchTitle = () => async dispatch => {
  const newData = await fetchData();
  console.log('newData', newData);
  dispatch(setValue(newData));
};

export default practiceSlice.reducer;
