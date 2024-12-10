import api from "../constants/apipath";
import DomainNames from "../constants/DomainNames";
import ApiRequestCreator from "../util/requestFactory";
import { createSlice } from "@reduxjs/toolkit";

//----state---
const initialState = {
    company:{
      id:0,
      name:"",
      description:"",
      key:""
    },
    status:'idle',
    error:null
}
//--------------


//----async reducers-----

    // ----init api factory----
      const apiFactory = new ApiRequestCreator(DomainNames.company, api.company.url);
    //--------------------

    //--- create----
    export   const createCompany = apiFactory.createPostRequest(api.company.create)
    //----------------------

    //---update---
    export  const updateCompany = apiFactory.createPatchRequest(api.company.update)
    //----------------------

    //---fetch---
    export  const fetchCompany = apiFactory.createGetRequest(api.company.fetch, false)
    //----------------------

       //---generate---
       const apiFactory2 = new ApiRequestCreator(DomainNames.key, api.api.url);
       export  const generateKey = apiFactory2.createPostRequest(api.api.generate)
       //----------------------




const companySlice = createSlice({
    name: DomainNames.company,
    initialState,
    reducers: {      
      controlCompanyStatus(state,action){
        state.status = action.payload
      }
    },
    extraReducers(builder) {
      builder
      //---создание компании -------------
        .addCase(createCompany.pending, (state, action) => {

          state.status = 'loading'
        })
        .addCase(createCompany.fulfilled, (state, action) => {
          state.status = 'succeeded';

          state.company = action.payload
         
        })
        .addCase(createCompany.rejected, (state, action) => {
          state.status = 'failed';
          state.error = action.error.message
        })
        //----------------------------------------
        //---получение компании-------------
        .addCase(fetchCompany.pending, (state, action) => {

            state.status = 'loading'
            })
            .addCase(fetchCompany.fulfilled, (state, action) => {
            state.status = 'succeeded';
    
            state.company = action.payload

            
            })
            .addCase(fetchCompany.rejected, (state, action) => {
            state.status = 'failed';
            state.error = action.error.message
            })
            //----------------------------------------
            
            //---обновление компании-------------
            .addCase(updateCompany.pending, (state, action) => {
    
            state.status = 'loading'
            })
            .addCase(updateCompany.fulfilled, (state, action) => {
            state.status = 'succeeded';
         
            state.company = action.payload        
            
            })
            .addCase(updateCompany.rejected, (state, action) => {
            state.status = 'failed';
            state.error = action.error.message
            })
            //----------------------------------------
               
            //---генерация ключа-------------
            .addCase(generateKey.pending, (state, action) => {
    
              state.status = 'loading'
              })
              .addCase(generateKey.fulfilled, (state, action) => {
              state.status = 'succeeded';
           
              state.company.key = action.payload        
              
              })
              .addCase(generateKey.rejected, (state, action) => {
              state.status = 'failed';
              state.error = action.error.message
              })
              //----------------------------------------
      }
  })

  export function getCompany(state){
    return state[DomainNames.company].company;
}

export function getCompanyStatus(state){
    return state[DomainNames.company].status
  }

  export function getCompanyError(state){
    return state[DomainNames.company].error
  }
  export const { controlCompanyStatus} = companySlice.actions

  export default companySlice.reducer


