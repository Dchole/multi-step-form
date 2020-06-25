import React, { useContext } from "react";
import { FormContext } from "../StepperContent";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import BusinessIcon from "@material-ui/icons/Business";
import LocationIcon from "@material-ui/icons/LocationOn";
import WebsiteIcon from "@material-ui/icons/Language";
import DescriptionIcon from "@material-ui/icons/Description";

import useStyles from "../styles/confirmation";

const Confirmation = () => {
  const { values } = useContext(FormContext);
  const classes = useStyles();

  const businessLocation = values.location.split(",");
  const country = businessLocation[0].trim();
  const city =
    businessLocation.length > 1 ? businessLocation[1].trim() : undefined;

  return (
    <Box mb={8}>
      <div id="personal-details">
        <Typography variant="h4" component="h2" align="center">
          Personal Details
        </Typography>
        <br />
        <div
          className={classes.cover}
          style={{ background: `url(${values.cover}) center/cover` }}
        />
        <div
          className={classes.profile}
          style={{ background: `url(${values.profile}) center/cover` }}
        />
        <Typography
          variant="h5"
          component="p"
          align="center"
          className={classes.name}
        >
          {values.firstName} {values.lastName}
        </Typography>
        <Typography variant="body2" align="center">
          {values.email}
        </Typography>
      </div>
      <br />
      <div>
        <Typography variant="h4" component="h2" align="center">
          Business Details
        </Typography>
        <div>
          <Grid container>
            <Grid item xs={12} sm={6}>
              <BusinessIcon />
              <Typography variant="h5" component="p">
                {values.brandName}
              </Typography>
              <Typography variant="body2">{values.businessEmail}</Typography>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Grid
                id="location"
                container
                direction="column"
                alignItems="flex-end"
              >
                <LocationIcon />
                <Typography variant="h5" component="p">
                  {country}
                </Typography>
                {city && <Typography variant="body2">{city}</Typography>}
              </Grid>
            </Grid>
          </Grid>
          <br />
          <div id="website">
            <WebsiteIcon />
            <Typography variant="body2">{values.website}</Typography>
          </div>
          <br />
          <div id="description">
            <div className={classes.descriptionTitle}>
              <DescriptionIcon />
              &nbsp;
              <Typography variant="h5" component="p">
                About Business
              </Typography>
            </div>
            <Box px={4} pt={1}>
              {values.description ? (
                <Typography variant="body2">{values.description}</Typography>
              ) : (
                <>
                  <br />
                  <Typography variant="h5" align="center">
                    No Information About Your Business{" "}
                    <span role="img" aria-label="sad face emoji">
                      ☹
                    </span>
                  </Typography>
                </>
              )}
            </Box>
          </div>
        </div>
      </div>
    </Box>
  );
};

export default Confirmation;
