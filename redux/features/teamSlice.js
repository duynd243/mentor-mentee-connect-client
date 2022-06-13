import {createAsyncThunk, createSlice } from '@reduxjs/toolkit';


// get all teams
export const teamData = createAsyncThunk(
    'team/fetchTeams',
    async () => {
      const response = await fetch('https://obscure-shelf-38503.herokuapp.com/teams')
      const data = response.json();
      return data;
    }
)
// single team
export const singleTeam = createAsyncThunk(
  'team/fetchTeam',
  async (id = '62231bdcea7975d304d117bf') => {
    const response = await fetch(`https://obscure-shelf-38503.herokuapp.com/team/${id}`)
    const event = response.json();
    return event;
  }
)


export const teamSlice = createSlice({
  name: 'counter',
  initialState:{
    allTeams: [],
    status:'',
    team:{},
    teamStatus:'',
  },
  reducers: {
   
  },

  extraReducers: (builder) => {
    builder.addCase(teamData.fulfilled, (state, action) => {
      state.allTeams = action.payload
      state.status = 'fulfilled'
    }),
    builder.addCase(teamData.pending, (state, action) => {
      state.status = 'pending'
    })
    // single team
    builder.addCase(singleTeam.fulfilled, (state, action) => {
      state.team = action.payload
      state.teamStatus = 'fulfilled'
    }),
      builder.addCase(singleTeam.pending, (state, action) => {
        state.teamStatus = 'pending'
    })
  },

})


// export const {  } = teamSlice.actions

export default teamSlice.reducer
