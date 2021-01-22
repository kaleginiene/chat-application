import React, { useContext } from "react";
import { ChatContext } from "../../contexts/ChatContext";
import * as S from "./ChatBar.style";

function findLastMessage(chats, userID) {
  const filteredChats = chats.filter((chat) => chat.user_id === userID); //filtering messages, that includes userID
  const lastItem =
    filteredChats[0].messages[filteredChats[0].messages.length - 1]; //getting the last object of the chat, that includes userID
  return lastItem.text; //returning last message
}

function ChatBar({ chats, users }) {
  const senderID = useContext(ChatContext); //storing user_id data for displaying chat bubbles in the chatbox

  return (
    <>
      {users.length > 0 &&
        users.map((item) => (
          <S.Block key={item.id} onClick={() => senderID.setState(item.id)}>
            <S.Picture src={item.image} />
            <S.Wrapper>
              <S.Title>{item.name + " " + item.surname}</S.Title>
              <S.LastMessage>{findLastMessage(chats, item.id)}</S.LastMessage>
            </S.Wrapper>
          </S.Block>
        ))}
    </>
  );
}

export default ChatBar;
