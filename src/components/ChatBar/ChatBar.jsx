import React, { useContext, useState } from "react";
import { ChatContext } from "../../contexts/ChatContext";
import * as S from "./ChatBar.style";
import DefaultPhoto from "../../assets/default.png";

function findLastMessage(chats, userID) {
  if (chats.length > 0) {
    const filteredChats = chats.filter((chat) => chat.user_id === userID); //filtering messages, that includes userID
    if (filteredChats.length === 1) {
      //checking if there is any chat that includes userID
      const lastItem =
        filteredChats[0].messages[filteredChats[0].messages.length - 1]; //getting the last object of the chat, that includes userID
      return lastItem.text; //returning last message
    } else {
      return "";
    }
  }
}

function ChatBar({ chats, users }) {
  const senderID = useContext(ChatContext); //storing user_id data for displaying chat bubbles in the chatbox
  const [display, setDisplay] = useState(false);
  console.log(senderID.state);

  return (
    <>
      {users.length > 0
        ? // eslint-disable-next-line array-callback-return
          users.map((item) => {
            if (item.id !== senderID.state) {
              return (
                <S.Block
                  key={item.id}
                  onClick={() => {
                    senderID.setState(item.id);
                  }}
                  display={display.toString()}
                >
                  <S.Picture src={item.image || DefaultPhoto} />
                  <S.Wrapper>
                    <S.Title>{item.name + " " + item.surname}</S.Title>
                    <S.LastMessage>
                      {findLastMessage(chats, item.id)}
                    </S.LastMessage>
                  </S.Wrapper>
                </S.Block>
              );
            } else if (item.id === senderID.state) {
              return (
                <S.Block
                  key={item.id}
                  onClick={() => {
                    senderID.setState(item.id);
                  }}
                  className="active"
                >
                  <S.Picture src={item.image || DefaultPhoto} />
                  <S.Wrapper>
                    <S.Title>{item.name + " " + item.surname}</S.Title>
                    <S.LastMessage>
                      {findLastMessage(chats, item.id)}
                    </S.LastMessage>
                  </S.Wrapper>
                </S.Block>
              );
            }
          })
        : users.length > 0 && display
        ? users
            .filter((user) => user.id === senderID.state)
            .map((item) => (
              <S.Block
                key={item.id}
                onClick={(e) => {
                  senderID.setState(null);
                  setDisplay(!display);
                }}
              >
                <S.Picture src={item.image || DefaultPhoto} />
                <S.Title>{item.name + " " + item.surname}</S.Title>
              </S.Block>
            ))
        : "Sorry, there is no chats to show"}
    </>
  );
}

export default ChatBar;
