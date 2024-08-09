import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

const initialState = {
  value: 0
};

export const incrementAsync = createAsyncThunk('counter/incrementAsync', async amount => {
  await new Promise(resolve => setTimeout(resolve, 1000));
  return amount;
});

const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    increment: state => {
      state.value += 1;
    },
    decrement: state => {
      state.value -= 1;
    },
    clean: state => {
      state.value = 0;
    }
  },
  extraReducers: builder => {
    builder
      .addCase(incrementAsync.pending, () => {
        console.log('incrementAsync.pending');
      })
      .addCase(incrementAsync.fulfilled, (state, action) => {
        state.value += action.payload;
      });
  }
});

export const { increment, decrement, clean } = counterSlice.actions;

export default counterSlice.reducer;
