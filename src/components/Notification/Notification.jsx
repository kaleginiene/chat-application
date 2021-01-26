import React from "react";
import * as S from "./Notification.style";

function Notification({ notification, handleClick }) {
  return (
    <>
      {notification && (
        <S.Notification>
          <S.Exit onClick={handleClick} />
          {notification}
        </S.Notification>
      )}
    </>
  );
}

export default Notification;
