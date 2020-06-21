import { makeStyles, Theme, createStyles } from "@material-ui/core";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      minHeight: "100vh",
      width: "100%",
      display: "flex",
      justifyContent: "center",
      alignItems: "center"
    },
    paper: {
      padding: theme.spacing(2),
      width: "90%"
    }
  })
);

export default useStyles;
