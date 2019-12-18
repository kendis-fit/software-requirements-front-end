import ERequirementWrite from "../Constants/Enumerations/ERequirementWrite";

export default interface IRequirement
{
    id: number;
    name: string;
    requirements: Array<IRequirement>;
    write: ERequirementWrite;
}