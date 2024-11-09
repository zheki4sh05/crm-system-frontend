import { createSlice } from "@reduxjs/toolkit";
import api from "../constants/apipath";
import DomainNames from "../constants/DomainNames";
import ApiRequestCreator from "../util/requestFactory";


//----state---
const initialState = {
    deals:[],
    status:'idle',
    error:null
}
//--------------


//----async reducers-----

    // ----init api factory----
      const apiFactory = new ApiRequestCreator(DomainNames.deal, api.deal.url);
    //--------------------

    //--- create----
    export   const createDeal = apiFactory.createPostRequest(api.deal.create)
    //----------------------

    //---update---
    export  const updateDeal = apiFactory.createPatchRequest(api.deal.update)
    //----------------------

    //---fetch---
    export  const fetchDeal = apiFactory.createGetRequest(api.deal.fetch)
    //----------------------




const dealSlice = createSlice({
    name: DomainNames.deal,
    initialState,
    reducers: {      
    },
    extraReducers(builder) {
      builder
      //---создание сделки-------------
        .addCase(createDeal.pending, (state, action) => {

          state.status = 'loading'
        })
        .addCase(createDeal.fulfilled, (state, action) => {
          state.status = 'succeeded';

          state.deals.push({...action.payload}) 

         
        })
        .addCase(createDeal.rejected, (state, action) => {
          state.status = 'failed';
          state.error = action.error.message
        })
        //----------------------------------------
      }
  })

  export function getDeals(state){
    return state[DomainNames.deal].deals;
}

export function getDealsStatus(state){
    return state[DomainNames.deal].status
  }

  export function getDealsError(state){
    return state[DomainNames.deal].error
  }


  export default dealSlice.reducer


