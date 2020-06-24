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
    photo: typeof cover
  ) => {
    const file = event.target.files![0];
    const reader = new FileReader();
    const url = reader.readAsDataURL(file);

    reader.onloadend = () => {
      if (photo === cover) {
        setUploads(upload => ({ ...upload, cover: reader.result }));
      } else {
        setUploads(upload => ({ ...upload, profile: reader.result }));
      }
    };

    console.log({ file, reader, url });
  };

  const coverPic = cover || coverPhoto;
  const profilePic = profile || profilePhoto;

  return (
    <Box mb={15} mx={2}>
      <div aria-label="cover-photo" className={classes.cover}>
        <img
          src={String(coverPic)}
          alt="Cover"
          className={classes.coverImage}
        />
        <input
          type="file"
          name="cover"
          accept="image/*"
          id="cover-upload"
          onChange={e => handleUpload(e, cover)}
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
      <div aria-label="profile-photo" className={classes.profile}>
        <img
          src={String(profilePic)}
          alt="upload"
          className={classes.profileImage}
        />
        <input
          type="file"
          name="profile"
          accept="image/*"
          id="profile-upload"
          onChange={e => handleUpload(e, profile)}
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
