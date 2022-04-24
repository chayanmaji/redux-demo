import { createAction, createReducer, createSlice } from "@reduxjs/toolkit";

let lastId = 0;

const slice = createSlice({
    name : 'bugs',
    initialState: [],
    reducers : {
        bugAdded : (bugs, action) =>{
            bugs.push({
                id : ++lastId,
                description : action.payload.description,
                resolved : false
            })
        },
        bugResolved : (bugs, action) =>{
            const index = bugs.findIndex(bug => bug.id == action.payload.id);
            bugs[index].resolved = true ;
        },
        bugRemoved : (bugs, action) => {
            const index = bugs.findIndex(bug => bug.id == action.payload.id);
            if (index >= 0)
            {
                bugs.splice(index, 1);
            }
        }            
    }
})

export const { bugAdded, bugResolved, bugRemoved } = slice.actions;

export default slice.reducer;