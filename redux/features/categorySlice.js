import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';


// categoryData
export const categoryData = createAsyncThunk(
  'category/fetchCategory',
  async (category = 'Category') => {
    const response = await fetch(`https://obscure-shelf-38503.herokuapp.com/category/${category}`)
    const data = response.json();
    return data;
  }
)


export const categorySlice = createSlice({
  name: 'counter',
  initialState: {
    categoryItems: [],
    status: '',
    category: ''
  },
  reducers: {
    setCategoryItem: (state, { payload }) => {
      state.category = payload
    },
  },

  extraReducers: (builder) => {
    builder.addCase(categoryData.fulfilled, (state, action) => {
      state.categoryItems = action.payload
      state.status = 'fulfilled'
    }),
      builder.addCase(categoryData.pending, (state, action) => {
        state.status = 'pending'
      })
  },

})

export const { setCategoryItem } = categorySlice.actions

export default categorySlice.reducer
