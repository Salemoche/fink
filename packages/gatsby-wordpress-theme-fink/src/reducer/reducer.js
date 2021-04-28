import types from "./types"

export default ( state, action ) => {
    switch (action.type) {
        case types.SCROLL:
        return { ...state, scrollDist: action.value }
    }
}