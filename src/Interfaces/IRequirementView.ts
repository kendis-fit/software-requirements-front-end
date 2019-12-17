import IRequirementLevel from "./IRequirementLevel";
import ERequirementWrite from "../Constants/Enumerations/ERequirementWrite";

export default interface IRequirementView extends IRequirementLevel
{
    Id: number;
    Name: string;
    Write: ERequirementWrite;
}