import configureStore from "./store/configureStore";
import { bugAdded, bugResolved, bugRemoved, 
    getUnresolvedBugs, getResolvedBugs, bugAssignedToUser, getBugsByUser } from './store/bugs';
import { projectAdded, projectRemoved } from './store/projects';
import { userAdded } from './store/users';

const store = configureStore();
// store.dispatch((dispatch, getState)=>{
//     //dispatch({type: 'bugReceived', bugs : [ 1, 2, 3]});
//     dispatch({ type:"error", payload : { message : 'An error occured.' } });
// });
store.dispatch({ type:"error", payload : { message : 'An error occured.' } });

// const unsubscribe = store.subscribe(()=>{
//     console.log('State changed', store.getState());
// });

store.dispatch(userAdded({ name : "User 1" }));
store.dispatch(userAdded({ name : "User 2" }));
// store.dispatch(bugAdded({ description : "Bug 1" }));
// store.dispatch(bugAdded({ description : "Bug 2" }));
// store.dispatch(bugAdded({ description : "Bug 3" }));
// store.dispatch(bugAdded({ description : "Bug 4" }));
// store.dispatch(bugAssignedToUser({ bugId : 1, userId : 1 }));
// store.dispatch(bugAssignedToUser({ bugId : 2, userId : 1 }));
// store.dispatch(bugAssignedToUser({ bugId : 3, userId : 2 }));
// store.dispatch(bugAssignedToUser({ bugId : 4, userId : 2 }));
// store.dispatch(bugResolved({ id : 1 }));
// store.dispatch(projectAdded({ description : "Project 1"}));
// store.dispatch(projectAdded({ description : "Project 2"}));

// store.dispatch(bugResolved({id : 1}));
// store.dispatch(projectRemoved({id : 1}));
console.log('Store', store);

const x = getUnresolvedBugs(store.getState());
const y = getUnresolvedBugs(store.getState());
const assignedBugs = getBugsByUser(1)(store.getState());
console.log('assignedBugs', assignedBugs);
console.log(x === y);
console.log('Current State', store.getState());
