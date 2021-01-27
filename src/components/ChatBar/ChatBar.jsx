import React, { useContext } from "react";
import { useHistory } from "react-router-dom";
import PropTypes from "prop-types";
import { ChatContext } from "../../contexts/ChatContext";
import { Loader } from "../../components";
import * as S from "./ChatBar.style";
import { BackArrowMobile, DefaultPhoto } from "../../assets";

function findLastMessage(chats, userID) {
  if (chats.length > 0) {
    const filteredChats = chats.filter((chat) => chat.user_id === userID); //filtering messages, that includes userID
    if (filteredChats.length === 1) {
      //checking if there is any chat that includes userID
      const lastItem =
        filteredChats[0].messages[filteredChats[0].messages.length - 1]; //getting the last object of the chat, that includes userID
      return lastItem.text; //returning last message
    }
  } else {
    return "";
  }
}

function ChatBar({ chats, users }) {
  const senderID = useContext(ChatContext); //storing user_id data for displaying chat bubbles in the chatbox
  const windowWidth = window.innerWidth;
  const history = useHistory();

  console.log(windowWidth);
  console.log(senderID.state);

  return (
    <>
      {users.length > 0 ? ( //checking if there are any users
        // eslint-disable-next-line array-callback-return
        users.map((item) => {
          if (
            !senderID.state ||
            (item.id !== senderID.state && windowWidth > 767) //if there is no senderID set and it's not mobile viewport, then return all the items
          ) {
            return (
              <S.Block
                key={item.id}
                onClick={() => {
                  senderID.setState(item.id); //when the block is clicked, then store the item.id into the context
                }}
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
          } else if (windowWidth > 767 && item.id === senderID.state) {
            //when the viewport is wider then 767px and the senderID is set, then returning the block with the active class which returns different style for the active block
            return (
              <S.Block
                key={item.id}
                onClick={() => {
                  senderID.setState(null); //if the user clicks the active block, then senderID becomes null and the chatbox resets
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
          } else if (windowWidth < 768 && item.id === senderID.state) {
            //if the viewport is mobile and the senderID matches the item id, then return block with the different style for mobile
            return (
              <S.Block
                key={item.id}
                onClick={() => {
                  senderID.setState(null); //if the user clicks the active block, then senderID becomes null and the chatbox resets
                }}
                className="active-mobile"
              >
                <S.MobBackBtn
                  src={BackArrowMobile}
                  alt="Back button"
                  onClick={() => history.push("/chats")}
                />
                <S.Picture src={item.image || DefaultPhoto} />
                <S.Title>{item.name + " " + item.surname}</S.Title>
              </S.Block>
            );
          } else if (windowWidth < 768 && item.id !== senderID.state) {
            //if the viewport is mobile and the senderID doesn't match the item id, then return nothing
            return <></>;
          }
        })
      ) : (
        <Loader /> //if there is no chat's returning loading spinner. When the error is catched from the server, then ChatBar block disappears and the notification block appears
      )}
    </>
  );
}

ChatBar.propTypes = {
  chats: PropTypes.array.isRequired,
  users: PropTypes.array.isRequired,
};

export default ChatBar;
