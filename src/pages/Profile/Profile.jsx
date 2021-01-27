import React, { useContext, useState } from "react";
import { UserContext } from "../../contexts/UserContext";
import { useHistory } from "react-router-dom";
import {
  Button,
  ImageUploader,
  InputField,
  ProfileBlock,
} from "../../components";
import * as S from "./Profile.style";
import { BackArrow, DefaultPhoto } from "../../assets";

function checkValidUrl(imgUploadUrl, imgUrl, setNotification) {
  if (imgUploadUrl && imgUploadUrl.includes("blob:")) {
    console.log("true");
    return true;
  } else if (imgUrl) {
    const myRegex = /(http(s?):)([/|.|\w|\s|-])*\.(?:jpg|gif|png)/g;
    const test = myRegex.test(imgUrl);
    if (test) {
      console.log(test);
      return test;
    } else {
      setNotification("Invalid image url");
    }
  } else {
    console.log("false");
    setNotification("Invalid image url");
    return false;
  }
}

function uploadImgSubmit(
  imgUploadUrl,
  imgUrl,
  userInfo,
  setNotification,
  event,
  setUrl,
  setUpload
) {
  if (checkValidUrl(imgUploadUrl, imgUrl, setNotification)) {
    if (imgUrl && imgUploadUrl) {
      setNotification("Only one picture is allowed");
    } else if (imgUrl) {
      userInfo.setState({
        ...userInfo.state,
        image: imgUrl,
      });
      setNotification(undefined);
      event.target.reset();
      setUrl(undefined);
    } else if (imgUploadUrl) {
      userInfo.setState({
        ...userInfo.state,
        image: imgUploadUrl,
      });
      setNotification(undefined);
      event.target.reset();
      setUpload(undefined);
    }
  } else {
    setNotification("URL or location of the image is invalid");
    event.target.reset();
  }
}

function Profile() {
  const userInfo = useContext(UserContext);
  const [inputState, setInputState] = useState(true);
  const [imgUrl, setUrl] = useState();
  const [imgUploadUrl, setUpload] = useState();
  const [notification, setNotification] = useState("");
  const history = useHistory();
  const windowWidth = window.innerWidth;

  console.log(imgUrl);
  console.log(imgUploadUrl);
  console.log(notification);

  return (
    <S.Main>
      <S.Wrapper>
        <ProfileBlock
          imgUrl={userInfo.state.image || DefaultPhoto}
          name={userInfo.state.name + " " + userInfo.state.surname}
          city={userInfo.state.city}
          classname="profile"
        />
        {windowWidth > 767 && (
          <ImageUploader
            callBackBtn={() => setNotification("")}
            callBackUpload={(e) => {
              if (!imgUrl) {
                const files = e.target.files[0];
                setUpload(URL.createObjectURL(files));
              } else {
                setNotification("Only one picture is allowed");
              }
            }}
            callBackUrl={(e) => {
              if (!imgUploadUrl) {
                setUrl(e.target.value);
              } else {
                setNotification("Only one picture is allowed");
              }
            }}
            handleSubmit={(e) => {
              e.preventDefault();
              uploadImgSubmit(
                imgUploadUrl,
                imgUrl,
                userInfo,
                setNotification,
                e,
                setUrl,
                setUpload
              );
            }}
            notification={notification}
          />
        )}
      </S.Wrapper>
      <S.Container
        onSubmit={(e) => {
          e.preventDefault();
          setInputState(true);
        }}
      >
        <S.Edit
          onClick={() => {
            setInputState(!inputState);
          }}
        />
        <S.Title>Edit your profile</S.Title>
        <InputField
          label="Name"
          type="text"
          disabled={inputState}
          value={userInfo.state.name}
          handleChange={(e) => {
            userInfo.setState({ ...userInfo.state, name: e.target.value });
          }}
        />
        <InputField
          label="Surname"
          type="text"
          value={userInfo.state.surname}
          disabled={inputState}
          handleChange={(e) => {
            userInfo.setState({ ...userInfo.state, surname: e.target.value });
          }}
        />
        <InputField
          label="Email"
          type="email"
          value={userInfo.state.email}
          disabled={inputState}
          handleChange={(e) => {
            userInfo.setState({ ...userInfo.state, email: e.target.value });
          }}
        />
        <S.FlexWrapper>
          <S.Box
            gender={userInfo.state.gender}
            value="female"
            onClick={() =>
              userInfo.setState({ ...userInfo.state, gender: "female" })
            }
          >
            Female
          </S.Box>
          <S.Box
            gender={userInfo.state.gender}
            value="male"
            onClick={() =>
              userInfo.setState({ ...userInfo.state, gender: "male" })
            }
          >
            Male
          </S.Box>
          <S.Box
            gender={userInfo.state.gender}
            value="other"
            onClick={() =>
              userInfo.setState({ ...userInfo.state, gender: "other" })
            }
          >
            Other
          </S.Box>
        </S.FlexWrapper>
        <InputField
          label="City"
          type="text"
          value={userInfo.state.city}
          disabled={inputState}
          handleChange={(e) => {
            userInfo.setState({ ...userInfo.state, city: e.target.value });
          }}
        />
        <Button type="submit">Update</Button>
        <S.BackIcon
          src={BackArrow}
          alt="Go back"
          onClick={() => history.goBack()}
        />
      </S.Container>
    </S.Main>
  );
}

export default Profile;
