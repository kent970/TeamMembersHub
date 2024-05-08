import {Button, DialogActions, DialogContent, DialogTitle, ListItemIcon} from "@mui/material";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import * as React from "react";

const TeamMemberStatusChangedComponent = () => {
    return (
        <div>
            <DialogTitle>Potwierdzenie</DialogTitle>
            <DialogContent>
                <div style={{display: 'flex', alignItems: 'center'}}>
                    <ListItemIcon>
                        <CheckCircleOutlineIcon style={{color: 'black'}}/>
                    </ListItemIcon>
                    <div className="SupportingText">Członek zespołu został zablokowany</div>
                </div>
            </DialogContent>
            <DialogActions>
                <Button
                    style={{
                        width: '100%',
                        background: '#F37521',
                        color: '#FCFCFC',
                        fontFamily: 'Inter, sans-serif',
                        borderRadius: 8
                    }}>Ukryj</Button>
            </DialogActions>
        </div>
    )
}
export default TeamMemberStatusChangedComponent

