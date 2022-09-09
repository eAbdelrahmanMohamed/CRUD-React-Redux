import { add, delet, edit } from "../actions/types";
import { Add, Delete, Edit } from "../actions/actions";

const dataReducer = (state = ["data test"], action) => {
    switch (action.type) {
        case add:


            console.log(action.payload);

            return state = [...state, action.payload];
        case delet:
            const filtered = state.filter(x => x != action.payload)
            return state = filtered;
        case edit:
            state[state.indexOf(action.index)] = action.payload;
            return state = [...state];
        default:
            return state;
    }


}
export default dataReducer;