import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';

import rootReducers from '../reducers';

export const middlewares = [thunk];

const createStoreWithMiddlewares = applyMiddleware(...middlewares)(createStore);

const store = createStoreWithMiddlewares(rootReducers);

export default store;