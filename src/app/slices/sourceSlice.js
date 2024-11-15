import api from "../constants/apipath";
import DomainNames from "../constants/DomainNames";
import ApiRequestCreator from "../util/requestFactory";
import { createSlice } from "@reduxjs/toolkit";

//----state---
const initialState = {
  sources: [
    {
      id: 1,
      name: "Интернет-магазин",
    },
  ],
  status: "idle",
  error: null,
};
//--------------

const sourceSlice = createSlice({
  name: DomainNames.source,
  initialState,
  reducers: {},
});

export function getSources(state) {
  return state[DomainNames.source].sources;
}

export function getStatsStatus(state) {
  return state[DomainNames.source].status;
}

export function getStatsError(state) {
  return state[DomainNames.source].error;
}

export default sourceSlice.reducer;
