import React from "react";
import * as S from "./ProfileBlock.style";

function ProfileBlock({ handleClick, imgUrl, name, city }) {
  return (
    <S.Block>
      <S.Edit onClick={handleClick} />
      <S.Picture src={imgUrl} alt="User image" />
      <S.Title>{name}</S.Title>
      <S.Subtitle>{city}</S.Subtitle>
    </S.Block>
  );
}

export default ProfileBlock;
