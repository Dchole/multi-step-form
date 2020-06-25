import React from "react";
import Grid from "@material-ui/core/Grid";
import InputAdornment from "@material-ui/core/InputAdornment";
import BusinessIcon from "@material-ui/icons/Business";
import EmailIcon from "@material-ui/icons/Email";
import LanguageIcon from "@material-ui/icons/Language";
import LocationOnIcon from "@material-ui/icons/LocationOn";
import { TextField } from "formik-material-ui";
import { Field } from "formik";

import useStyles from "../styles/form-content";
import { IContentProps } from "../helpers";

const BusinessDetails: React.FC<IContentProps> = ({ focus, setFocus }) => {
  const classes = useStyles();

  return (
    <Grid spacing={2} container className={classes.formGrid}>
      <Grid item xs={12} sm={6}>
        <Field
          component={TextField}
          variant="outlined"
          id="brandName"
          name="brandName"
          label="Business Name"
          fullWidth
          autoFocus
          onFocus={() => setFocus("brandName")}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <BusinessIcon
                  color={focus === "brandName" ? "inherit" : "action"}
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
          id="businessEmail"
          name="businessEmail"
          type="email"
          label="Business E-mail Address"
          onFocus={() => setFocus("businessEmail")}
          fullWidth
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <EmailIcon
                  color={focus === "businessEmail" ? "inherit" : "action"}
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
          id="website"
          name="website"
          label="Business Website"
          onFocus={() => setFocus("website")}
          fullWidth
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <LanguageIcon
                  color={focus === "website" ? "inherit" : "action"}
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
          id="location"
          name="location"
          label="Business Location"
          placeholder="Country, City/Town"
          onFocus={() => setFocus("location")}
          fullWidth
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <LocationOnIcon
                  color={focus === "location" ? "inherit" : "action"}
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
          id="description"
          name="description"
          label="Description"
          rows={5}
          multiline
          fullWidth
          onFocus={() => setFocus("description")}
        />
      </Grid>
    </Grid>
  );
};

export default BusinessDetails;
