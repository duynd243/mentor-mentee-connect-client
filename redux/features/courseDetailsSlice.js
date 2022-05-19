import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';


// courseDetailsData
export const courseDetailsData = createAsyncThunk(
  'courses/fetchCourses',
  async (id) => {
    const response = await fetch(`https://obscure-shelf-38503.herokuapp.com/courseDetails/${id}`)
    const data = response.json();
    return data;
  }
)


export const courseDetailsSlice = createSlice({
  name: 'courses',
  initialState: {
    courseDetails: {},
    status: '',
  },
  reducers: {

  },

  extraReducers: (builder) => {
    builder.addCase(courseDetailsData.fulfilled, (state, action) => {
      state.courseDetails = action.payload
      state.status = 'fulfilled'
    }),
      builder.addCase(courseDetailsData.pending, (state, action) => {
        state.status = 'pending'
      })
  },

})

// export const { increment } = courseDetailsSlice.actions
export default courseDetailsSlice.reducer
