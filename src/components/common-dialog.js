import React from "react";
import Dialog from "@material-ui/core/Dialog";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import CloseIcon from "@material-ui/icons/Close";
import Slide from "@material-ui/core/Slide";
import MobileRecharge from "./retailerServices/mobile-recharge";

const useStyles = makeStyles((theme) => ({
  appBar: {
    position: "relative",
  },
  title: {
    marginLeft: theme.spacing(2),
    flex: 1,
  },
}));

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const CommonDialog = ({ currentState, changeStateFunction, headerTitle }) => {
  const classes = useStyles(); //* classes for material ui elements

  let view;

  //* switch case for changing the view accordingly
  switch (headerTitle) {
    case "Mobile Recharge":
      view = <MobileRecharge />;
      break;
    default:
      break;
  }

  return (
    <Dialog
      fullScreen
      open={currentState}
      onClose={changeStateFunction}
      TransitionComponent={Transition}
      className="common_dilog"
    >
      <AppBar className={classes.appBar}>
        <Toolbar>
          <IconButton
            edge="start"
            color="inherit"
            onClick={changeStateFunction}
            aria-label="close"
          >
            <CloseIcon />
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            {headerTitle}
          </Typography>
        </Toolbar>
      </AppBar>
      {
        //* add content below
      }
      {view}
    </Dialog>
  );
};

export default CommonDialog;
