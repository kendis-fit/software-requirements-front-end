export default interface IRequirement
{
    Id: number;
    Name: string;
    Requirements: Array<IRequirement>;
}