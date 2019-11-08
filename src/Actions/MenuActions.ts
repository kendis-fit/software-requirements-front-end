import EMenu from "../Enumerations/EMenu";
import { SHOW_MENU } from "../Constants/Actions";

export const ShowMenu = (name: EMenu) => {
    return {
        type: SHOW_MENU,
        value: name
    }
}