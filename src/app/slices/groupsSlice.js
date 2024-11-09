import api from "../constants/apipath";
import DomainNames from "../constants/DomainNames";
import ApiRequestCreator from "../util/requestFactory";
import { createSlice } from "@reduxjs/toolkit";

const initData=[{
    id:1,
    name:"B2C",
    description:"Описание B2C",
    companyId:1,
    customerType:"B2C"
}]

//----state---
const initialState = {
    groups:initData,
    status:'idle',
    error:null
}
//--------------


//----async reducers-----

    // ----init api factory----
    const apiFactory = new ApiRequestCreator(DomainNames.groups, api.groups.url);
    //--------------------

    //--- create----
    export   const createGroup = apiFactory.createPostRequest(api.groups.create)
    //----------------------

    //---update---
    export   const updateGroup = apiFactory.createPatchRequest(api.groups.update)
    //----------------------

    //---fetch---
    export    const fetchGroups = apiFactory.createGetRequest(api.groups.fetchAll, true)
    //----------------------




const groupSlice = createSlice({
    name: DomainNames.groups,
    initialState,
    reducers: {      
    },
    extraReducers(builder) {
      builder
      //---создание группы-------------
        .addCase(createGroup.pending, (state, action) => {

          state.status = 'loading'
        })
        .addCase(createGroup.fulfilled, (state, action) => {
          state.status = 'succeeded';

          state.deals.push({...action.payload}) 

         
        })
        .addCase(createGroup.rejected, (state, action) => {
          state.status = 'failed';
          state.error = action.error.message
        })
        //----------------------------------------

        //---получение групп-------------
        .addCase(fetchGroups.pending, (state, action) => {

        state.status = 'loading'
        })
        .addCase(fetchGroups.fulfilled, (state, action) => {
        state.status = 'succeeded';

        state.groups.push({...action.payload}) 

        
        })
        .addCase(fetchGroups.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message
        })
        //----------------------------------------
        
        //---обновление группы-------------
        .addCase(updateGroup.pending, (state, action) => {

        state.status = 'loading'
        })
        .addCase(updateGroup.fulfilled, (state, action) => {
        state.status = 'succeeded';

        let groups =  state.groups.filter(item=>{item.id!==action.payload.id})

        state.groups=[...groups]

        state.groups.push(action.payload)
        })
        .addCase(updateGroup.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message
        })
        //----------------------------------------
        }
      })

  export function getGroups(state){
    return state[DomainNames.groups].groups;
}

export function getGroupsStatus(state){
    return state[DomainNames.groups].status
  }

  export function getGroupsError(state){
    return state[DomainNames.groups].error
  }


  export default groupSlice.reducer


