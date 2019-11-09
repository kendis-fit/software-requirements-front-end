import EMenu from "../Enumerations/EMenu";
import IPosition from "../Interfaces/IPosition";

export default interface IMenu extends IPosition
{
    Name: EMenu;
}