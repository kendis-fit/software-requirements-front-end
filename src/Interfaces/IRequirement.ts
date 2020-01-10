import ERequirementWrite from "../Constants/Enumerations/ERequirementWrite";

export default interface IRequirement
{
    id: number;
    name: string;
    requirements: IRequirement[];
    write: ERequirementWrite;
}