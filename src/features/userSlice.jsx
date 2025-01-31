import { createSlice } from '@reduxjs/toolkit';

const userSlice = createSlice({
  name: 'user',
  initialState: {
    role: 'jobSeeker',
    appliedJobs: [],
  },
  reducers: {
    setUserRole: (state, action) => {
      state.role = action.payload;
    },
    applyJob: (state, action) => {
      state.appliedJobs.push(action.payload);
    },
  },
});

export const { setUserRole, applyJob } = userSlice.actions;
export default userSlice.reducer;