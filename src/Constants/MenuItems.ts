import IMenuItem from "../Interfaces/IMenuItem";

class MenuItem implements IMenuItem
{
    private name: string;

    public constructor(name: string)
    {
        this.name = name;
    }

    public get Name()
    {
        return this.name;
    }

    public Action(): void
    {

    }
}

const Menu: Array<MenuItem> = [];
Menu.push(new MenuItem("Project"));
Menu.push(new MenuItem("Settings"));
Menu.push(new MenuItem("About"));

export default Menu;