import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

// all blogs get
export const blogData = createAsyncThunk(
  'blogs/fetchBlogs',
  async () => {
    const response = await fetch('https://obscure-shelf-38503.herokuapp.com/blog')
    const data = response.json();
    return data;
  }
)
// get single blog
export const singleBlog = createAsyncThunk(
  'event/fetchEvent',
  async (id = '62208badea7975d304d76830') => {
    const response = await fetch(`https://obscure-shelf-38503.herokuapp.com/blog/${id}`)
    const event = response.json();
    return event;
  }
)
// blogSlice
export const blogSlice = createSlice({
  name: 'blog',
  initialState: {
    allBlogs: [],
    status: '',
    blog: {},
    blogStatus: ''
  },
  reducers: {

  },

  extraReducers: (builder) => {
    builder.addCase(blogData.fulfilled, (state, action) => {
      state.allBlogs = action.payload
      state.status = 'fulfilled'
    }),
      builder.addCase(blogData.pending, (state, action) => {
        state.status = 'pending'
      })
    // single blog
    builder.addCase(singleBlog.fulfilled, (state, action) => {
      state.blog = action.payload
      state.blogStatus = 'fulfilled'
    }),
      builder.addCase(singleBlog.pending, (state, action) => {
        state.blogStatus = 'pending'
      })
  },

})

// export const {  } = blogSlice.actions

export default blogSlice.reducer
