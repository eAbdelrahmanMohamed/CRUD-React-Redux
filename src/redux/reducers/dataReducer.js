import { add, delet, edit } from "../actions/types";
import { Add, Delete, Edit } from "../actions/actions";

const dataReducer = (state = ["data test"], action) => {
    switch (action.type) {
        case add:
            //this is adding operation that takes the action payload which
            // contains input value and 
            //push it into the array after putting all prev values 
            return state = [...state, action.payload];
        case delet:
            //this is delete operation that removing the target index 
            //by filtering it from the array and return the other indexes 
            const filtered = state.filter(x => x != action.payload)
            return state = filtered;
        case edit:
            //this is the edit operation that takes the index "nubmer" of
            //the target value and repalce it with input value in the app
            state[state.indexOf(action.index)] = action.payload;
            return state = [...state];
        default:
            return state;
    }


}
export default dataReducer;