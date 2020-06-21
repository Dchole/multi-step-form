import { makeStyles, Theme, createStyles } from "@material-ui/core";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      padding: theme.spacing(2, 8)
    },
    button: {
      margin: theme.spacing(0, 1, 1)
    }
  })
);

export default useStyles;
