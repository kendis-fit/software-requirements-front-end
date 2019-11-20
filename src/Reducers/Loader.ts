import ActionType from "../Constants/Types/ActionReducer";
import { LOAD_REQUIREMENTS, LOAD_PROFILE } from "../Constants/Actions";

const initialState = {
    Profile: false,
    Requirements: false
};

type Action = 
    | ActionType<'LOAD_PROFILE', { value: boolean }>
    | ActionType<'LOAD_REQUIREMENTS', { value: boolean }>

const Loader = (state = initialState, action: Action) => {
    switch (action.type)
    {
        case LOAD_PROFILE:
            return { ...state, Profile: action.value };
        case LOAD_REQUIREMENTS:
            return { ...state, Requirements: action.value };
        default:
            return state;
    }
}

export default Loader;