import { makeStyles } from "@mui/styles";
export default makeStyles((theme) => ({
  stepper: {
    padding: theme.spacing(3, 0, 5),
  },
  buttons: {
    display: "flex",
    justifyContent: "flex-end",
  },
  button: {
    marginTop: theme.spacing(3),
    marginLeft: theme.spacing(1),
  },
  wrapper: {
    margin: theme.spacing(1),
    display:'flex',
    justifyContent:"space-between"
  },
  buttonProgress: {
    position: "absolute",
    top: "50%",
    left: "50%",
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  collapsePanelContainer: {
    display: "flex",
    // justifyContent:'center',

    alignItem: "center",
  },
}));
