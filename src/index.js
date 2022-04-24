import configureStore from "./store/configureStore";
import { bugAdded, bugResolved, bugRemoved } from './store/bugs';
import { projectAdded, projectRemoved } from './store/projects';

const store = configureStore();

const unsubscribe = store.subscribe((value)=>{
    console.log('State changed', store.getState());
});

store.dispatch(projectAdded({ description : "Project 1"}));
store.dispatch(projectAdded({ description : "Project 2"}));



// store.dispatch(bugResolved({id : 1}));


store.dispatch(projectRemoved({id : 1}));


console.log('Store', store);