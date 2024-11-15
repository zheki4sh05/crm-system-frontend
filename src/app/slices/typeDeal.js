import api from "../constants/apipath";
import DomainNames from "../constants/DomainNames";
import ApiRequestCreator from "../util/requestFactory";
import { createSlice } from "@reduxjs/toolkit";

//----state---
const initialState = {
    types:[ {
        id: "B2C",
        name: "B2C",
      },
      {
        id: "B2B",
        name: "B2B",
      },
      {
        id: "B2G",
        name: "B2G",
      },],
    status:'idle',
    error:null
}
//--------------



const dealTypesSlice = createSlice({
    name: DomainNames.type,
    initialState,
    reducers: {      
    },

      })

  export function getDealTypes(state){
    return state[DomainNames.type].types;
}

export function getStatsStatus(state){
    return state[DomainNames.type].status
  }

  export function getStatsError(state){
    return state[DomainNames.type].error
  }


  export default dealTypesSlice.reducer


