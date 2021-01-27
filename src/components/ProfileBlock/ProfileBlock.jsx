import React from "react";
import PropTypes from "prop-types";
import { useHistory } from "react-router-dom";
import * as S from "./ProfileBlock.style";
import { BackArrowMobile } from "../../assets";

function ProfileBlock({ handleClick, imgUrl, name }) {
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
    </S.Block>
  );
}

ProfileBlock.propTypes = {
  handleClick: PropTypes.func,
  imgUrl: PropTypes.string,
  name: PropTypes.string,
};

export default ProfileBlock;
