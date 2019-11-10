export default interface IRequirement
{
    Id: Number;
    Name: string;
    Requirements: Array<IRequirement>;
}