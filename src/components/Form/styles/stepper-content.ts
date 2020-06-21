import { makeStyles, Theme, createStyles } from "@material-ui/core";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      padding: theme.spacing(2, 8)
    },
    formAction: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center"
    },
    button: {
      margin: theme.spacing(0, 1, 1)
    },
    iconButton: {
      border: `1px solid ${theme.palette.primary.main}`
    }
  })
);

export default useStyles;
