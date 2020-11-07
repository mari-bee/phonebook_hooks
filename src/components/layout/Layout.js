import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import {
  orange,
  lightBlue,
  deepPurple,
  deepOrange,
} from "@material-ui/core/colors";
import MenuAppBar from "../menuAppBar/MenuAppBar";
import Spinner from "../../components/spinner/Spinner";
import Alert from "../../components/alert/Alert";
import { authSelectors, authSlice } from "../../redux/auth";
import { contactsSelectors, contactsSlice } from "../../redux/contacts";
import styles from "./Layout.module.css";

const Layout = ({ children }) => {
  const theme = localStorage.getItem("theme");
  const [darkState, setDarkState] = useState(theme === "dark" ? true : false);
  const palletType = darkState ? "dark" : "light";
  const mainPrimaryColor = darkState ? orange[500] : lightBlue[500];
  const mainSecondaryColor = darkState ? deepOrange[900] : deepPurple[500];
  const darkTheme = createMuiTheme({
    palette: {
      type: palletType,
      primary: {
        main: mainPrimaryColor,
      },
      secondary: {
        main: mainSecondaryColor,
      },
    },
  });
  const handleThemeChange = () => {
    setDarkState(!darkState);
    localStorage.setItem("theme", darkState ? "dark" : "light");
  };
  // const authLoading = useSelector((state) => authSelectors.getLoading(state));
  const contactsLoading = useSelector((state) =>
    contactsSelectors.getLoading(state)
  );
  const dispatch = useDispatch();
  const authError = useSelector((state) => authSelectors.getError(state));
  const contactsError = useSelector((state) =>
    contactsSelectors.getError(state)
  );
  const [alert, setAlert] = useState(false);

  useEffect(() => {
    (authError || contactsError) && setAlert(true);

    const alertTimeout = setTimeout(() => {
      setAlert(false);
      authError && dispatch(authSlice.error.actions.resetError());
      contactsError && dispatch(contactsSlice.error.actions.resetError());

      return () => {
        clearTimeout(alertTimeout);
      };
    }, 3000);
  }, [authError, contactsError, dispatch]);

  return (
    <ThemeProvider theme={darkTheme}>
      <div className={styles.wrapper}>
        <MenuAppBar isDark={darkState} changeTheme={handleThemeChange} />

        {contactsLoading && <Spinner />}

        {authError && <Alert title={authError} show={alert} />}
        {contactsError && <Alert title={contactsError} show={alert} />}

        {children}
      </div>
    </ThemeProvider>
  );
};

export default Layout;
