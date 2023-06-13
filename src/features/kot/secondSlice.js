import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const practiceSlice = createSlice({
  name: 'practice',
  initialState: {
    data1: '数据 1',
    data2: '数据 2'
  },
  reducers: {
    setValue(state, action) {
      console.log(action);
      state.data1 = '数据成功 1';
    }
  },
  extraReducers: {}
});

export const { setValue } = practiceSlice.actions;

export const fetchData = async () => {
  const res = await fetch('https://jsonplaceholder.typicode.com/todos/1');
  const data = await res.json();
  return data;
};

export default practiceSlice.reducer;
