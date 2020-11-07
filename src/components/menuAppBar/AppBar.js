import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import Switch from "@material-ui/core/Switch";
import Navigation from "../navigation/Navigation";
import Logo from "../logo/Logo";
import UserMenu from "../userMenu/UserMenu";
import AuthNav from "../authNav/AuthNav";
import { authSelectors } from "../../redux/auth";
import styles from "./AppBar.module.css";

const AppBar = ({ isDark, changeTheme }) => {
  const isAuth = useSelector((state) => authSelectors.isAuth(state));
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary nav-menu">
      <div className={styles.logoWrapper}>
        <Logo />
      </div>
      <div className={styles.navWrapper}>
        <Navigation />
      </div>
      <Switch checked={isDark} onChange={changeTheme} />
      <div className={styles.authWrapper}>
        {isAuth ? <UserMenu /> : <AuthNav />}
      </div>
    </nav>
  );
};

export default AppBar;
