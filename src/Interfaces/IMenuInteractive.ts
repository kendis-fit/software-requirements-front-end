import IMenu from "./IMenu";
import IDisplayMenu from "./IDisplayMenu";

export default interface IMenuInteractive extends IDisplayMenu
{
    Menu: IMenu;
}