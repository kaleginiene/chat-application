import React, { useContext } from "react";
import { UserContext } from "../../contexts/UserContext";
import * as S from "./Header.style";
import { useLocation } from "react-router-dom";
import DefaultPhoto from "../../assets/default.png";

function Header() {
  const currentLocation = useLocation();
  const userInfo = useContext(UserContext);
  console.log(userInfo);

  return (
    <>
      {currentLocation.pathname !== "/" && (
        <S.Header>
          <S.Wrapper>
            <S.Picture src={DefaultPhoto} alt="User image" />
            {userInfo.state.name + " " + userInfo.state.surname}
          </S.Wrapper>
        </S.Header>
      )}
    </>
  );
}

export default Header;
