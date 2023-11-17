import {configureStore} from "@reduxjs/toolkit";
import mainReducer from "./reducer/mainReducer";
const store = configureStore({
    reducer:{
        mainReducer : mainReducer
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({
        serializableCheck: false,
        immutableCheck: false
    })
})

export default store;