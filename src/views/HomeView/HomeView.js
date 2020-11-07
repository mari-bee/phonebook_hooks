import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Drawer from "@material-ui/core/Drawer";
import AppBar from "@material-ui/core/AppBar";
import CssBaseline from "@material-ui/core/CssBaseline";
import Toolbar from "@material-ui/core/Toolbar";
import List from "@material-ui/core/List";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import AccountBoxIcon from "@material-ui/icons/AccountBox";
import NotesIcon from "@material-ui/icons/Notes";
import Avatar from "@material-ui/core/avatar";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import CircularProgress from "@material-ui/core/CircularProgress";
import { makeStyles } from "@material-ui/core/styles";
import { registerRoute, loginRoute, contactsRoute } from "../../routes";
import { authSelectors } from "../../redux/auth";
import styles from "./HomeView.module.css";

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  icon: {
    fill: theme.palette.primary.main,
    minWidth: "300px",
    minHeight: "300px",
  },
  toolbar: theme.mixins.toolbar,
}));

const HomeView = () => {
  const classes = useStyles();
  const isAuth = useSelector((state) => authSelectors.isAuth(state));

  return (
    <div className={styles.wrapper}>
      <div className={styles.text}>
        <h2 className={styles.title}>
          Manage contacts using the Phonebook-app
        </h2>
        <p>The Phonebook-app offers you the following actions:</p>
        <ul className={styles.list}>
          <li>Create a new contact</li>
          <li>Edit contacts in the list</li>
          <li>Search for contacts in the list by name</li>
          <li>Delete any contact from the list</li>
        </ul>

        {!isAuth ? (
          <p>
            <Link to={registerRoute.path}>Register </Link> your account or
            <Link to={loginRoute.path}> Log in</Link>
          </p>
        ) : (
          <Link to={contactsRoute.path}>My Phonebook</Link>
        )}
      </div>
      <svg className={classes.icon}>
        <use href="#phonebook"></use>
      </svg>
    </div>
  );
};

export default HomeView;
