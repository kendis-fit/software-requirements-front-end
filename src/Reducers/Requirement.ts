import { SET_REQUIREMENT } from "../Constants/Actions";

import Action from "../Constants/Types/ActionReducer";

type ActionType = 
    | Action<'SET_REQUIREMENT', { value: number | null }>

const Requirement = (state: number | null = null, action: ActionType) => {
    switch (action.type)
    {
        case SET_REQUIREMENT:
            return action.value;
        default:
            return state;
    }
}

export default Requirement;