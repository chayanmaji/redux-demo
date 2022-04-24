import { createAction, createReducer, createSlice } from "@reduxjs/toolkit";
import { createSelector } from 'reselect';

let lastId = 0;

const slice = createSlice({
    name : 'bugs',
    initialState: [],
    reducers : {
        bugAssignedToUser : (bugs, action) => {
            const {bugId, userId} = action.payload;
            const index = bugs.findIndex(bug => bug.id === bugId);
            if (index >= 0)
            {
                bugs[index].userId = userId;
            }
        },
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

export const { bugAdded, bugResolved, bugRemoved, bugAssignedToUser } = slice.actions;

export default slice.reducer;

// export const getUnresolvedBugs = state => 
//     state.entities.bugs.filter(bug => !bug.resolved);
// export const getResolvedBugs = state => 
//     state.entities.bugs.filter(bug => bug.resolved);

export const getUnresolvedBugs = createSelector(
    state => state.entities.bugs,
    bugs => bugs.filter(bug => !bug.resolved)
);

export const getBugsByUser = userId => createSelector(
    state => state.entities.bugs,
    bugs => bugs.filter(bug => bug.userId == userId)
);

