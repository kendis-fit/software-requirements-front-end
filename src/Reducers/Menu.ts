import IMenu from "../Interfaces/IMenu";
import EMenu from "../Enumerations/EMenu";
import { SHOW_MENU } from "../Constants/Actions";

type Action<K, V = void> = V extends void ? { type: K } : { type: K } & V

const initialState: IMenu = {
    Name: EMenu.NONE
};

type ActionType = 
    | Action<'SHOW_MENU', { value: IMenu }>

const Menu = (state: IMenu = initialState, action: ActionType) => {
    if (action.value)
    console.log(action.value.Name.toString());
    switch (action.type)
    {
        case SHOW_MENU:
            return action.value;
        default:
            return state;
    }
}

export default Menu;