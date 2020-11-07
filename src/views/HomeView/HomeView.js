import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import AppBar from "@material-ui/core/AppBar";
import CssBaseline from "@material-ui/core/CssBaseline";
import Toolbar from "@material-ui/core/Toolbar";
import List from "@material-ui/core/List";
import { Container, Typography, Box } from "@material-ui/core";
import Divider from "@material-ui/core/Divider";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import AccountBoxIcon from "@material-ui/icons/AccountBox";
import NotesIcon from "@material-ui/icons/Notes";
import Avatar from "@material-ui/core/avatar";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import CircularProgress from "@material-ui/core/CircularProgress";
import { registerRoute, loginRoute, contactsRoute } from "../../routes";
import { authSelectors } from "../../redux/auth";
import useStyles from "./styles";

const HomeView = () => {
  const classes = useStyles();
  const isAuth = useSelector((state) => authSelectors.isAuth(state));

  return (
    <Container className={classes.wrapper}>
      <CssBaseline />
      <div className={classes.text}>
        <Typography
          // color="textPrimary"
          component="h2"
          variant="h5"
          className={classes.title}
        >
          Manage contacts using the Phonebook-app
        </Typography>

        <Typography component="p">
          The Phonebook-app offers you the following actions:
        </Typography>
        <ul className={classes.list}>
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
    </Container>
  );
};

export default HomeView;
