import { configureStore } from "@reduxjs/toolkit";
import { userSlice } from "./slices/UserSlice";

const store = configureStore({   //configureStore can access only one object 
    reducer : {      //reducer is a compalsary au kichi use habani reducer ke bina

        cowsData :  userSlice.reducer,
        // CowData :userSlice.reducer,      // multiple slices can be added here
    },
    

})

export default store;