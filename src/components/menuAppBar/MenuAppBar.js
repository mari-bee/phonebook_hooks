import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";

import AccountCircle from "@material-ui/icons/AccountCircle";
import MenuItem from "@material-ui/core/MenuItem";
import Menu from "@material-ui/core/Menu";
import Brightness4Icon from "@material-ui/icons/Brightness4";
import Brightness5Icon from "@material-ui/icons/Brightness5";
import Navigation from "../navigation/Navigation";
import UserMenu from "../userMenu/UserMenu";
import AuthNav from "../authNav/AuthNav";
import { authSelectors, authOperations } from "../../redux/auth";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
    paddingLeft: "35px",
    textAlign: "left",
  },
  icon: {
    fontSize: 40,
  },
}));

const MenuAppBar = ({ isDark, changeTheme }) => {
  const isAuth = useSelector((state) => authSelectors.isAuth(state));
  const icon = isDark ? <Brightness5Icon /> : <Brightness4Icon />;
  const dispatch = useDispatch();
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h4" className={classes.title}>
            Phonebook
          </Typography>
          <IconButton
            className={classes.icons}
            edge="end"
            color="inherit"
            aria-label="mode"
            onClick={changeTheme}
          >
            <icon.type className={classes.icon} />
          </IconButton>
          {isAuth && <UserMenu />}
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default MenuAppBar;
