import Chart from "chart.js";
import React, { useState, useEffect, createRef } from "react";

import { Form } from "../Styles/Form";
import { DarkBackgroundBlock } from "../Styles/Block";
import { Modal, ModalHeader, ModalBody } from "../Styles/Modal";

import ProjectApi from "../../Api/ProjectApi";
import RequirementApi from "../../Api/RequirementApi";
import IRequirementSelect from "../../Interfaces/IRequirementSelect";
import IProfileDiagramResult from "../../Interfaces/IProfileDiagramResult";

interface IShowDiagram
{
    Requirement?: IRequirementSelect;
}

const ShowDiagram = ({ Requirement }: IShowDiagram) => {
    
    const [isLoad, setIsLoad] = useState<boolean>(true);

    const canvas = createRef<HTMLCanvasElement>();

    useEffect(() => {

        const renderDiagram = (dataset: IProfileDiagramResult[]) => {

            if (!canvas.current) return;
    
            const ctx = canvas.current.getContext("2d");

            if (!ctx) return;

            const marksData = {
                labels: dataset.map(d => d.name),
                datasets: [{
                  label: "Requirement: test",
                  backgroundColor: "rgb(128, 255, 223, 0.75)",
                  data: dataset.map(d => d.value)
                }]
            };
               
            new Chart(ctx, {
                type: "radar",
                data: marksData
            });
        }
        
        if (Requirement && Requirement.Index && Requirement.Id) {

            const { Id, Index } = Requirement;

            (async () => {

                const json: IProfileDiagramResult[] = Requirement.IsProject ?
                    await ProjectApi.GetDiagram(Id, Index) : await RequirementApi.GetDiagram(Id, Index);
                if (json !== null)
                {
                    renderDiagram(json);
                    setIsLoad(false);
                }
            })();
        }
    }, [Requirement, canvas]);

    return (
        <Form> 
            <DarkBackgroundBlock></DarkBackgroundBlock>
            <Modal data-close={false} style={{ height: "300px", width: "600px" }}>
                <ModalHeader data-close={false} Height="50px">Chart</ModalHeader>
                <ModalBody data-close={false}>
                    {
                        isLoad ? "Loading..." : <canvas data-close={false} style={{ background: "white" }} ref={canvas}></canvas>
                    }
                </ModalBody>
            </Modal>
        </Form>
    );
}

export default ShowDiagram;