import ERequirementWrite from "../Constants/Enumerations/ERequirementWrite";

export default interface IRequirementSelect
{
    Id: number | null;
    IsProject: boolean | null;
    Index: string | null;
    Write: ERequirementWrite | null;
}