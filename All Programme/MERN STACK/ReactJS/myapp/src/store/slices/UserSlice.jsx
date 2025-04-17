import {createSlice} from "@reduxjs/toolkit"

const userSlice = createSlice({
    name:"user",
    initialState:[],
    reducers:{
        addAllCows(state,action){
            // return action.payload;    // this is correct
            return state= action.payload; // this is correct

        },
        getAllCows(state,action){},
    }
})
// console.log(userSlice.actions)  // ||userSlice.actions|| reducers ke inside micro reducer ko access karta hai

export {userSlice};
export const {addAllCows} = userSlice.actions;