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
    coverImage: {
      width: "100%",
      position: "absolute",
      top: "50%",
      left: "50%",
      transform: "translate(-50%,-50%)"
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
      border: "5px solid green"
    },
    profileCTA: {
      position: "absolute",
      bottom: 0,
      right: 0,
      transform: "translate(20%, 20%)",
      backgroundColor: theme.palette.grey[100],

      "&:hover": {
        backgroundColor: theme.palette.grey[300]
      }
    },
    profileImage: {
      width: "100%",
      position: "absolute",
      top: "50%",
      left: "50%",
      transform: "translate(-50%,-50%)"
    }
  })
);

export default useStyles;
