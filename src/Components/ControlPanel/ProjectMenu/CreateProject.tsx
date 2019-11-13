import { connect } from "react-redux";
import React, { useState } from "react";

import { Form } from "../../Styles/Form";
import { Input } from "../../Styles/Input";
import { Button } from "../../Styles/Button";
import { Wrapper } from "../../Styles/Wrapper";
import { Modal, ModalHeader, ModalBody } from "../../Styles/Modal";
import { DarkBackgroundBlock, Block } from "../../Styles/Block";

import EMenu from "../../../Constants/Enumerations/EMenu";
import IDisplayMenu from "../../../Interfaces/IDisplayMenu";
import ETypeColor from "../../../Constants/Enumerations/ETypeColor";

import ProjectApi from "../../../Api/ProjectApi";

interface ICreateProject extends IDisplayMenu
{
    CreateProject: (name: string) => void;
}

const CreateProject = ({ CreateProject, ShowMenu }: ICreateProject) => {

    const [nameProject, setNameProject] = useState("");

    return(
        <Form> 
            <DarkBackgroundBlock onClick={() => ShowMenu({ Name: EMenu.NONE })}></DarkBackgroundBlock>
            <Modal data-close={false}>
                <ModalHeader data-close={false} Height="50px">
                    <Button Type={ETypeColor.SECONDARY} Rounde="3px" ReadOnly={false} TypeButton="button">Close</Button>
                    <strong data-close={false}>New project</strong>
                    <Button Type={ETypeColor.PRIMARY} Rounde="3px" ReadOnly={nameProject.length > 0 ? false : true} TypeButton="button"
                        onClick={(): void => CreateProject(nameProject)}>Create</Button>
                </ModalHeader>
                <ModalBody data-close={false}>
                    <Wrapper data-close={false} Left="15px" Right="15px" Top="10px" Bottom="5px">
                        <label data-close={false}>Name project</label>
                    </Wrapper>
                    <Wrapper data-close={false} Left="15px" Right="15px">
                        <Block data-close={false} Type={ETypeColor.WHITE} Rounde="3px" Height="30px" Width="100%">
                            <Wrapper Top="2px">
                                <Input data-close={false} required onChange={e => setNameProject(e.target.value)} type="text" />
                            </Wrapper>
                        </Block>
                    </Wrapper>
                </ModalBody>
            </Modal>
        </Form>
    );
}

const mapDispatchToProps = (dispatch: any) => ({
    CreateProject: (name: string) => dispatch(ProjectApi.CreateProject(name))
});

export default connect(null, mapDispatchToProps)(CreateProject);