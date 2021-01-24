import React from "react";
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
          <S.Block type={CheckType(text)} key={text.id}>
            {text.text}
          </S.Block>
        ))
      ) : (
        <S.Notification>"There is no messsages yet"</S.Notification>
      )}
    </>
  );
}

export default ChatBubble;
