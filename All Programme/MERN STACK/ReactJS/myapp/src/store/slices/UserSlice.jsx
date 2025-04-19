import {createSlice} from "@reduxjs/toolkit"

const userSlice = createSlice({
    name:"user",
    initialState:[],
    reducers:{
        addAllCows(state,action){
            // return action.payload;    // this is correct
            return state= action.payload; // this is correct

        },
        addAllMilk(state,action){
            return state = action.payload;         // jetebele dekhiba redux extension me action me data achhi sete bele taku state re add kariba
            // console.log(state);
        },
        addHealth(state,action){
            return state = action.payload; 
        }
    }
})
// console.log(userSlice.actions)  // ||userSlice.actions|| reducers ke inside micro reducer ko access karta hai

export {userSlice};
export const {addAllCows,addAllMilk,addHealth} = userSlice.actions;