import React, { useContext } from "react";
import PropTypes from "prop-types";
import { ChatContext } from "../../contexts/ChatContext";
import { UserContext } from "../../contexts/UserContext";
import * as S from "./ChatBubble.style";
import { DefaultPhoto } from "../../assets";

function CheckType(text) {
  if (text.user_id === "user") {
    return "out";
  } else {
    return "in"; //based on the user_id value, adding a type for chat bubble
  }
}

function ChatBubble({ chat, vanishMode, vanishedMessageID, users }) {
  const senderID = useContext(ChatContext);
  const userInfo = useContext(UserContext);
  const filteredUser = users
    ? users.filter((user) => user.id === senderID.state)
    : [];
  console.log(filteredUser);

  return (
    <>
      {chat.length > 0 && !vanishMode && chat[0].messages.length > 0 ? (
        chat[0].messages.map((
          text //returning every item of the array in a Block
        ) => (
          <S.Wrapper type={CheckType(text)} key={text.id}>
            {CheckType(text) === "in" && (
              <S.Picture
                src={
                  filteredUser.length === 1
                    ? filteredUser[0].image
                    : DefaultPhoto
                }
              />
            )}
            <S.Block type={CheckType(text)}>{text.text}</S.Block>
            {CheckType(text) === "out" && (
              <S.Picture
                src={userInfo.state.image ? userInfo.state.image : DefaultPhoto}
              />
            )}
          </S.Wrapper>
        )) //wrapper is needed for chat bubble alignment
      ) : chat.length > 0 && vanishMode ? (
        chat[0].vanish_messages
          .filter((x) => x.id !== vanishedMessageID)
          .map((
            text //returning every item of the array in a Block
          ) => (
            <S.Wrapper type={CheckType(text)} key={text.id}>
              <S.Picture />
              <S.Block type={CheckType(text)}>{text.text}</S.Block>
            </S.Wrapper>
          )) //wrapper is needed for chat bubble alignment
      ) : chat.length < 1 ||
        chat[0].vanish_messages.length === 0 ||
        chat[0].messages.length === 0 ? (
        <S.Notification>"There is no messsages yet"</S.Notification>
      ) : (
        <></>
      )}
    </>
  );
}

ChatBubble.propTypes = {
  chat: PropTypes.array,
  vanishMode: PropTypes.bool,
};

export default ChatBubble;
