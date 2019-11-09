import IMenu from "./IMenu";

export default interface IMenuInteractive
{
    Menu: IMenu;
    ShowMenu: (menu: IMenu) => void;
}