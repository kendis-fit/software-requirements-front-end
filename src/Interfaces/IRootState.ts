import IMenu from "./IMenu";
import IAlert from "./IAlert";
import IProfile from "./Profile/IIndex";
import IRequirement from "./IRequirement";
import IRequirementSelect from "./IRequirementSelect";

export default interface IRootState
{
    Menu: IMenu;
    Loader: {
        Profile: boolean;
        Requirements: boolean;
    };
    Alerts: IAlert[];
    Profile: IProfile[];
    SearchRequirement: string;
    Requirements: IRequirement[];
    Requirement: IRequirementSelect;
}