import React from "react";
import PropTypes from "prop-types";
import * as S from "./ChatBubble.style";

function CheckType(text) {
  if (text.user_id === "user") {
    return "out";
  } else {
    return "in"; //based on the user_id value, adding a type for chat bubble
  }
}

function ChatBubble({ chat }) {
  return (
    <>
      {chat.length === 1 ? (
        chat[0].messages.map((
          text //returning every item of the array in a Block
        ) => (
          <S.Wrapper type={CheckType(text)} key={text.id}>
            <S.Block type={CheckType(text)}>{text.text}</S.Block>
          </S.Wrapper>
        )) //wrapper is needed for chat bubble alignment
      ) : (
        <S.Notification>"There is no messsages yet"</S.Notification>
      )}
    </>
  );
}

ChatBubble.propTypes = {
  chat: PropTypes.array,
};

export default ChatBubble;
