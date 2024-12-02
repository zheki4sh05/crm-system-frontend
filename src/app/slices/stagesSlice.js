import api from "../constants/apipath";
import DomainNames from "../constants/DomainNames";
import statusTypes from "../constants/statusTypes";
import ApiRequestCreator from "../util/requestFactory";
import { createSlice } from "@reduxjs/toolkit";

//----state---
const initialState = {
  stages: [
    {
      id: 1,
      name: "Стадия 1",
      description: "Описание стадии 1",
      companyId: 1,
      groupId: 1,
      order: 1,
    },
    {
      id: 2,
      name: "Стадия 2",
      description: "Описание стадии 2",
      companyId: 1,
      groupId: 1,
      order: 2,
    },
  ],
  status: "idle",
  error: null,
};
//--------------

//----async reducers-----

// ----init api factory----
const apiFactory = new ApiRequestCreator(DomainNames.stages, api.stages.url);
//--------------------

//--- create----
export const createStage = apiFactory.createPostRequest(api.stages.create);
//----------------------

//---update---
export const updateStage = apiFactory.createPatchRequest(api.stages.update);
//----------------------

//---fetch---
export const fetchStages = apiFactory.createGetRequest(
  api.stages.fetchAll,
  true
);
//----------------------

const stageSlice = createSlice({
  name: DomainNames.stages,
  initialState,
  reducers: {

    resetStagessStatus(state,action){
      state.status = statusTypes.idle
    }

  },
  extraReducers(builder) {
    builder
      //---создание стадии-------------
      .addCase(createStage.pending, (state, action) => {
        state.status = "loading";
      })
      .addCase(createStage.fulfilled, (state, action) => {
        state.status = "succeeded";

        state.stages.push({ ...action.payload });
      })
      .addCase(createStage.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      })
      //----------------------------------------

      //---получение стадий-------------
      .addCase(fetchStages.pending, (state, action) => {
        state.status = "loading";
      })
      .addCase(fetchStages.fulfilled, (state, action) => {
        state.status = "succeeded";

        state.stages = [...action.payload];
      })
      .addCase(fetchStages.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      })
      //----------------------------------------

      //---обновление стадии-------------
      .addCase(updateStage.pending, (state, action) => {
        state.status = "loading";
      })
      .addCase(updateStage.fulfilled, (state, action) => {
        state.status = "succeeded";

        let stages = state.stages.filter((item) => {
          item.id !== action.payload.id;
        });

        state.stages = [...stages];

        state.stages.push(action.payload);
      })
      .addCase(updateStage.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
    //----------------------------------------
  },
});

export function getStages(state) {
  return state[DomainNames.stages].stages;
}

export function getStagesStatus(state) {
  return state[DomainNames.stages].status;
}

export function getStagesError(state) {
  return state[DomainNames.stages].error;
}

export const {resetStagessStatus} = stageSlice.actions

export default stageSlice.reducer;
