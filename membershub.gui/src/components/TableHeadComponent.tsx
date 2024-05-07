import {Box, Button, Modal} from "@mui/material";
import CloudDownloadIcon from "@mui/icons-material/CloudDownload";
import AddIcon from "@mui/icons-material/Add";
import * as React from "react";
import '../styles/TableHeadComponentStyles.scss';
import NewTeamMemberCard from "./NewTeamMemberCard";
import useAddRandomUser from "../hooks/useAddRandomUser";
import {useDispatch} from "react-redux";
import {fetchTeamMembers} from "../utils/actions";

const TableHeadComponent = () => {
    const [openNewTeamMemberCard, setOpenNewTeamMemberCard] = React.useState(false);
    const handleOpenNewTeamMemberCard = () => setOpenNewTeamMemberCard(true);
    const handleCloseNewTeamMemberCard = () => setOpenNewTeamMemberCard(false);
    const { loading, error, success, handleAdd } = useAddRandomUser();
    const dispatch = useDispatch();
    const handleAddRandomUser = () => {
        handleAdd();
        fetchTeamMembers();
    }


    return (
        <div className="Mainframe">
            <div className="Toptitleframe">
                <div className="Titletext">Lista członków zespołu</div>
                <div className="Supportingtext">Zarządzaj listą członków swojego zespołu</div>
            </div>
            <Button href="#contained-buttons" className="ButtonContainer" onClick={handleAddRandomUser}>
                <div className="ButtonFrame">
                    <CloudDownloadIcon className="Icon"/>
                    <div className="ButtonText">Zaimportuj członka zespołu</div>
                </div>
            </Button>
            <Button href="#contained-buttons" className="ButtonContainer" onClick={handleOpenNewTeamMemberCard}>
                <div className="ButtonFrame">
                    <AddIcon className="Icon"/>
                    <div className="ButtonText">Dodaj członka zespołu</div>
                </div>
            </Button>
            <Modal
                open={openNewTeamMemberCard}
                onClose={handleCloseNewTeamMemberCard}
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
