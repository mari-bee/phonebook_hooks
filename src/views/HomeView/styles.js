import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  wrapper: {
    margin: "0 auto",
    padding: "20px",
    display: "flex",
    flexDirection: "column",
  },

  text: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
    textAlign: "left",
  },

  "@media (min-width: 576px)": {
    wrapper: {
      padding: "30px",
      flexDirection: "row",
      justifyContent: "space-between",
    },
  },

  "@media (min-width: 1200px)": {
    wrapper: {
      maxWidth: "80%",
      padding: "50px",
    },
    text: {
      flexBasis: "60%",
    },
  },

  list: {
    listStylePosition: "inside",
  },

  title: {
    marginBottom: "50px",
    color: theme.palette.text.primary,
  },
  icon: {
    fill: theme.palette.primary.main,
    minWidth: "300px",
    minHeight: "300px",
  },
}));

export default useStyles;
