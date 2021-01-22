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
  const messagesList = chat[0].messages;
  console.log(messagesList);

  return (
    <>
      {messagesList.map((text) => (
        <S.Block type={CheckType(text)} key={text.id}>
          {text.text}
        </S.Block>
      ))}
    </>
  );
}

export default ChatBubble;
