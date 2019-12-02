import { createStore } from 'redux';
import rootReducer from "./ducks/reducer";


const configStore = (initialState) => {
  const store = createStore(rootReducer, initialState);
  return store;
};

export default configStore;
