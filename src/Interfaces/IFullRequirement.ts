import IRequirement from "./IRequirement";

export default interface IFullRequirement
{
    Requirement: IRequirement;
    ParentId: number | null;
}