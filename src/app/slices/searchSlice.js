import api from "../constants/apipath";
import DomainNames from "../constants/DomainNames";
import { createSlice } from "@reduxjs/toolkit";

//----state---
const initialState = {
    data:null,
    status:'idle',
    error:null
}
//--------------



const searchsSlice = createSlice({
    name: DomainNames.type,
    initialState,
    reducers: {   
        
        
        controlSearchStage(state, action) {
    
            state.status = action.payload
      
          },

          setSearcResult(state,action){
            state.data = action.payload
          },
          clearSearchedData(state, action) {
    
            state.data = []
      
          },

    },

      })

  export function getSearchResult(state){
    return state[DomainNames.search].data;
}

export function getSearchStatus(state){
    return state[DomainNames.search].status
  }

  export function getSearchError(state){
    return state[DomainNames.search].error
  }

  export const { controlSearchStage,setSearcResult,clearSearchedData } = searchsSlice.actions
  export default searchsSlice.reducer


