import api from "../constants/apipath";
import DomainNames from "../constants/DomainNames";
import { createSlice } from "@reduxjs/toolkit";
import ApiRequestCreator from "../util/requestFactory";

//----state---
const initialState = {
    data:[
      
      {
        id: 1,
        name: "Сделка 1",
        description: "Описание",
        stageId: 1,
        started: 1636647992345,
        organizationName:"",
        worker:1,
        customerDto: {
          id: 1,
          email: "email@mail.ru",
          surname:"Отчество",
          name: "Иван",
          lastname: "Сидоров",
          address: "пр-т Пушкина 20",
           phone:"+37534923981"
        },
        orderList: [
          {
            id: 1,
            name: "Товар",
            count: 10,
            code: "093576908567",
            dealId: 1,
            price: 10.5,
          },
        ],
        tasks:[{
  
          id:1,
          name:"Новая задача",
          deal:1,
          worker:1,
          is_done:false,
          start:1636647992345,
          finishAt:1636647992400,
  
        }]
      },
      {
        id: 2,
        name: "Сделка 2",
        description: "Описание",
        stageId: 1,
        started: 1636647992345,
        organizationName:"",
        customerDto: {
          id: 1,
          email: "email@mail.ru",
          name: "Иван",
          lastname: "Сидоров",
          surname:"Отчество",
          address: "пр-т Пушкина 20",
          phone:"+37534923981"
        },
        orderList: [
          {
            id: 1,
            name: "Товар",
            count: 20,
            code: "093576908567",
            dealId: 1,
            price: 10.5,
          },
        ],
        tasks:[]
      },

    ],
    type:"",
    status:'idle',
    error:null
}
//--------------

  // ----init api factory----
  const apiFactory = new ApiRequestCreator(DomainNames.search, api.search.url);
  //--------------------

//---fetch---
export const fetchResult = apiFactory.createGetRequest(api.search.fetch,true);
//----------------------


const searchsSlice = createSlice({
    name: DomainNames.search,
    initialState,
    reducers: {   
        setSearchType(state, action){
          state.type = action.payload
        },
        
        controlSearchStage(state, action) {
    
            state.status = action.payload
              },

          setSearcResult(state,action){
            state.data = action.payload
          },
          clearSearchedData(state, action) {
    
            state.data = []
            state.status='idle'
            state.type=""
            state.error=null
      
          },

    },
    extraReducers(builder) {
      builder
      //---создание компании -------------
        .addCase(fetchResult.pending, (state, action) => {

          state.status = 'loading'
        })
        .addCase(fetchResult.fulfilled, (state, action) => {
          state.status = 'succeeded';

          state.data = action.payload
         
        })
        .addCase(fetchResult.rejected, (state, action) => {
          state.status = 'failed';
          state.error = action.error.message
        })
        //----------------------------------------
     
         
      }

      })

  export function getSearchResult(state){
    return state[DomainNames.search].data;
}

export function getSearchStatus(state){
    return state[DomainNames.search].status
  }
  export function getSearchType(state){
    return state[DomainNames.search].type
  }

  export function getSearchError(state){
    return state[DomainNames.search].error
  }

  export const { controlSearchStage,setSearcResult,clearSearchedData,setSearchType } = searchsSlice.actions
  export default searchsSlice.reducer


