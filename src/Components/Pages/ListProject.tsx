import React from "react";
import Config from "../../Constants/Config";

interface IProps {}

interface IProject
{
    id: number;
    name: string;
}

interface IListProject
{
    Projects: IProject[];
}

export default class ListProject extends React.Component<IProps, IListProject>
{
    constructor(props: IProps)
    {
        super(props);
        this.state = {
            Projects: []
        }
    }

    async componentDidMount()
    {
        const response = await fetch(`${Config.Url}/Projects`);
        if (response.ok)
        {
            const json = await response.json();

            this.setState({
                Projects: json
            });
        }
        else
        {
            alert("Server doesn't work or another error!");
        }
    }

    selectProject(id: number)
    {
        localStorage["projectsId"] = JSON.stringify([id]);
        window.location.href = "/";
    }

    render()
    {
        return(
            <table className="table table-striped">
                <thead>
                    <tr>
                        <th>Name</th>
                    </tr>
                </thead>
                <tbody style={{ cursor: "pointer" }}>
                    {
                        this.state.Projects.map((project, key) => <tr onClick={() => this.selectProject(project.id)} key={key}><td>{project.name}</td></tr>)
                    }
                </tbody>
            </table>
        )
    }
}