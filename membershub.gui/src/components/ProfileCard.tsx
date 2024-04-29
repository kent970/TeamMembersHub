import {ChangeEvent, useState} from "react";
import Paper from "@mui/material/Paper";
import {Avatar, Badge, Box, Button, IconButton, Typography} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import EditIcon from "@mui/icons-material/Edit";
import DoneIcon from "@mui/icons-material/Done";
import * as React from "react";

const ProfileCard = () => {
    const [isEditing, setIsEditing] = useState(false);
    const [name, setName] = useState('Jan Kowalski');

    const handleEditClick = () => {
        setIsEditing(true);
    };

    const handleNameChange = (event: ChangeEvent<HTMLInputElement>) => {
        setName(event.target.value);
    };

    const handleSave = () => {
        setIsEditing(false);
        // Perform save operation here
    };
    return (
        <Paper style={{
            width: 480,
            height: 307,
            padding: 16,
            background: '#FCFCFC',
            boxShadow: '0px 20px 24px -4px rgba(0, 0, 0, 0.08)',
            borderRadius: 8,
            border: '1px #CFC9CF solid',
            overflow: 'hidden',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'flex-start',
            alignItems: 'center',
            gap: 32
        }}>
            <Box style={{
                alignSelf: 'stretch',
                height: 214,
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'flex-start',
                alignItems: 'flex-start',
                gap: 16
            }}>
                <Box style={{
                    alignSelf: 'stretch',
                    height: 24,
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'flex-start',
                    alignItems: 'flex-start',
                    gap: 8
                }}>
                    <Box style={{
                        alignSelf: 'stretch',
                        display: 'inline-flex',
                        justifyContent: 'flex-start',
                        alignItems: 'flex-start',
                        gap: 8
                    }}>
                        <Typography style={{
                            flex: '1 1 0',
                            color: '#201D20',
                            fontSize: 18,
                            fontFamily: 'Inter, sans-serif',
                            fontWeight: '600',
                            wordWrap: 'break-word'
                        }}>Jan Kowalski</Typography>
                        <IconButton>
                            <CloseIcon style={{width: 24, height: 24}}/>
                        </IconButton>
                    </Box>
                </Box>
                <Box style={{
                    alignSelf: 'stretch',
                    height: 174,
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'flex-start',
                    alignItems: 'flex-start',
                    gap: 16
                }}>
                    <Box style={{
                        alignSelf: 'stretch',
                        height: 174,
                        paddingBottom: 16,
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'flex-start',
                        alignItems: 'flex-start',
                        gap: 32
                    }}>
                        <Box style={{
                            width: 445,
                            display: 'inline-flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                            gap: 16
                        }}>
                            <Box style={{
                                width: 131,
                                alignSelf: 'stretch',
                                display: 'inline-flex',
                                flexDirection: 'column',
                                justifyContent: 'center',
                                alignItems: 'center',
                                gap: 8,
                                borderRadius: 8,
                                overflow: 'hidden'
                            }}>
                                <Avatar style={{width: 131, height: 131, borderRadius: 8, border: '1px #E2DFE2 solid'}}
                                        src="https://randomuser.me/api/portraits/men/40.jpg"/>
                                <Badge style={{
                                    alignSelf: 'stretch',
                                    paddingLeft: 8,
                                    paddingRight: 8,
                                    paddingTop: 2,
                                    paddingBottom: 2,
                                    background: '#E7F7EB',
                                    borderRadius: 16,
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                    gap: 4,
                                    display: 'inline-flex'
                                }}>
                                    <Typography style={{
                                        textAlign: 'center',
                                        color: '#218141',
                                        fontSize: 12,
                                        fontFamily: 'Inter, sans-serif',
                                        fontWeight: '500',
                                        wordWrap: 'break-word'
                                    }}>Aktywny</Typography>
                                </Badge>
                            </Box>
                            <Box style={{
                                alignSelf: 'stretch',
                                display: 'inline-flex',
                                flexDirection: 'column',
                                justifyContent: 'center',
                                alignItems: 'center',
                                gap: 10
                            }}>
                                <Box style={{
                                    width: 287,
                                    flex: '1 1 0',
                                    flexDirection: 'column',
                                    justifyContent: 'flex-start',
                                    alignItems: 'flex-start',
                                    gap: 8,
                                    display: 'flex'
                                }}>
                                    <Box style={{
                                        alignSelf: 'stretch',
                                        justifyContent: 'flex-start',
                                        alignItems: 'center',
                                        gap: 2,
                                        display: 'inline-flex'
                                    }}>
                                        <Box style={{width: 261, position: 'relative',}}>
                                            <Typography style={{
                                                width: 261,
                                                height: 15,
                                                left: 0,
                                                top: 0,
                                                color: '#8B7E8B',
                                                fontSize: 12,
                                                fontFamily: 'Inter, sans-serif',
                                                fontWeight: '500',
                                                wordWrap: 'break-word'
                                            }}>Nazwa <br/></Typography>
                                            {isEditing ? (
                                                <input
                                                    type="text"
                                                    value={name}
                                                    onChange={handleNameChange}
                                                    style={{
                                                        width: 261,
                                                        height: 17,
                                                        left: 0,
                                                        top: 17,
                                                        color: '#201D20',
                                                        borderWidth: 1,
                                                        borderColor: '#aaaaaa',
                                                        borderStyle: 'solid',
                                                        fontSize: 14,
                                                        fontFamily: 'Inter, sans-serif',
                                                        fontWeight: '500',
                                                        wordWrap: 'break-word',
                                                        borderRadius: 8
                                                    }}
                                                />
                                            ) : (
                                                <Typography style={{
                                                    width: 261,
                                                    height: 17,
                                                    left: 0,
                                                    top: 17,
                                                    color: '#201D20',
                                                    fontSize: 14,
                                                    fontFamily: 'Inter, sans-serif',
                                                    fontWeight: '500',
                                                    wordWrap: 'break-word'
                                                }}>{name}</Typography>
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
                                    <Box style={{
                                        alignSelf: 'stretch',
                                        justifyContent: 'flex-start',
                                        alignItems: 'center',
                                        gap: 2,
                                        display: 'inline-flex'
                                    }}>
                                        <Box style={{width: 261, position: 'relative'}}>
                                            <Typography style={{
                                                width: 261,
                                                height: 15,
                                                left: 0,
                                                top: 0,
                                                color: '#8B7E8B',
                                                fontSize: 12,
                                                fontFamily: 'Inter, sans-serif',
                                                fontWeight: '500',
                                                wordWrap: 'break-word'
                                            }}>Adres e-mail <br/> <br/></Typography>
                                            <Typography style={{
                                                width: 261,
                                                height: 17,
                                                left: 0,
                                                top: 17,
                                                color: '#201D20',
                                                fontSize: 14,
                                                fontFamily: 'Inter, sans-serif',
                                                fontWeight: '500',
                                                wordWrap: 'break-word'
                                            }}>jan@kowalski.pl<br/></Typography>
                                        </Box>
                                        <IconButton>
                                            <EditIcon style={{width: 24, height: 24}}/>
                                        </IconButton>
                                    </Box>
                                    <Box style={{
                                        alignSelf: 'stretch',
                                        justifyContent: 'flex-start',
                                        alignItems: 'center',
                                        gap: 2,
                                        display: 'inline-flex'
                                    }}>
                                        <Box style={{width: 261, position: 'relative'}}>
                                            <Typography style={{
                                                width: 261,
                                                height: 15,
                                                left: 0,
                                                top: 0,
                                                color: '#8B7E8B',
                                                fontSize: 12,
                                                fontFamily: 'Inter, sans-serif',
                                                fontWeight: '500',
                                                wordWrap: 'break-word'
                                            }}>Nazwa <br/></Typography>
                                            <Typography style={{
                                                width: 261,
                                                height: 17,
                                                left: 0,
                                                top: 17,
                                                color: '#201D20',
                                                fontSize: 14,
                                                fontFamily: 'Inter, sans-serif',
                                                fontWeight: '500',
                                                wordWrap: 'break-word'
                                            }}>Jan Kowalski</Typography>
                                        </Box>
                                        <IconButton>
                                            <EditIcon style={{width: 24, height: 24}}/>
                                        </IconButton>
                                    </Box>
                                    <Box style={{
                                        alignSelf: 'stretch',
                                        justifyContent: 'flex-start',
                                        alignItems: 'center',
                                        gap: 2,
                                        display: 'inline-flex'
                                    }}>
                                        <Box style={{width: 261}}>
                                            <Typography style={{
                                                width: 261,
                                                height: 15,
                                                left: 0,
                                                top: 0,
                                                color: '#8B7E8B',
                                                fontSize: 12,
                                                fontFamily: 'Inter, sans-serif',
                                                fontWeight: '500',
                                                wordWrap: 'break-word'
                                            }}>Nazwa <br/></Typography>
                                            <Typography style={{
                                                width: 261,
                                                height: 17,
                                                left: 0,
                                                top: 17,
                                                color: '#201D20',
                                                fontSize: 14,
                                                fontFamily: 'Inter, sans-serif',
                                                fontWeight: '500',
                                                wordWrap: 'break-word'
                                            }}>Jan Kowalski</Typography>
                                        </Box>
                                    </Box>
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