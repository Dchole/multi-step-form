import { makeStyles, createStyles, Theme } from "@material-ui/core";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    cover: {
      width: "100%",
      height: 250,
      position: "relative",
      transition: "ease 150ms",
      overflow: "hidden"
    },
    coverCTA: {
      position: "absolute",
      bottom: 0,
      right: 0,
      color: theme.palette.text.primary,
      backgroundColor: theme.palette.grey[100],
      boxShadow: theme.shadows[1],
      transform: "translate(-10%, -50%)",
      textTransform: "capitalize",

      "&:hover": {
        backgroundColor: theme.palette.grey[200],
        boxShadow: theme.shadows[2]
      }
    },
    input: {
      display: "none"
    },
    profile: {
      width: 120,
      height: 120,
      borderRadius: "50%",
      position: "absolute",
      transform: "translate(50%, -50%)",
      border: "5px solid white",
      boxShadow: theme.shadows[1]
    },
    profileCTA: {
      position: "absolute",
      bottom: 0,
      right: 0,
      transform: "translate(20%, 20%)",
      boxShadow: theme.shadows[1],
      backgroundColor: theme.palette.grey[100],

      "&:hover": {
        boxShadow: theme.shadows[2],
        backgroundColor: theme.palette.grey[300]
      }
    }
  })
);

export default useStyles;
