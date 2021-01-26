import React from "react";
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

export default ImageUploader;
