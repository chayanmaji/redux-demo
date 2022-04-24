import { createStore } from 'redux';
import reducer from './reducer';

const store = createStore(reducer);

export default function configureStore() {
    return store;
}
