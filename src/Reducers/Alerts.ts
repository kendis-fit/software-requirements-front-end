import IAlert from "../Interfaces/IAlert";
import Action from "../Constants/Types/ActionReducer";
import { ADD_ALERT, REMOVE_ALERT } from "../Constants/Actions";

const initialState: Array<IAlert> = new Array<IAlert>(); 

type ActionType = 
    | Action<'ADD_NOTIFY', { value: IAlert }>
    | Action<'REMOVE_NOTIFY', { value: number }>

const Alerts = (state: Array<IAlert> = initialState, action: ActionType) => {
    switch (action.type)
    {
        case ADD_ALERT:
            state.push(action.value as IAlert);
            return [ ...state ];
        case REMOVE_ALERT:
            const id = action.value as number;
            state = state.filter(s => s.Id !== id);
            return [ ...state ];
        default:
            return state;
    }
}

export default Alerts;