import { createSlice } from "@reduxjs/toolkit";



export const cartSlice = createSlice({
    name:'cartSlice',
    initialState:[],
    reducers :{
        addToCart:(state, action)=>{
            const findProduct = state.find((product)=> product.id === action.payload.id)

            if(findProduct){
                findProduct.quantity += 1
            }else{
                const productClone = {...action.payload, quantity: 1}
                state.push(productClone)
            }

        },
        deleteFromCart:(state, action)=>{
            return state.filter((product)=> product.id !== action.payload.id)
        },
        clearFromCart:()=>{
            return [];
        },
    },

})


export const {addToCart, deleteFromCart, clearFromCart} = cartSlice.actions;

export default cartSlice.reducer;