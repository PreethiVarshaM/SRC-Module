import React, { useState } from 'react'
//import { Grid } from '@mui/material';
//import Button from '@mui/material';
import { MainNav } from '../../App';

export default function Create() {
    const [agencyCode, setagencyCode] = useState("0");
    const [agencyName, setagencyName] = useState("default");
    const [projectName, setProjectName] = useState("default");
    const [projectID, setProjectID] = useState("default");
    const [projectType, setprojectType] = useState("default")
    const [organizationType, setorganizationType] = useState("default")
    const [sanctionValue, setsanctionValue] = useState(0)
    const [startDate, setStartDate] = useState()
    const [endDate, setEndDate] = useState()
    const [descriptionBox, setDescriptionBox] = useState("default text")

    function onSubmit() {
        console.log("Submitted")
        fetch("/created", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                projectName: projectName,
                projectID: projectID,
                projectType: projectType,
                agencyCode: agencyCode,
                agencyName: agencyName,
                organizationType: organizationType,
                sanctionValue: sanctionValue,
                startDate: startDate,
                endDate: endDate,
                descriptionBox: descriptionBox
            }),
        }).then((res) => {
            console.log("Res:", res);
        })
    }
    //console.alert("SubmittedValues: ", projectID, " ", projectName, " ", projectType, organizationType, agencyCode, agencyName, sanctionValue, startDate, endDate, descriptionBox)

    return (
        <div className="wrapper hover_collapse">
        <MainNav></MainNav>
            <div className="main_container">
                <div className="container">
                    <div class="card_project">
                        <form onSubmit={onSubmit()}>
                            <div class="form-row" style={{ marginTop: '150px' }}>
                                <div class="form-group col-md-4">
                                    <label for="agencyCode">Agency Code</label>
                                    <input type="text" class="form-control" id="agencyCode" value={agencyCode} placeholder="Agency Code" onChange={(event) => { setagencyCode(event.target.value) }} />
                                </div>
                                <div class="form-group col-md-4">
                                    <label for="agencyName">Agency Name</label>
                                    <input type="text" class="form-control" id="agencyName" value={agencyName} placeholder="Agency Name" onChange={(event) => { setagencyName(event.target.value) }} />
                                </div>
                                <div class="form-group col-md-4">
                                    <label for="organizationType">Organization Type</label>
                                    <input type="text" class="form-control" id="organizationType" value={organizationType} placeholder="Organization Type" onChange={(event) => { setorganizationType(event.target.value) }} />
                                </div>
                            </div>
                            <div class="form-row">
                                <div class="form-group col-md-4">
                                    <label for="projectName">project Name</label>
                                    <input type="text" class="form-control" id="projectName" value={projectName} placeholder="Project Name" onChange={(event) => { setProjectName(event.target.value) }} />
                                </div>
                                <div class="form-group col-md-4">
                                    <label for="projectID">Project ID</label>
                                    <input type="text" class="form-control" id="projectID" value={projectID} placeholder="Project ID" onChange={(event) => { setProjectID(event.target.value) }} />
                                </div>
                                <div class="form-group col-md-4">
                                    <label for="projectType">Project Type</label>
                                    <input type="text" class="form-control" id="projectType" value={projectType} placeholder="Project Type" onChange={(event) => { setprojectType(event.target.value) }} />
                                </div>
                            </div>
                            <div class="form-row">
                                <div class="form-group col-md-4">
                                    <label for="sanctionValue">Sanction Value</label>
                                    <input type="text" class="form-control" id="sanctionValue" value={sanctionValue} placeholder="Sanction Value" onChange={(event) => { setsanctionValue(event.target.value) }} />
                                </div>
                                <div class="form-group col-md-4">
                                    <label for="startDate">Start Date</label>
                                    <input type="date" class="form-control" id="startDate" value={startDate} placeholder="Start Date" onChange={(event) => { setStartDate(event.target.value) }} />
                                </div>
                                <div class="form-group col-md-4">
                                    <label for="endDate">End date</label>
                                    <input type="date" class="form-control" id="endDate" value={endDate} placeholder="End Date" onChange={(event) => { setEndDate(event.target.value) }} />
                                </div>
                            </div>
                            <div class="form-row">
                                <div class="form-group col-md-4">
                                    <label for="descriptionBox">Scope and Objective of the Project</label>
                                    <textarea type="text" class="form-control" rows="5" id="descriptionBox" value={descriptionBox} placeholder="Description" onChange={(event) => { setDescriptionBox(event.target.value) }} />
                                </div>
                            </div>
                            <div class="form-group col-md-4" style={{ marginTop: '50px', }}>
                                <button type="submit" class="btn btn-primary">Create</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}
// comment