import React from "react";
import * as S from "./Header.style";
import { Link, useLocation } from "react-router-dom";
import logoImg from "../../assets/logo.png";

function Header() {
  const currentLocation = useLocation();

  return (
    <>
      {currentLocation.pathname !== "/" && (
        <S.Header>
          <S.Wrapper>
            <Link to="/">
              <S.Logo src={logoImg} alt="Logo" />
            </Link>
            <S.Actions>
              <S.StyledLink to="/">Home</S.StyledLink>
              <S.StyledLink to="/about">About</S.StyledLink>
            </S.Actions>
          </S.Wrapper>
        </S.Header>
      )}
    </>
  );
}

export default Header;
