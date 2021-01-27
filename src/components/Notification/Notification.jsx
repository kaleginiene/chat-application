import React from "react";
import PropTypes from "prop-types";
import * as S from "./Notification.style";

function Notification({ handleClick, notification }) {
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

Notification.propTypes = {
  handleClick: PropTypes.func,
  notification: PropTypes.string,
};

export default Notification;
