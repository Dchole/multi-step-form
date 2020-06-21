import { makeStyles, Theme, createStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    formGrid: {
      margin: theme.spacing(2, 0)
    }
  })
);

export default useStyles;
