import EMenu from "../Enumerations/EMenu";
import { SHOW_MENU } from "../Constants/Actions";

type Action<K, V = void> = V extends void ? { type: K } : { type: K } & V

const initialState: EMenu = EMenu.NONE;

type ActionType = 
    | Action<'SHOW_MENU', { value: EMenu }>

const Menu = (state: EMenu = initialState, action: ActionType) => {

    switch (action.type)
    {
        case SHOW_MENU:
            return action.value;
        default:
            return state;
    }
}

export default Menu;