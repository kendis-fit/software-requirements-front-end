import ERequirementWrite from "../Constants/Enumerations/ERequirementWrite";

export default interface IRequirement
{
    Id: number;
    Name: string;
    Requirements: Array<IRequirement>;
    Write: ERequirementWrite;
}