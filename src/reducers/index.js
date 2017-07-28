import { combineReducers } from 'redux';

import BooksReducer from './books';
import ActiveBookReducer from './activeBookReducer';

const rootReducer = combineReducers({
  books: BooksReducer,
  activeBook: ActiveBookReducer,
});

export default rootReducer;
