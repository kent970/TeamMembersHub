import {Box, Button, Modal} from "@mui/material";
import CloudDownloadIcon from "@mui/icons-material/CloudDownload";
import AddIcon from "@mui/icons-material/Add";
import * as React from "react";
import '../styles/TableHeadComponentStyles.scss';
import NewTeamMemberCard from "./NewTeamMemberCard";

const TableHeadComponent = () => {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);


    return (
        <div className="Mainframe">
            <div className="Toptitleframe">
                <div className="Titletext">Lista członków zespołu</div>
                <div className="Supportingtext">Zarządzaj listą członków swojego zespołu</div>
            </div>
            <Button href="#contained-buttons" className="ButtonContainer">
                <div className="ButtonFrame">
                    <CloudDownloadIcon className="Icon"/>
                    <div className="ButtonText">Zaimportuj członka zespołu</div>
                </div>
            </Button>
            <Button href="#contained-buttons" className="ButtonContainer" onClick={handleOpen}>
                <div className="ButtonFrame">
                    <AddIcon className="Icon"/>
                    <div className="ButtonText">Dodaj członka zespołu</div>
                </div>
            </Button>
            <Modal
                open={open}
                onClose={handleClose}
                style={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center'
                }}>
                <Box>
                    <NewTeamMemberCard/>
                </Box>
            </Modal>
        </div>
    )
}

export default TableHeadComponent;
