import {createAsyncThunk, createSlice } from '@reduxjs/toolkit';

// get all courses
export const coursesData = createAsyncThunk(
    'courses/fetchCourses',
    async () => {
      const response = await fetch('https://obscure-shelf-38503.herokuapp.com/courses')
      const data = response.json();
      return data;
    }
  )
// get single courses
export const singleCourse = createAsyncThunk(
    'course/fetchCourse',
    async (id = '622037c6ea7975d304b6b4ef') => {
      const response = await fetch(`https://obscure-shelf-38503.herokuapp.com/courseDetails/${id}`)
      const event = response.json();
      return event;
    }
  )
  
// coursesSlice
export const coursesSlice = createSlice({
  name: 'courses',
  initialState:{
    allCourses : [],
    status:'',
    course:{},
    courseStatus:'',
    searchValue:'',
    searchCoursesItems:[],
  },
  reducers: {
    searchText: (state, {payload}) => {
      state.searchValue= payload;
      state.searchCoursesItems = state.allCourses.filter(course => course.title.toLowerCase().includes(payload.toLowerCase()))
    },
  },

  extraReducers: (builder) => {
    // all courses
    builder.addCase(coursesData.fulfilled, (state, action) => {
      state.allCourses = action.payload
      state.status = 'fulfilled'
    }),
    builder.addCase(coursesData.pending, (state, action) => {
      state.status = 'pending'
    })
    // single course
    builder.addCase(singleCourse.fulfilled, (state, action) => {
      state.course = action.payload
      state.courseStatus = 'fulfilled'
    }),
      builder.addCase(singleCourse.pending, (state, action) => {
        state.courseStatus = 'pending'
    })
  },

})


export const { searchText } = coursesSlice.actions
export default coursesSlice.reducer
