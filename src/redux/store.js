import { legacy_createStore as createStore } from "redux";
import dataReducer from "./reducers/dataReducer";
const store = createStore(dataReducer)
export default store;