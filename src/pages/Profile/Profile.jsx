import React, { useContext, useState } from "react";
import { useHistory } from "react-router-dom";
import { UserContext } from "../../contexts/UserContext";
import {
  Button,
  ImageUploader,
  InputField,
  ProfileBlock,
} from "../../components";
import * as S from "./Profile.style";
import DefaultPhoto from "../../assets/default.png";

function checkValidUrl(imgUrl) {
  if (imgUrl && imgUrl.includes("blob:")) {
    return "exists";
  } else {
    const myRegex = /(http(s?):)([/|.|\w|\s|-])*\.(?:jpg|gif|png)/g;
    console.log(myRegex.test(imgUrl));
  }
}

function Profile() {
  const userInfo = useContext(UserContext);
  const [inputState, setInputState] = useState(true);
  const [imgUrl, setUrl] = useState();
  const [notification, setNotification] = useState();
  const history = useHistory();
  console.log(imgUrl);
  checkValidUrl(imgUrl);

  return (
    <S.Main>
      <S.Wrapper>
        <ProfileBlock
          imgUrl={userInfo.state.image || DefaultPhoto}
          name={userInfo.state.name + " " + userInfo.state.surname}
          city={userInfo.state.city}
          classname="profile"
        />
        <ImageUploader
          callBackUpload={(e) => {
            if (imgUrl.length === 0) {
              const files = e.target.files[0];
              setUrl(URL.createObjectURL(files));
            }
          }}
          callBackUrl={(e) => {
            setUrl(e.target.value);
          }}
          handleSubmit={(e) => {
            e.preventDefault();
            userInfo.setState({ ...userInfo.state, image: imgUrl });
          }}
        />
      </S.Wrapper>
      <S.Container
        onSubmit={(e) => {
          e.preventDefault();
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
        <Button
          type="submit"
          handleClick={() => {
            history.push("/chats");
          }}
        >
          Update
        </Button>
      </S.Container>
    </S.Main>
  );
}

export default Profile;
