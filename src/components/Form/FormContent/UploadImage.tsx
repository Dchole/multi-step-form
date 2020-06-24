import React, { useContext } from "react";
import Box from "@material-ui/core/Box";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import PhotoCameraIcon from "@material-ui/icons/PhotoCamera";

import useStyles from "../styles/upload-image";
import coverPhoto from "../../../images/cover.png";
import profilePhoto from "../../../images/profile-photo.png";
import { FormContext } from "../StepperContent";

const UploadImage = () => {
  const classes = useStyles();

  const {
    uploads: { profile, cover },
    setUploads
  } = useContext(FormContext);

  const handleUpload = (
    event: React.ChangeEvent<HTMLInputElement>,
    photo: "profile" | "cover"
  ) => {
    const file = event.target.files![0];
    const reader = new FileReader();
    reader.readAsDataURL(file);

    reader.onloadend = () => {
      if (photo === "cover") {
        setUploads(upload => ({ ...upload, cover: reader.result }));
      } else {
        setUploads(upload => ({ ...upload, profile: reader.result }));
      }
    };
  };

  const coverPic = cover || coverPhoto;
  const profilePic = profile || profilePhoto;

  return (
    <Box mb={15} mx={2}>
      <div
        aria-label="cover-photo"
        style={{ background: `url(${coverPic}) center/cover` }}
        className={classes.cover}
      >
        <input
          type="file"
          name="cover"
          accept="image/*"
          id="cover-upload"
          onChange={e => handleUpload(e, "cover")}
          className={classes.input}
        />
        <label htmlFor="cover-upload">
          <Button
            component="span"
            variant="contained"
            className={classes.coverCTA}
            color="default"
            startIcon={<PhotoCameraIcon />}
          >
            Upload Cover Photo
          </Button>
        </label>
      </div>
      <div
        aria-label="profile-photo"
        style={{ background: `url(${profilePic}) center/cover` }}
        className={classes.profile}
      >
        <input
          type="file"
          name="profile"
          accept="image/*"
          id="profile-upload"
          onChange={e => handleUpload(e, "profile")}
          className={classes.input}
        />
        <label htmlFor="profile-upload">
          <IconButton
            component="span"
            className={classes.profileCTA}
            aria-label="upload profile picture"
          >
            <PhotoCameraIcon />
          </IconButton>
        </label>
      </div>
    </Box>
  );
};

export default UploadImage;
