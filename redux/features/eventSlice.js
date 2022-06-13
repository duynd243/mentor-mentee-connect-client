import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

// get all events
export const eventData = createAsyncThunk(
  'events/fetchEvents',
  async () => {
    const response = await fetch('https://obscure-shelf-38503.herokuapp.com/events')
    const data = response.json();
    return data;
  }
)
// singleEvent
export const singleEvent = createAsyncThunk(
  'event/fetchEvent',
  async (id = '6222ffacea7975d304c5b7b1') => {
    const response = await fetch(`https://obscure-shelf-38503.herokuapp.com/event/${id}`)
    const event = response.json();
    return event;
  }
)


export const eventSlice = createSlice({
  name: 'counter',
  initialState: {
    allEvents: [],
    event:{},
    status: '',
    eventStatus:'',
  },
  reducers: {
 
  },

  extraReducers: (builder) => {
    // all event
    builder.addCase(eventData.fulfilled, (state, action) => {
      state.allEvents = action.payload
      state.status = 'fulfilled'
    }),
      builder.addCase(eventData.pending, (state, action) => {
        state.status = 'pending'
    })
    // single event
    builder.addCase(singleEvent.fulfilled, (state, action) => {
      state.event = action.payload
      state.eventStatus = 'fulfilled'
    }),
      builder.addCase(singleEvent.pending, (state, action) => {
        state.eventStatus = 'pending'
    })
  },

})
// export const {  } = eventSlice.actions
export default eventSlice.reducer
