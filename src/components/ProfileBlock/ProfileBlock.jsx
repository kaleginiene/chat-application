import React from "react";
import { useLocation } from "react-router-dom";
import PropTypes from "prop-types";
import { useHistory } from "react-router-dom";
import * as S from "./ProfileBlock.style";
import { BackArrowMobile, RadioActive } from "../../assets";

function ProfileBlock({ handleClick, imgUrl, name }) {
  const currentLocation = useLocation();
  const history = useHistory();
  const windowWidth = window.innerWidth;

  return (
    <S.Block>
      <S.Wrapper>
        <S.MobBackBtn
          src={BackArrowMobile}
          alt="Back button"
          onClick={() => history.goBack()}
        />
        {currentLocation.pathname !== "/profile" && windowWidth > 767 && (
          <S.Edit onClick={handleClick} />
        )}
        <S.Picture src={imgUrl} alt="User image" onClick={handleClick} />
        <S.Title>{name}</S.Title>
      </S.Wrapper>
      {windowWidth > 767 && (
        <S.Wrapper>
          <S.Activity src={RadioActive} />
          <S.Text>Active</S.Text>
        </S.Wrapper>
      )}
    </S.Block>
  );
}

ProfileBlock.propTypes = {
  handleClick: PropTypes.func,
  imgUrl: PropTypes.string,
  name: PropTypes.string,
};

export default ProfileBlock;
