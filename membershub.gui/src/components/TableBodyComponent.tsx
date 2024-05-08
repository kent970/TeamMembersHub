import {useState} from "react";
import * as React from "react";
import TableContainer from "@mui/material/TableContainer";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import TableCell from "@mui/material/TableCell";
import TableBody from "@mui/material/TableBody";
import {Box, Button, Dialog, IconButton, Modal, Popover} from "@mui/material";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import '../styles/TableBodyComponentStyles.scss';
import TeamMemberStatusChangedComponent from "./TeamMemberStatusChangedComponent";
import ProfileCard from "./ProfileCard";
import useTeamMembers from "../hooks/useTeamMembers";

const TableBodyComponent = () => {
    const [openCancelButton, setOpenCancelButton] = useState<HTMLButtonElement | null>(null);
    const [openAlert, setOpenAlert] = useState(false);
    const [openProfileCard, setProfileCardOpen] = useState(false);
    const {teamMembers, loading, error} = useTeamMembers();

    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => setOpenCancelButton(event.currentTarget);

    const handleClosePopover = () => setOpenCancelButton(null);

    const handleOpenDialog = () => {
        setOpenCancelButton(null);
        setOpenAlert(true);
    };

    const handleCloseDialog = () => setOpenAlert(false);

    const handleRowClick = (event: React.MouseEvent<HTMLTableRowElement>, row: any) => {
        const target = event.target as HTMLElement;
        if (!target.closest('.MuiIconButton-root') && !openCancelButton) {
            setProfileCardOpen(true);
        }
    };
    return (
        <TableContainer component={Paper}>
            <Table aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell className="TableHeadCell" width={416}>Nazwa</TableCell>
                        <TableCell className="TableHeadCell" width={416}>Email</TableCell>
                        <TableCell className="TableHeadCell" width={416}>Numer telefonu</TableCell>
                        <TableCell className="TableHeadCell" width={98}>Status</TableCell>
                        <TableCell className="TableHeadCell" width={126}>Data utworzenia</TableCell>
                        <TableCell className="TableHeadCell" width={64}>Actions</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {teamMembers.map((row) => (
                        <TableRow key={row.name} onClick={(event) => handleRowClick(event, row)} className="TableRow">

                            <TableCell style={{width: 416, padding: 16}}>
                                <img src={row.imageUrl} alt="avatar"
                                     style={{width: 31, height: 31, paddingRight: 16}}/>
                                {row.name}
                            </TableCell>
                            <TableCell style={{width: 416, padding: 16}}>{row.email}</TableCell>
                            <TableCell style={{width: 416, padding: 16}}>{row.phone}</TableCell>
                            <TableCell style={{width: 98, padding: 16}}>
                                <div className="Badge">{row.status}</div>
                            </TableCell>
                            <TableCell style={{width: 126, padding: 16}}>{row.createdAt}</TableCell>
                            <TableCell style={{width: 64, padding: 16}}>
                                <IconButton onClick={handleClick}>
                                    <MoreVertIcon/>
                                </IconButton>
                                <Popover open={Boolean(openCancelButton)} anchorEl={openCancelButton}
                                         onClose={handleClosePopover}
                                         anchorOrigin={{vertical: 'bottom', horizontal: 'right',}}
                                         transformOrigin={{vertical: 'top', horizontal: 'right',}}
                                         className="PopoverContainer">
                                    <Button onClick={handleOpenDialog} className="PopoverButton">Zablokuj</Button>
                                </Popover>
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
            <Dialog open={openAlert} onClose={handleCloseDialog} fullWidth maxWidth="sm">
                <TeamMemberStatusChangedComponent/>
            </Dialog>
            <Modal open={openProfileCard} onClose={() => setProfileCardOpen(false)}
                   style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                <Box>
                    <ProfileCard/>
                </Box>
            </Modal>
        </TableContainer>
    );
};

export default TableBodyComponent;

