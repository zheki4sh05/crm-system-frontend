import DomainNames from "../constants/DomainNames";
import userSlice from './../slices/appUserSlice'
import companySlice from './../slices/companySlice';
import dealSlice from './../slices/dealSlice';
import stageSlice from './../slices/stagesSlice';
import statsSlice from './../slices/statsSlice';
import groupSlice from './../slices/groupsSlice'
import { configureStore } from "@reduxjs/toolkit";

export default configureStore({
    reducer:{
        [DomainNames.user]:userSlice,
        [DomainNames.company]:companySlice,
        [DomainNames.deal]:dealSlice,
        [DomainNames.groups]:groupSlice,
        [DomainNames.stages]:stageSlice,
        [DomainNames.stats]:statsSlice
        
    },
   
})