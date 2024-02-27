import {combineReducers, legacy_createStore as createStore} from 'redux';
import housesReducer from "./housesReducer";
import reviewReducer from "./reviewReducer";
import materialReducer from "./materialReducer";

let reducers = combineReducers({
    housesPage: housesReducer,
    reviewsPage:reviewReducer,
    materialPage:materialReducer
});
let store = createStore(reducers);

export default store;