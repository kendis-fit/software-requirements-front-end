import IMenu from "../Interfaces/IMenu";
import { SHOW_MENU } from "../Constants/Actions";

export const ShowMenu = (menu: IMenu) => {
    return {
        type: SHOW_MENU,
        value: menu
    }
}