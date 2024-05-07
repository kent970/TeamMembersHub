import {useState} from "react";
import Paper from "@mui/material/Paper";
import {Avatar, Box, Button, IconButton, Typography} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import DownloadingIcon from "@mui/icons-material/Downloading";
import EditIcon from "@mui/icons-material/Edit";
import * as React from "react";
import '../styles/NewTeamMemberCardStyles.scss';

const NewTeamMemberCard = () => {
    const [isEditing, setIsEditing] = useState(false);
    const [name, setName] = useState('Jan Kowalski');

    const handleEditClick = () => {
        setIsEditing(true);
    };

    const handleSave = () => {
        setIsEditing(false);
        // Perform save operation here
    };
    return (
        <Paper className="PaperContainer">
            <Box className="MainBoxContainer">
                <Box className="MiddleBoxContainer">
                    <Box className="InnerBoxContainer">
                        <Typography className="MainTypography">Dodawanie nowego członka zespołu</Typography>
                        <IconButton>
                            <CloseIcon style={{width: 24, height: 24}}/>
                        </IconButton>
                    </Box>
                    <Box>

                        <Typography className="SupportingTypography">
                            Wypełnij wszystkie pola lub pobierz z internetu
                        </Typography>
                    </Box>
                    <Box>
                        <Button startIcon={<DownloadingIcon/>} variant="outlined" className="MainButton"
                                onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#F0F0F0'}
                                onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'transparent'}>
                            Wypełnij formularz automatycznie
                        </Button>
                    </Box>

                </Box>
                <Box className="ParentBox">
                    <Box className="ChildBox">
                        <Box className="InnerBox">
                            <Avatar style={{width: 131, height: 131, borderRadius: 8, border: '1px #E2DFE2 solid'}}
                                    src=""/>

                        </Box>
                        <Box className="ParentTextBox">
                            <Box className="ChildTextBox">
                                <Box className="InnerTextBox">
                                    <Box style={{width: 261, position: 'relative',}}>
                                        <Typography className="DescriptionText">Nazwa * <br/></Typography>
                                        <input type="text" className="MainInput"/>
                                    </Box>
                                </Box>
                                <Box className="InnerTextBox">
                                    <Box style={{width: 261, position: 'relative',}}>
                                        <Typography className="DescriptionText">Email * <br/></Typography>
                                        <input type="text" className="MainInput"/>
                                    </Box>
                                </Box>
                                <Box className="InnerTextBox">
                                    <Box style={{width: 261, position: 'relative',}}>
                                        <Typography className="DescriptionText">Numer telefonu * <br/></Typography>
                                        <input type="text" className="MainInput"/>
                                    </Box>
                                </Box>

                            </Box>
                        </Box>
                    </Box>
                </Box>

            </Box>
            <Box className="ButtonContainer">
                <Button variant="outlined" className="LowerButton" style={{background: '#FCFCFC',}}
                        onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#F0F0F0'}
                        onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'transparent'}>Anuluj</Button>
                <Button variant="outlined" className="LowerButton" style={{background: '#F37521',}}
                        onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#c8611d'}
                        onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#F37521'}>Potwierdź</Button>
            </Box>
        </Paper>
    );
}
export default NewTeamMemberCard