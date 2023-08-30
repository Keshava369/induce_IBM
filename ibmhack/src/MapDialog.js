import React, { useState } from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core/styles';
import Dialog from '@material-ui/core/Dialog';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import CloseIcon from '@material-ui/icons/Close';
import Slide from '@material-ui/core/Slide';
import { Tooltip as ReactTooltip } from 'react-tooltip'
import StateChart from './StateChart';

const useStyles = makeStyles(theme => ({
    appBar: {
      position: 'relative',
      backgroundColor: '#509609',
    },
    title: {
      marginLeft: theme.spacing(2),
      flex: 1,
    },
}));

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});

const MapDialog = props => {
    const classes = useStyles();
    const [contentD, setContentD] = useState("");
    const [selectedState, setSTName] = useState("");
    
    return (
        <Dialog fullScreen TransitionComponent={Transition} open={props.show} onClose={props.closeModal} style={{ backgroundColor: 'black !important' }}>
            <AppBar className={classes.appBar}>
            <Toolbar>
                <IconButton edge="start" color="inherit" onClick={props.closeModal} aria-label="close">
                <CloseIcon />
                </IconButton>
                {!selectedState && (
                    <Typography variant="h6" className={classes.title}>
                          Close
                    </Typography>
                )}   
                {/* {DTName && (
                    <Typography variant="h6" className={classes.title}>
                        Selected District: {DTName}
                    </Typography>
                )}    */}
            </Toolbar>
            </AppBar>
            <CssBaseline />
            <div  >     
                    <StateChart setTooltipContent={setContentD} setDistrictName={setSTName} selectedState={props.StateName} />
                    <ReactTooltip>{contentD}</ReactTooltip>               
            </div>
        </Dialog>
    )
};

export default MapDialog;
