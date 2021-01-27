import React from "react";
import { useHistory } from "react-router-dom";
import * as S from "./ProfileBlock.style";
import { BackArrowMobile } from "../../assets";

function ProfileBlock({ handleClick, imgUrl, name, city }) {
  const history = useHistory();

  return (
    <S.Block>
      <S.MobBackBtn
        src={BackArrowMobile}
        alt="Back button"
        onClick={() => history.goBack()}
      />
      <S.Edit onClick={handleClick} />
      <S.Picture src={imgUrl} alt="User image" onClick={handleClick} />
      <S.Title>{name}</S.Title>
      <S.Subtitle>{city}</S.Subtitle>
    </S.Block>
  );
}

export default ProfileBlock;
