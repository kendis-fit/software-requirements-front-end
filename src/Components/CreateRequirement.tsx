import React, { useState } from "react";

import { Form } from "./Styles/Form";
import { Input } from "./Styles/Input";
import { Button } from "./Styles/Button";
import { Wrapper } from "./Styles/Wrapper";
import { DarkBackgroundBlock, Block } from "./Styles/Block";
import { Modal, ModalHeader, ModalBody } from "./Styles/Modal";

import ETypeColor from "../Constants/Enumerations/ETypeColor";

interface ICreateRequirement
{
    CreateProject: (name: string, parentId?: number) => void;
    ParentId?: number;
}

const CreateRequirement = ({ CreateProject, ParentId }: ICreateRequirement) => {

    const [nameProject, setNameProject] = useState("");

    return(
        <Form> 
            <DarkBackgroundBlock></DarkBackgroundBlock>
            <Modal data-close={false}>
                <ModalHeader data-close={false} Height="50px">
                    <Button Type={ETypeColor.SECONDARY} Rounde="3px" ReadOnly={false} TypeButton="button">Close</Button>
                    <strong data-close={false}>New project</strong>
                    <Button Type={ETypeColor.PRIMARY} Rounde="3px" ReadOnly={nameProject.length > 0 ? false : true} TypeButton="button"
                        onClick={(): void => CreateProject(nameProject, ParentId)}>Create</Button>
                </ModalHeader>
                <ModalBody data-close={false}>
                    <label data-close={false} style={{ padding: "10px" }}>Name {ParentId ? "requirement" : "project"}</label>
                    <div style={{ padding: "0 10px 0 10px" }}>

                    <Block data-close={false} Type={ETypeColor.WHITE} Rounde="3px" Height="30px" Width="100%">
                        <Wrapper Top="2px">
                            <Input data-close={false} required onChange={e => setNameProject(e.target.value)} type="text" />
                        </Wrapper>
                    </Block>
                    </div>
                </ModalBody>
            </Modal>
        </Form>
    );
}

export default CreateRequirement;