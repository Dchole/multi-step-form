import React, { useState } from "react";
import Grid from "@material-ui/core/Grid";
import InputAdornment from "@material-ui/core/InputAdornment";
import IconButton from "@material-ui/core/IconButton";
import PersonIcon from "@material-ui/icons/Person";
import EmailIcon from "@material-ui/icons/Email";
import LockIcon from "@material-ui/icons/Lock";
import VisibilityIcon from "@material-ui/icons/Visibility";
import VisibilityOffIcon from "@material-ui/icons/VisibilityOff";
import { TextField } from "formik-material-ui";
import { Field } from "formik";

import useStyles from "../styles/form-content";
import { IContentProps } from "..";

const PersonalDetails: React.FC<IContentProps> = ({ focus, setFocus }) => {
  const classes = useStyles();
  const [showPassword, setShowPassword] = useState(false);

  return (
    <Grid spacing={2} container className={classes.formGrid}>
      <Grid item xs={12} sm={6}>
        <Field
          component={TextField}
          variant="outlined"
          id="firstName"
          name="firstName"
          label="First Name"
          fullWidth
          autoFocus
          onFocus={() => setFocus("firstName")}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <PersonIcon
                  color={focus === "firstName" ? "inherit" : "action"}
                />
              </InputAdornment>
            )
          }}
        />
      </Grid>
      <Grid item xs={12} sm={6}>
        <Field
          component={TextField}
          variant="outlined"
          id="lastName"
          name="lastName"
          label="Last Name"
          fullWidth
          onFocus={() => setFocus("lastName")}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <PersonIcon
                  color={focus === "lastName" ? "inherit" : "action"}
                />
              </InputAdornment>
            )
          }}
        />
      </Grid>
      <Grid item xs={12}>
        <Field
          component={TextField}
          variant="outlined"
          id="email"
          name="email"
          type="email"
          label="Email"
          fullWidth
          onFocus={() => setFocus("email")}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <EmailIcon color={focus === "email" ? "inherit" : "action"} />
              </InputAdornment>
            )
          }}
        />
      </Grid>
      <Grid item xs={12}>
        <Field
          component={TextField}
          variant="outlined"
          id="password"
          name="password"
          type={showPassword ? "text" : "password"}
          label="Password"
          fullWidth
          onFocus={() => setFocus("password")}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <LockIcon color={focus === "password" ? "inherit" : "action"} />
              </InputAdornment>
            ),
            endAdornment: (
              <InputAdornment
                position="end"
                onClick={() => setShowPassword(!showPassword)}
              >
                <IconButton
                  tabIndex={-1}
                  color={focus === "password" ? "inherit" : "default"}
                >
                  {showPassword ? <VisibilityOffIcon /> : <VisibilityIcon />}
                </IconButton>
              </InputAdornment>
            )
          }}
        />
      </Grid>
      <Grid item xs={12}>
        <Field
          component={TextField}
          variant="outlined"
          id="confirm"
          name="confirm"
          type={showPassword ? "text" : "password"}
          label="Confirm Password"
          fullWidth
          onFocus={() => setFocus("confirm")}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <LockIcon color={focus === "confirm" ? "inherit" : "action"} />
              </InputAdornment>
            ),
            endAdornment: (
              <InputAdornment
                position="end"
                onClick={() => setShowPassword(!showPassword)}
              >
                <IconButton color={focus === "confirm" ? "inherit" : "default"}>
                  {showPassword ? <VisibilityOffIcon /> : <VisibilityIcon />}
                </IconButton>
              </InputAdornment>
            )
          }}
        />
      </Grid>
    </Grid>
  );
};

export default PersonalDetails;
