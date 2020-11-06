import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useForm } from "react-hook-form";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import Link from "@material-ui/core/Link";
import Grid from "@material-ui/core/Grid";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";
import withStyles from "@material-ui/core/styles/withStyles";
import Container from "@material-ui/core/Container";
import CircularProgress from "@material-ui/core/CircularProgress";
import { makeStyles } from "@material-ui/core/styles";
import { authOperations, authSelectors } from "../../redux/auth";
// import styles from "./LoginView.module.css";

const useStyles = makeStyles((theme) => ({
  root: {
    "& .MuiTextField-root": {
      margin: theme.spacing(1),
      width: 200,
    },
  },
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: "100%",
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
  customError: {
    color: "red",
    fontSize: "0.8rem",
    marginTop: 10,
  },
  progress: {
    position: "absolute",
  },
}));

const initialState = {
  email: "",
  password: "",
};

const LoginView = (props) => {
  const loading = useSelector((state) => authSelectors.getLoading(state));
  const [state, setState] = useState(initialState);
  // const [errors, setError] = useState(null);
  const { errors } = useForm();

  const dispatch = useDispatch();

  const handleChange = ({ target: { name, value } }) => {
    setState((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(authOperations.login(state));
    setState(initialState);
  };

  const { email, password } = state;

  const classes = useStyles();

  // useEffect(() => {
  //   if (props.UI.errors) {
  //     setError(props.UI.errors);
  //   }
  // }, [props.UI.errors]);

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Login
        </Typography>
        <form className={classes.form} noValidate>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
            autoFocus
            helperText={errors.email}
            error={errors.email ? true : false}
            onChange={handleChange}
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
            helperText={errors.password}
            error={errors.password ? true : false}
            onChange={handleChange}
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
            onClick={handleSubmit}
            disabled={loading || !email || !password}
          >
            Sign In
            {loading && (
              <CircularProgress size={30} className={classes.progress} />
            )}
          </Button>
          <Grid container>
            <Grid item>
              <Link href="signup" variant="body2">
                {"Don't have an account? Sign Up"}
              </Link>
            </Grid>
          </Grid>
          {errors.general && (
            <Typography variant="body2" className={classes.customError}>
              {errors.general}
            </Typography>
          )}
        </form>
      </div>
    </Container>
  );
};

export default LoginView;

// const styles = (theme) => ({
//   paper: {
//     marginTop: theme.spacing(8),
//     display: "flex",
//     flexDirection: "column",
//     alignItems: "center",
//   },
//   avatar: {
//     margin: theme.spacing(1),
//     backgroundColor: theme.palette.secondary.main,
//   },
//   form: {
//     width: "100%",
//     marginTop: theme.spacing(1),
//   },
//   submit: {
//     margin: theme.spacing(3, 0, 2),
//   },
//   customError: {
//     color: "red",
//     fontSize: "0.8rem",
//     marginTop: 10,
//   },
//   progess: {
//     position: "absolute",
//   },
// });
