import {combineReducers, legacy_createStore as createStore} from 'redux';
import housesReducer from "./housesReducer";
import reviewReducer from "./reviewReducer";
import materialReducer from "./materialReducer";
import usersReducer from './usersReducer';

let reducers = combineReducers({
    housesPage: housesReducer,
    reviewsPage:reviewReducer,
    materialPage:materialReducer,
    usersPage: usersReducer
});
let store = createStore(reducers);

export default store;