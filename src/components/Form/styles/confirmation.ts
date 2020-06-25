import { makeStyles, Theme, createStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    cover: {
      width: "100%",
      height: 250,
      position: "relative",
      transition: "ease 150ms",
      overflow: "hidden"
    },
    profile: {
      width: 120,
      height: 120,
      borderRadius: "50%",
      position: "absolute",
      left: "50%",
      transform: "translate(-50%, -50%)",
      border: "5px solid white",
      boxShadow: theme.shadows[1]
    },
    name: {
      marginTop: theme.spacing(8)
    },
    descriptionTitle: {
      display: "flex",
      alignItems: "center"
    }
  })
);

export default useStyles;
