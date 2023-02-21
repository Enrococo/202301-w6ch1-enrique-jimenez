import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { RootState } from '../../app/store';
import { fetchRandomUuid } from './UuidAPI';

export interface UuidState {
  value: string;
  status: 'idle' | 'loading' | 'failed';
}

const initialState: UuidState = {
  value: '0000000000000000000000000000000000',
  status: 'idle',
};

export const randomUuid = createAsyncThunk('uuid/fetchRandomUuid', async () => {
  const response = await fetchRandomUuid();
  return response[0];
});

export const uuidSlice = createSlice({
  name: 'uuid',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(randomUuid.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(randomUuid.fulfilled, (state, action) => {
        state.status = 'idle';
        state.value = action.payload;
      })
      .addCase(randomUuid.rejected, (state) => {
        state.status = 'failed';
      });
  },
});

export const selectUuid = (state: RootState) => state.uuid.value;
export const selectUuidState = (state: RootState) => state.uuid.status;
export default uuidSlice.reducer;
