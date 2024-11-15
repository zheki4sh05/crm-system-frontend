import api from "../constants/apipath";
import DomainNames from "../constants/DomainNames";
import ApiRequestCreator from "../util/requestFactory";
import { createSlice } from "@reduxjs/toolkit";

//----state---
const initialState = {
    stats:{},
    status:'idle',
    error:null
}
//--------------


//----async reducers-----

    // ----init api factory----
    const apiFactory = new ApiRequestCreator(DomainNames.stats, api.stats.url);
    //-------------------

    //---fetch---
    export const fetchStats = apiFactory.createGetRequest(api.stats.fetch, true)
    //----------------------




const statsSlice = createSlice({
    name: DomainNames.stats,
    initialState,
    reducers: {      
    },
    extraReducers(builder) {
      builder


        //---получение статистики-------------
        .addCase(fetchStats.pending, (state, action) => {

        state.status = 'loading'
        })
        .addCase(fetchStats.fulfilled, (state, action) => {
        state.status = 'succeeded';

        state.stats = action.payload

        
        })
        .addCase(fetchStats.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message
        })
        //----------------------------------------
        }
      })

  export function getStats(state){
    return state[DomainNames.stats].stats;
}

export function getStatsStatus(state){
    return state[DomainNames.stats].status
  }

  export function getStatsError(state){
    return state[DomainNames.stats].error
  }


  export default statsSlice.reducer


