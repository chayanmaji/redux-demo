import { createStore } from 'redux';
import reducer from './projects';

const store = createStore(reducer);

export default function configureStore() {
    return store;
}
