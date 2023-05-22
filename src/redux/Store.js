import reducer from "./Reducer";
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

function configureStore() {
  return createStore(reducer,applyMiddleware(thunk));
}

export default configureStore;