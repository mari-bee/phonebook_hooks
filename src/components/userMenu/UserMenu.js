import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { NavLink } from "react-router-dom";
import { MenuItem, Menu, IconButton } from "@material-ui/core";
import AccountCircle from "@material-ui/icons/AccountCircle";
import { authOperations } from "../../redux/auth";
import { profileRoute } from "../../routes";
import useStyles from "./styles";

const UserMenu = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleMenu = ({ currentTarget }) => {
    setAnchorEl(currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <IconButton
        aria-label="account of current user"
        aria-controls="user-menu"
        aria-haspopup="true"
        onClick={handleMenu}
        color="inherit"
      >
        <AccountCircle className={classes.icon} />
      </IconButton>
      <Menu
        id="user-menu"
        anchorEl={anchorEl}
        anchorOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        keepMounted
        transformOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        open={open}
        onClose={handleClose}
      >
        <NavLink to={profileRoute.path} exact={profileRoute.exact}>
          <MenuItem onClick={handleClose}>{profileRoute.label}</MenuItem>
        </NavLink>
        <MenuItem onClick={() => dispatch(authOperations.logout())}>
          Logout
        </MenuItem>
      </Menu>
    </div>
  );
};

export default UserMenu;
