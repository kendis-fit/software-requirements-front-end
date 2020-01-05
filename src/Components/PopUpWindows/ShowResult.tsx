import React, { useState, useEffect } from "react";

import { Form } from "../Styles/Form";
import { DarkBackgroundBlock } from "../Styles/Block";
import { Modal, ModalHeader, ModalBody } from "../Styles/Modal";

import ProjectApi from "../../Api/ProjectApi";
import RequirementApi from "../../Api/RequirementApi";
import IRequirementSelect from "../../Interfaces/IRequirementSelect";

interface IShowResult
{
    Requirement?: IRequirementSelect;
}

const ShowResult = ({ Requirement }: IShowResult) => {
    
    const [result, setResult] = useState<string | null>(null);
    const [isLoad, setIsLoad] = useState<boolean>(true);

    useEffect(() => {
        
        if (Requirement && Requirement.Index && Requirement.Id) {

            const { Id, Index } = Requirement;

            (async () => {

                const json: string = Requirement.IsProject ? 
                    await ProjectApi.GetResult(Id, Index) :
                    await RequirementApi.GetResult(Id, Index)
                setResult(json);
                setIsLoad(false);
            })();
        }
    }, [Requirement]);


    return (
        <Form> 
            <DarkBackgroundBlock></DarkBackgroundBlock>
            <Modal data-close={false}>
                <ModalHeader data-close={false} Height="50px">Result</ModalHeader>
                <ModalBody data-close={false}>
                    {
                        isLoad ? "Loading..." : result
                    }
                </ModalBody>
            </Modal>
        </Form>
    );
}

export default ShowResult;