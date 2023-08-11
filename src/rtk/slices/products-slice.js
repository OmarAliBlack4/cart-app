import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";


export const apiProducts = createAsyncThunk('productsSlice/apiProducts', async ()=>{
    const res = await fetch('https://fakestoreapi.com/products');
    const data = await res.json();
    return data;
})

export const productsSlice = createSlice({
    name:'productsSlice',
    initialState:[],
    reducers :{},
    extraReducers:(builder)=>{
        builder.addCase(apiProducts.fulfilled,(state,action)=>{
            return action.payload
        })
        
    }
})

export const { } = productsSlice.actions

export default productsSlice.reducer