import IMenu from "../Interfaces/IMenu";
import EMenu from "../Constants/Enumerations/EMenu";
import Action from "../Constants/Types/ActionReducer";

import { SHOW_MENU } from "../Constants/Actions";

const initialState: IMenu = {
    Name: EMenu.NONE
};

type ActionType = 
    | Action<'SHOW_MENU', { value: IMenu }>

const Menu = (state: IMenu = initialState, action: ActionType) => {
    switch (action.type)
    {
        case SHOW_MENU:
            return action.value;
        default:
            return state;
    }
}

export default Menu;