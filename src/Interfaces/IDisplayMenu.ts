import IMenu from "./IMenu";

export default interface IDisplayMenu
{
    ShowMenu: (menu: IMenu) => void;
}