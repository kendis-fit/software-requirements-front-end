import React, { useState } from "react";

import { Input } from "../../Styles/Input";
import { Button } from "../../Styles/Button";
import { Modal, ModalHeader, ModalBody } from "../../Styles/Modal";
import { DarkBackgroundBlock, ControlBlock } from "../../Styles/Block";

import { Form } from "../../Styles/Form";
import EMenu from "../../../Constants/Enumerations/EMenu";
import IDisplayMenu from "../../../Interfaces/IDisplayMenu";
import ETypeColor from "../../../Constants/Enumerations/ETypeColor";
import { Wrapper } from "../../Styles/Wrapper";

const CreateProject = ({ ShowMenu }: IDisplayMenu) => {

    const [nameProject, setNameProject] = useState("");

    return(
        <Form onSubmit={e => { alert("AGA"); e.preventDefault(); }}> 
            <DarkBackgroundBlock onClick={() => ShowMenu({ Name: EMenu.NONE })}></DarkBackgroundBlock>
            <Modal data-close={false}>
                <ModalHeader data-close={false} Height="50px">
                    <Button Type={ETypeColor.SECONDARY} Rounde="3px" ReadOnly={false} TypeButton="button">Close</Button>
                    <strong data-close={false}>New project</strong>
                    <Button Type={ETypeColor.PRIMARY} Rounde="3px" ReadOnly={nameProject.length > 0 ? false : true} TypeButton="submit">Create</Button>
                </ModalHeader>
                <ModalBody data-close={false}>
                    <Wrapper data-close={false} Left="15px" Right="15px" Top="10px" Bottom="5px">
                        <label data-close={false}>Name project</label>
                    </Wrapper>
                    <Wrapper data-close={false} Left="15px" Right="15px">
                        <ControlBlock data-close={false} Type={ETypeColor.WHITE} Rounde="3px" Height="30px" Width="100%">
                            <Wrapper Top="2px">
                                <Input data-close={false} onChange={e => setNameProject(e.target.value)} type="text" />
                            </Wrapper>
                        </ControlBlock>
                    </Wrapper>
                </ModalBody>
            </Modal>
        </Form>
    );
}

export default CreateProject;