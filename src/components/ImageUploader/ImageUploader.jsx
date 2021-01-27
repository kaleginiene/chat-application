import React from "react";
import PropTypes from "prop-types";
import { Button, InputField, Notification } from "../../components";
import * as S from "./ImageUploader.style";

function ImageUploader({
  callBackBtn,
  callBackUpload,
  callBackUrl,
  handleSubmit,
  notification,
}) {
  return (
    <S.Block>
      <form onSubmit={handleSubmit}>
        <S.Title>Add a photo</S.Title>
        <Notification notification={notification} handleClick={callBackBtn} />
        <InputField
          label="Profile picture URL"
          type="text"
          placeholder="Insert a profile picture URL..."
          handleChange={callBackUrl}
        />
        <InputField
          label="Or upload your photo"
          type="file"
          handleChange={callBackUpload}
        />
        <Button type="submit">Upload photo</Button>
      </form>
    </S.Block>
  );
}

ImageUploader.propTypes = {
  callBackBtn: PropTypes.func,
  callBackUpload: PropTypes.func,
  callBackUrl: PropTypes.func,
  handleSubmit: PropTypes.func,
  notification: PropTypes.string,
};

export default ImageUploader;
