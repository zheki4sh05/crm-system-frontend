import api from "../constants/apipath";
import DomainNames from "../constants/DomainNames";
import ApiRequestCreator from "../util/requestFactory";
import { createSlice } from "@reduxjs/toolkit";

//----state---
const initialState = {
    documents:[{

      id:1,
      name:"Договор",
      description:"Описание договора",
      type:1,
      size:3874,
      date:1660926192826,
      format:"pdf"

    }],
    status:'idle',
    error:null,
    docTypes:[
      {
          id:1,
          name:"Договор"
      }
    ]
}
//--------------


//----async reducers-----

    // ----init api factory----
      const apiFactory = new ApiRequestCreator(DomainNames.documents, api.documents.url);
    //--------------------

    //--- upload----
    export   const uploadDocument = apiFactory.createPostRequest(api.documents.upload)
    //----------------------

    //---update---
    export  const updateDocument = apiFactory.createPatchRequest(api.documents.update)
    //----------------------

    //---fetch---
    export  const fetchDocument = apiFactory.createPatchRequest(api.documents.fetch)
    //----------------------




const documentsSlice = createSlice({
    name: DomainNames.documents,
    initialState,
    reducers: {      
    },
    extraReducers(builder) {
      builder
      //---создание документа -------------
        .addCase(uploadDocument.pending, (state, action) => {

          state.status = 'loading'
        })
        .addCase(uploadDocument.fulfilled, (state, action) => {
          state.status = 'succeeded';

          state.documents.push(action.payload)
         
        })
        .addCase(uploadDocument.rejected, (state, action) => {
          state.status = 'failed';
          state.error = action.error.message
        })
        //----------------------------------------
        //---получение документов-------------
        .addCase(fetchDocument.pending, (state, action) => {

            state.status = 'loading'
            })
            .addCase(fetchDocument.fulfilled, (state, action) => {
            state.status = 'succeeded';
    
            state.documents = action.payload
    
            
            })
            .addCase(fetchDocument.rejected, (state, action) => {
            state.status = 'failed';
            state.error = action.error.message
            })
            //----------------------------------------
            
            //---обновление документа-------------
            .addCase(updateDocument.pending, (state, action) => {
    
            state.status = 'loading'
            })
            .addCase(updateDocument.fulfilled, (state, action) => {
            state.status = 'succeeded';


            const { id,name,description,type,size,date,format } = action.payload
            const existing = state.documents.find(item => item.id === id)
            if (existing) {
              existing.id = id;
              existing.name = name;
              existing.description = description;
              existing.type = type;
              existing.size = size;
              existing.date = date;
              existing.format = format;
            }
      
         
            
            
            })
            .addCase(updateDocument.rejected, (state, action) => {
            state.status = 'failed';
            state.error = action.error.message
            })
            //----------------------------------------
      }
  })

  export function getDocs(state){
    return state[DomainNames.documents].documents;
}

export function getDocsTypes(state){
  return state[DomainNames.documents].docTypes;
}

export function getDocsStatus(state){
    return state[DomainNames.documents].status
  }

  export function getCompanyError(state){
    return state[DomainNames.documents].error
  }


  export default documentsSlice.reducer


