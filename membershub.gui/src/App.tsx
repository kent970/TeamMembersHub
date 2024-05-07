import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import DownloadingIcon from '@mui/icons-material/Downloading';
import {
    Avatar,
    Badge,
    Box,
    Button, Container,
    Dialog,
    DialogActions,
    DialogContent,
    DialogTitle, Grid,
    IconButton,
    ListItemIcon, makeStyles,
    Popover, Stack, Theme, Typography
} from "@mui/material";
import './TableHead.scss';
import CloudDownloadIcon from '@mui/icons-material/CloudDownload';
import {Cloud, CloudDownload} from "@mui/icons-material";
import AddIcon from '@mui/icons-material/Add';
import {ChangeEvent, useState} from "react";
import EditIcon from '@mui/icons-material/Edit';
import CloseIcon from '@mui/icons-material/Close';
import DoneIcon from '@mui/icons-material/Done';
import TableHeadComponent from "./components/TableHeadComponent";
import TableBodyComponent from "./components/TableBodyComponent";
import ProfileCard from "./components/ProfileCard";
import NewTeamMemberCard from "./components/NewTeamMemberCard";


const App = () => {
    return (

        <div className="App" style={{padding: '32px'}}>

            <div className="AppHeader" style={{paddingBottom: '32px'}}>
                <TableHeadComponent/>
            </div>
            <TableBodyComponent/>
            <ProfileCard/><NewTeamMemberCard/>
        </div>
    );
}
export default App








