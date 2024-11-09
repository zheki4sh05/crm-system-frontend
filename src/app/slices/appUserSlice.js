import api from "../constants/apipath";
import DomainNames from "../constants/DomainNames";
import ApiRequestCreator from "../util/requestFactory";

import { createSlice } from "@reduxjs/toolkit";
//----state---
const initialState = {
    user:{},
    status:'idle',
    error:null
}
//--------------


//----async reducers-----

    // ----init api factory----
      const apiFactory = new ApiRequestCreator(DomainNames.user, api.user.url);
    //--------------------

    //--- create----
    export   const signup = apiFactory.createPostRequest(api.user.create)
    //----------------------

    //---update---
    export  const updateUser = apiFactory.createPatchRequest(api.user.update)
    //----------------------

    //---fetch---
    export  const fetchUser = apiFactory.createGetRequest(api.user.fetch)
    //----------------------


const userSlice = createSlice({
    name: DomainNames.user,
    initialState,
    reducers: {      
    },
    extraReducers(builder) {
      builder
   
      }
  })

  export function getUserData(state){
    return state[DomainNames.user].user
  }
  export function getUserStatus(state){
    return state[DomainNames.user].status
  }


  export default userSlice.reducer


