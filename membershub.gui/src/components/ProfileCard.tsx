import {ChangeEvent, useState} from "react";
import Paper from "@mui/material/Paper";
import {Avatar, Badge, Box, Button, IconButton, Typography} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import EditIcon from "@mui/icons-material/Edit";
import DoneIcon from "@mui/icons-material/Done";
import * as React from "react";
import '../styles/ProfileCardStyles.scss';

const ProfileCard = () => {
    const [isEditing, setIsEditing] = useState(false);
    const [name, setName] = useState('Jan Kowalski');
    const [email, setEmail] = useState('example@example.com');
    const [phoneNumber, setPhoneNumber] = useState('123-456-7890');

    const handleEditClick = () => {
        setIsEditing(true);
    };

    const handleNameChange = (event: ChangeEvent<HTMLInputElement>) => {
        setName(event.target.value);
    };

    const handleEmailChange = (event: ChangeEvent<HTMLInputElement>) => {
        setEmail(event.target.value);
    };

    const handlePhoneNumberChange = (event: ChangeEvent<HTMLInputElement>) => {
        setPhoneNumber(event.target.value);
    };

    const handleSave = () => {
        setIsEditing(false);
    };
    return (
        <Paper className="PaperContainer">
            <Box className="OuterBox">
                <Box className="MiddleBox">
                    <Box className="InnerBox">
                        <Typography className="MainText">
                            Jan Kowalski</Typography>
                        <IconButton>
                            <CloseIcon style={{width: 24, height: 24}}/>
                        </IconButton>
                    </Box>
                </Box>
                <Box className="AvatarOuterBox">
                        <Box className="AvatarMiddleBox">
                            <Box className="AvatarInnerBox">
                                <Avatar style={{width: 131, height: 131, borderRadius: 8, border: '1px #E2DFE2 solid'}}
                                        src="https://randomuser.me/api/portraits/men/40.jpg"/>
                                <Badge className="AvatarBadge">
                                    <Typography className="AvatarText">Aktywny</Typography>
                                </Badge>
                            </Box>
                                <Box className="TextsContainer">
                                    <Box className="AvatarPropBox">
                                        <Box style={{width: 261, position: 'relative',}}>
                                            <Typography className="AvatarTextField">Nazwa <br/></Typography>
                                            {isEditing ? (
                                                <input
                                                    type="text"
                                                    value={name}
                                                    onChange={handleNameChange}
                                                    className="InputStyle"
                                                />
                                            ) : (
                                                <Typography className="TypographyStyle">{name}</Typography>
                                            )}
                                        </Box>
                                        {!isEditing && (
                                            <IconButton onClick={handleEditClick}>
                                                <EditIcon style={{width: 24, height: 24}}/>
                                            </IconButton>
                                        )}
                                        {isEditing && (
                                            <IconButton onClick={handleSave}>
                                                <DoneIcon style={{width: 24, height: 24}}/>
                                            </IconButton>
                                        )}
                                    </Box>
                                    <Box className="AvatarPropBox">
                                        <Box style={{width: 261, position: 'relative',}}>
                                            <Typography className="AvatarTextField">Email <br/></Typography>
                                            {isEditing ? (
                                                <input
                                                    type="text"
                                                    value={name}
                                                    onChange={handleEmailChange}
                                                    className="InputStyle"
                                                />
                                            ) : (
                                                <Typography className="TypographyStyle">{email}</Typography>
                                            )}
                                        </Box>
                                        {!isEditing && (
                                            <IconButton onClick={handleEditClick}>
                                                <EditIcon style={{width: 24, height: 24}}/>
                                            </IconButton>
                                        )}
                                        {isEditing && (
                                            <IconButton onClick={handleSave}>
                                                <DoneIcon style={{width: 24, height: 24}}/>
                                            </IconButton>
                                        )}
                                    </Box>
                                    <Box className="AvatarPropBox">
                                        <Box style={{width: 261, position: 'relative',}}>
                                            <Typography className="AvatarTextField">Numer telefonu <br/></Typography>
                                            {isEditing ? (
                                                <input
                                                    type="text"
                                                    value={name}
                                                    onChange={handlePhoneNumberChange}
                                                    className="InputStyle"
                                                />
                                            ) : (
                                                <Typography className="TypographyStyle">{phoneNumber}</Typography>
                                            )}
                                        </Box>
                                        {!isEditing && (
                                            <IconButton onClick={handleEditClick}>
                                                <EditIcon style={{width: 24, height: 24}}/>
                                            </IconButton>
                                        )}
                                        {isEditing && (
                                            <IconButton onClick={handleSave}>
                                                <DoneIcon style={{width: 24, height: 24}}/>
                                            </IconButton>
                                        )}
                                    </Box>
                                    <Box className="AvatarPropBox">
                                        <Box style={{width: 261, position: 'relative',}}>
                                            <Typography className="AvatarTextField">Data utworzenia <br/></Typography>

                                                <Typography className="TypographyStyle">{name}</Typography>
                                        </Box>
                                    </Box>
                                </Box>
                        </Box>
                    </Box>
            </Box>
            <Box style={{
                alignSelf: 'stretch',
                display: 'inline-flex',
                justifyContent: 'flex-start',
                alignItems: 'flex-start',
                paddingTop: 10
            }}>
                <Button variant="outlined" style={{
                    width: '100%',
                    color: 'black',
                    borderColor: 'black',
                    background: '#FCFCFC',
                    boxShadow: '0px 1px 2px rgba(16, 24, 40, 0.05)',
                    borderRadius: 8,
                    overflow: 'hidden',
                    border: '1px #CFC9CF solid',
                    justifyContent: 'center',
                    alignItems: 'center',
                    gap: 8,
                    display: 'inline-flex'
                }} onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#F0F0F0'}
                        onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'transparent'}>Zamknij</Button>
            </Box>
        </Paper>
    );
}
export default ProfileCard