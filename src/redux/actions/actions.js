import { add, delet, edit } from "./types"

const Add = (v) => {
    return {
        type: add,
        payload: v
    }
}

const Delete = (v) => {
    return {
        type: delet,
        payload: v
    }
}
const Edit = () => {
    return {
        type: edit
    }
}
export { Add, Delete, Edit }