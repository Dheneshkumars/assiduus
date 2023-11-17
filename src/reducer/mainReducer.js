import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    loader:true,
    activemenu:'',
    activeAccount:'Priya',
    open:true
}

const mainReducer = createSlice({
    name:'mainReducer',
    initialState,
    reducers:{
        loaderAction:(state,action)=>{
            state.loader = action.payload;
        },
        actveMenuAction:(state,action)=>{
            state.activemenu = action.payload;
        },
        activeAccount : (state,action)=>{
            state.activeAccount = action.payload;
        },
        menuOpen : (state,action)=>{
            state.open = action.payload
        }
    }
})

const {reducer,actions} = mainReducer;

export const {loaderAction,activeAccount,actveMenuAction, menuOpen} = actions;

export default reducer;