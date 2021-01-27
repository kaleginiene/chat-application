import React, { useContext, useState } from "react";
import { ChatContext } from "../../contexts/ChatContext";
import { Loader } from "../../components";
import * as S from "./ChatBar.style";
import { DefaultPhoto } from "../../assets";

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
  const windowWidth = window.innerWidth;

  console.log(windowWidth);
  console.log(display);
  console.log(senderID.state);

  return (
    <>
      {users.length > 0 && !display ? (
        // eslint-disable-next-line array-callback-return
        users.map((item) => {
          if (item.id !== senderID.state) {
            return (
              <S.Block
                key={item.id}
                onClick={() => {
                  senderID.setState(item.id);
                  setDisplay(!display);
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
                  setDisplay(!display);
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
      ) : users.length > 0 && display && windowWidth < 678 ? (
        users
          .filter((user) => user.id === senderID.state)
          .map((item) => (
            <S.Block
              key={item.id}
              onClick={(e) => {
                senderID.setState(null);
                setDisplay(!display);
              }}
              className="selected"
            >
              <S.Picture src={item.image || DefaultPhoto} />
              <S.Title>{item.name + " " + item.surname}</S.Title>
            </S.Block>
          ))
      ) : (
        <Loader />
      )}
    </>
  );
}

export default ChatBar;
