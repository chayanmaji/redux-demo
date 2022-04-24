import { createAction, createReducer, createSlice } from "@reduxjs/toolkit";


let lastId = 0;

const slice = createSlice({
    name : 'projects',
    initialState: [],
    reducers : {
        projectAdded : (projects, action) =>{
            projects.push({
                id : ++lastId,
                description : action.payload.description,
                resolved : false
            })
        },
        projectRemoved : (projects, action) => {
            const index = projects.findIndex(project => project.id == action.payload.id);
            if (index >= 0)
            {
                projects.splice(index, 1);
            }
        }            
    }
})

export const { projectAdded, projectRemoved } = slice.actions;

export default slice.reducer;