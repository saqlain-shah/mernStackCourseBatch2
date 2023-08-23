import React from "react";
import { Typography } from "@mui/material";
import ReactImageUploading from "react-images-uploading";
import { Button } from "@mui/material";
const ConfirmBooking = () => {
  const [images, setImages] = React.useState([]);
  const maxNumber = 69;

  const ImageOnChange = (imageList, addUpdateIndex) => {
    // data for submit
    setImages(imageList);
  };

  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Confirm Booking
      </Typography>

      <ReactImageUploading
        multiple
        value={images}
        onChange={ImageOnChange}
        maxNumber={maxNumber}
        dataURLKey="data_url"
      >
        {({
          imageList,
          onImageUpload,
          onImageRemoveAll,
          onImageUpdate,
          onImageRemove,
          isDragging,
          dragProps,
        }) => (
          <div className="upload__image-wrapper">
            <Button
              style={isDragging ? { color: "red" } : undefined}
              onClick={onImageUpload}
              {...dragProps}
            >
              Click or Drop here
            </Button>
            &nbsp;
            <Button onClick={onImageRemoveAll}>Remove all images</Button>
            {imageList.map((image, index) => (
              <div key={index} className="image-item">
                <img src={image["data_url"]} alt="" width="100" />
                <div className="image-item__btn-wrapper">
                  <Button onClick={() => onImageUpdate(index)}>Update</Button>
                  <Button onClick={() => onImageRemove(index)}>Remove</Button>
                </div>
              </div>
            ))}
          </div>
        )}
      </ReactImageUploading>
    </React.Fragment>
  );
};

export default ConfirmBooking;
