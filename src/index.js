import store from "./store";
import * as actions from './actionTypes';
import { bugAdded, bugResolved, bugRemoved } from './actions';

const unsubscribe = store.subscribe((value)=>{
    console.log('State changed', store.getState());
});

console.log('store', store);
console.log('Initial state', store.getState());

store.dispatch(bugAdded("Bug 1"));

store.dispatch(bugAdded("Bug 2"));

console.log('Current state, after bug created', store.getState());

store.dispatch(bugResolved(1));

store.dispatch(bugResolved(2));

console.log('Current state, after bug resolved', store.getState());

store.dispatch(bugRemoved(1));
store.dispatch(bugRemoved(2));

console.log('Current state, after bug removed', store.getState());

console.log('Store', store);