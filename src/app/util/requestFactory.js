import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import getRequestConfig from "./requestConfig";
import addParams from "./addParams";


class ApiRequestCreator{

    constructor(domainName, url) {
        this.domainName = domainName;
        this.url = url;
      }

    createGetRequest(uri, withParms=false){

        let fullUrl = this.url.concat(uri)

        if(withParms){

              return  createAsyncThunk(this.domainName.concat(uri)  , async (initial) => {
                const response = await axios.get(fullUrl.concat(addParams(initial.data)),  getRequestConfig(initial.token));
                  return response.data
            })

        }else{
            return  createAsyncThunk(this.domainName.concat(uri)  , async (initial) => {
                const response = await axios.get(fullUrl,  getRequestConfig(initial.token));
                  return response.data
            })
        }

    }
    
    createPostRequest(uri){

        return  createAsyncThunk(this.domainName.concat(uri)  , async (initial) => {
            const response = await axios.post(this.url.concat(uri),initial.data,getRequestConfig(initial.token));
              return response.data
        })
    
    }
    
    createDeleteRequest(){
    
    }

    
    createPatchRequest(uri){
      return  createAsyncThunk(this.domainName.concat(uri)  , async (initial) => {
        const response = await axios.patch(this.url.concat(uri),initial.data,getRequestConfig(initial.token));
          return response.data
    })
    }

}

export default ApiRequestCreator;