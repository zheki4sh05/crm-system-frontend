import api from "../constants/apipath";
import DomainNames from "../constants/DomainNames";
import ApiRequestCreator from "../util/requestFactory";
import { createSlice } from "@reduxjs/toolkit";

//----state---
const initialState = {
    workers:[{
        id:1,
        name:"Евгений",
        lastname:"Шостак",
        surname:"Артурович",
        email:"eee@mail.ru",
        age:100,
        position:"Админ",
        phone:"+37521111111"
    },
    {
      id:2,
      name:"Иван",
      lastname:"Иванов",
      surname:"Иванович",
      email:"ivan@mail.ru",
      age:27,
      position:"Менеджер",
      phone:"+37521111111"
  }
  
  ],
    status:'idle',
    error:null
}
//--------------


//----async reducers-----

    // ----init api factory----
    const apiFactory = new ApiRequestCreator(DomainNames.workers, api.workers.url);
    //-------------------

    //---fetch---
    export const fetchWorkers = apiFactory.createGetRequest(api.workers.fetch, false)
    //----------------------




const workersSlice = createSlice({
    name: DomainNames.workers,
    initialState,
    reducers: {      
    },
    extraReducers(builder) {
      builder //---получение сотрудников-------------
      .addCase(fetchWorkers.pending, (state, action) => {

      state.status = 'loading'
      })
      .addCase(fetchWorkers.fulfilled, (state, action) => {
      state.status = 'succeeded';

      state.workers = action.payload

      
      })
      .addCase(fetchWorkers.rejected, (state, action) => {
      state.status = 'failed';
      state.error = action.error.message
      })
      //----------------------------------------
        
        }
      })

  export function getWorkers(state){
    return state[DomainNames.workers].workers;
}

export function getWorkersStatus(state){
    return state[DomainNames.workers].status
  }

  export function getWorkersError(state){
    return state[DomainNames.workers].error
  }


  export default workersSlice.reducer


