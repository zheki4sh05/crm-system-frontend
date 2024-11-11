import { createSlice } from "@reduxjs/toolkit";
import api from "../constants/apipath";
import DomainNames from "../constants/DomainNames";
import ApiRequestCreator from "../util/requestFactory";

//----state---
const initialState = {
  deals: [
    {
      id: 1,
      name: "Сделка 1",
      description: "Описание",
      stageId: 1,
      started: 1636647992345,
      customerDto: {
        id: 1,
        email: "email@mail.ru",
        name: "Иван",
        lastname: "Сидоров",
        address: "пр-т Пушкина 20",
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
      tasks:[]
    },
    {
      id: 2,
      name: "Сделка 2",
      description: "Описание",
      stageId: 1,
      started: 1636647992345,
      customerDto: {
        id: 1,
        email: "email@mail.ru",
        name: "Иван",
        lastname: "Сидоров",
        address: "пр-т Пушкина 20",
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
  status: "idle",
  error: null,
};
//--------------

//----async reducers-----

// ----init api factory----
const apiFactory = new ApiRequestCreator(DomainNames.deal, api.deal.url);
//--------------------

//--- create----
export const createDeal = apiFactory.createPostRequest(api.deal.create);
//----------------------

//---update---
export const updateDeal = apiFactory.createPatchRequest(api.deal.update);
//----------------------

//---fetch---
export const fetchDeal = apiFactory.createGetRequest(api.deal.fetch);
//----------------------

const dealSlice = createSlice({
  name: DomainNames.deal,
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      //---создание сделки-------------
      .addCase(createDeal.pending, (state, action) => {
        state.status = "loading";
      })
      .addCase(createDeal.fulfilled, (state, action) => {
        state.status = "succeeded";

        state.deals.push({ ...action.payload });
      })
      .addCase(createDeal.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
    //----------------------------------------
  },
});

export function getDeals(state) {
  return state[DomainNames.deal].deals;
}

export function getDealsStatus(state) {
  return state[DomainNames.deal].status;
}

export function getDealsError(state) {
  return state[DomainNames.deal].error;
}

export default dealSlice.reducer;
