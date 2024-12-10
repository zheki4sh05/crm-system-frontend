import api from "../constants/apipath";
import DomainNames from "../constants/DomainNames";
import statusTypes from "../constants/statusTypes";
import ApiRequestCreator from "../util/requestFactory";

import { createSlice } from "@reduxjs/toolkit";
//----state---
const initialState = {
    user:{
      email:"onlforward05@mail.ru",
      name:'name',
      lastname:"sdcisdlc",
      token:"eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJvbmxmb3J3YXJkMDVAbWFpbC5ydSIsImlhdCI6MTczMzg2MDMzNiwiZXhwIjoxNzMzODY0NjU2fQ.L52fc21k2pDOtEGqcOcJcoJKqDIhyEl8cfqZVPCoIuo"
    },
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
      controlStatus(state,action){
        state.status = action.payload
      }
    },
    extraReducers(builder) {
      builder
       //---данные пользователя -------------
       .addCase(fetchUser.pending, (state, action) => {

        state.status = 'loading'
      })
      .addCase(fetchUser.fulfilled, (state, action) => {
        state.status = 'succeeded';

        state.company = action.payload
       
      })
      .addCase(fetchUser.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message
      })
      //----------------------------------------
   
      }
  })

  export function getUserData(state){
    return state[DomainNames.user].user
  }
  export function getToken(state){
    return state[DomainNames.user].user.token
  }
  export function getUserStatus(state){
    return state[DomainNames.user].status
  }

  export const { controlStatus} = userSlice.actions


  export default userSlice.reducer


