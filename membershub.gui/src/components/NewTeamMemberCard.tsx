import {useState} from "react";
import Paper from "@mui/material/Paper";
import {Avatar, Box, Button, IconButton, Typography} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import DownloadingIcon from "@mui/icons-material/Downloading";
import EditIcon from "@mui/icons-material/Edit";
import * as React from "react";

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
            gap: 32,
        }}>
            <Box style={{
                alignSelf: 'stretch',
                height: 214,
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'flex-start',
                alignItems: 'flex-start',
                gap: 90
            }}>
                <Box style={{
                    alignSelf: 'stretch',
                    height: 24,
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'flex-start',
                    alignItems: 'flex-start',


                }}>
                    <Box style={{
                        alignSelf: 'stretch',
                        display: 'inline-flex',
                        justifyContent: 'flex-start',
                        alignItems: 'flex-start',


                    }}>
                        <Typography style={{
                            flex: '1 1 0',
                            color: '#201D20',
                            fontSize: 18,
                            fontFamily: 'Inter, sans-serif',
                            fontWeight: '600',
                            wordWrap: 'break-word'
                        }}>Dodawanie nowego członka zespołu</Typography>
                        <IconButton>
                            <CloseIcon style={{width: 24, height: 24}}/>
                        </IconButton>
                    </Box>
                    <Box>

                        <Typography style={{
                            width: 448,
                            color: '#8B7E8B',
                            fontSize: 14,
                            fontFamily: 'Inter',
                            fontWeight: '400',
                            wordWrap: 'break-word'
                        }}>Wypełnij wszystkie pola lub pobierz z internetu</Typography>
                    </Box>
                    <Box>
                        <Button startIcon={<DownloadingIcon/>} variant="outlined" style={{
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
                            display: 'inline-flex'
                        }} onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#F0F0F0'}
                                onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'transparent'}>Wypełnij formularz automatycznie</Button>
                    </Box>

                </Box>
                <Box style={{
                    alignSelf: 'stretch',
                    height: 174,
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'flex-start',
                    alignItems: 'flex-start',

                }}>
                    <Box style={{
                        alignSelf: 'stretch',
                        height: 174,
                        paddingBottom: 16,
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'flex-start',
                        alignItems: 'flex-start',
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
                                        src=""/>

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

                                                color: '#8B7E8B',
                                                fontSize: 12,
                                                fontFamily: 'Inter, sans-serif',
                                                fontWeight: '500',
                                                wordWrap: 'break-word',
                                                paddingLeft: 16
                                            }}>Nazwa * <br/></Typography>

                                            <input
                                                type="text"
                                                value=''

                                                style={{
                                                    width: 261,
                                                    color: '#201D20',
                                                    borderWidth: 1,
                                                    borderColor: '#aaaaaa',
                                                    borderStyle: 'solid',
                                                    fontSize: 14,
                                                    fontFamily: 'Inter, sans-serif',
                                                    fontWeight: '500',
                                                    wordWrap: 'break-word',
                                                    borderRadius: 8,
                                                    paddingLeft: 16,
                                                    paddingRight: 16,
                                                    paddingTop: 8,
                                                    paddingBottom: 8
                                                }}
                                            />

                                        </Box>
                                    </Box>
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

                                                color: '#8B7E8B',
                                                fontSize: 12,
                                                fontFamily: 'Inter, sans-serif',
                                                fontWeight: '500',
                                                wordWrap: 'break-word',
                                                paddingLeft: 16
                                            }}>Adres e-mail * <br/></Typography>

                                            <input
                                                type="text"
                                                value=''

                                                style={{
                                                    width: 261,

                                                    color: '#201D20',
                                                    borderWidth: 1,
                                                    borderColor: '#aaaaaa',
                                                    borderStyle: 'solid',
                                                    fontSize: 14,
                                                    fontFamily: 'Inter, sans-serif',
                                                    fontWeight: '500',
                                                    wordWrap: 'break-word',
                                                    borderRadius: 8,
                                                    paddingLeft: 16,
                                                    paddingRight: 16,
                                                    paddingTop: 8,
                                                    paddingBottom: 8
                                                }}
                                            />

                                        </Box>
                                    </Box>
                                    <Box style={{
                                        alignSelf: 'stretch',
                                        justifyContent: 'flex-start',
                                        alignItems: 'center',
                                        gap: 2,
                                        display: 'inline-flex'
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

                                                    color: '#8B7E8B',
                                                    fontSize: 12,
                                                    fontFamily: 'Inter, sans-serif',
                                                    fontWeight: '500',
                                                    wordWrap: 'break-word',
                                                    paddingLeft: 16
                                                }}>Numer telefonu * <br/></Typography>

                                                <input
                                                    type="text"
                                                    value=''

                                                    style={{
                                                        width: 261,



                                                        color: '#201D20',
                                                        borderWidth: 1,
                                                        borderColor: '#aaaaaa',
                                                        borderStyle: 'solid',
                                                        fontSize: 14,
                                                        fontFamily: 'Inter, sans-serif',
                                                        fontWeight: '500',
                                                        wordWrap: 'break-word',
                                                        borderRadius: 8,
                                                        paddingLeft: 16,
                                                        paddingRight: 16,
                                                        paddingTop: 8,
                                                        paddingBottom: 8
                                                    }}
                                                />

                                            </Box>
                                        </Box>
                                        <IconButton>
                                            <EditIcon style={{width: 24, height: 24}}/>
                                        </IconButton>
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
                paddingTop:40,

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
                    display: 'inline-flex'
                }} onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#F0F0F0'}
                        onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'transparent'}>Anuluj</Button>
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
                    display: 'inline-flex'
                }} onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#F37521'}
                        onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#F37521'}>Potwierdź</Button>
            </Box>
        </Paper>
    );
}
export default NewTeamMemberCard