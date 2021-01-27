import React, { useEffect, useState, useContext, useRef } from "react";
import { useHistory } from "react-router-dom";
import { ChatContext } from "../../contexts/ChatContext";
import { UserContext } from "../../contexts/UserContext";
import {
  Button,
  ChatBar,
  ChatBubble,
  InputField,
  ProfileBlock,
} from "../../components";
import * as S from "./Chats.style";
import {
  DefaultPhoto,
  EditIcon,
  SendIcon,
  SendIconMobile,
  ChattingPeople,
} from "../../assets";

function postMessage(data) {
  //updating data with new messages into the server
  fetch("https://api.jsonbin.io/b/60098ea2a3d8a0580c345ecb", {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      "secret-key":
        "$2b$10$QSzsWWZX0dZ9oTgYIiTRiu3aQI9EEFsc/amKTuuQ0dGl3lLeFV5ju",
      versioning: "false",
    },
    body: JSON.stringify(data),
  })
    .then((res) => res.json())
    .then((data) => console.log(data))
    .catch((err) => console.log(err));
}

function setMessageID(data, senderID) {
  //setting the message id for the new chats
  const theChat = data.results.chats.filter(
    //filtering messages by userID from API data
    (chat) => chat.user_id === senderID.state
  );
  if (theChat.length === 1) {
    //if there were a chat with the user, then id of the new message is going to be messages quantity + 1
    const newMsgID = theChat[0].messages.length + 1;
    console.log("additional message");
    return newMsgID;
  } else {
    //if there were no messages with the user, then for the first message setting the id 1
    console.log("new message");
    console.log(theChat);
    return 1;
  }
}

function createNewChat(data, setData, message, senderID) {
  const chats = data.results.chats;
  const newChatID = chats.length + 1;
  const newChat = {
    id: newChatID,
    user_id: senderID.state,
    messages: [],
  };
  if (message.id !== null && message.text.length > 0) {
    newChat.messages.push(message);
    chats.push(newChat);
    setData(data);
  } else {
    return chats;
  }
}

function Chats() {
  const history = useHistory();
  const [data, setData] = useState(); //storing data from API.
  const senderID = useContext(ChatContext); //storing chatID data for displaying chat bubbles in the chatbox
  const userInfo = useContext(UserContext);
  console.log(data);
  const [message, setMessage] = useState({
    id: null,
    user_id: "user",
    text: "",
  }); //storing message from an input
  const scrollRef = useRef();

  console.log(senderID.state);
  console.log(message);

  useEffect(() => {
    //getting data from API
    fetch("https://api.jsonbin.io/b/60098ea2a3d8a0580c345ecb/9", {
      headers: {
        "secret-key":
          "$2b$10$QSzsWWZX0dZ9oTgYIiTRiu3aQI9EEFsc/amKTuuQ0dGl3lLeFV5ju",
      },
    })
      .then((res) => res.json())
      .then((data) => setData(data));
  }, [setData]);

  return (
    <S.Main>
      <S.SideBar>
        <ProfileBlock
          editUrl={EditIcon}
          handleClick={() => history.push("/profile")}
          imgUrl={userInfo.state.image || DefaultPhoto}
          name={userInfo.state.name + " " + userInfo.state.surname}
          city={userInfo.state.city}
        />
        <S.Title>Conversations</S.Title>
        <ChatBar
          chats={data ? data.results.chats : []}
          users={data ? data.results.users : []}
        />
      </S.SideBar>
      <S.Wrapper>
        <S.Container display={senderID.state}>
          {!senderID.state && (
            <S.Block>
              <S.Picture src={ChattingPeople} alt="Choose the chat" />
              <S.Title>Choose the person to chat with!</S.Title>
            </S.Block>
          )}
          {senderID.state !== null &&
          data && ( //if there is userID, then show the chat where the userID is included
              <ChatBubble
                chat={data.results.chats.filter(
                  (chat) => chat.user_id === senderID.state
                )}
              />
            )}
          <span ref={scrollRef}></span>

          {senderID.state !== null && ( //if there is userID, then show the message input
            <S.Form
              onSubmit={(e) => {
                e.preventDefault();
                if (message.text.length > 0) {
                  const theChat = data.results.chats.filter(
                    //filtering chat by userID from API data
                    (chat) => chat.user_id === senderID.state
                  );
                  if (theChat.length === 1) {
                    theChat[0].messages.push(message);
                  } else {
                    createNewChat(data, setData, message, senderID);
                    console.log("message sent");
                  }
                  postMessage(data);
                  scrollRef.current.scrollIntoView({ behavior: "smooth" });
                  setMessage({ ...message, id: null, text: "" });
                  e.target.reset();
                }
              }}
            >
              <InputField
                type="text"
                placeholder="Type your message here..."
                handleChange={(e) => {
                  setMessage({
                    ...message,
                    id: setMessageID(data, senderID),
                    text: e.target.value,
                  });
                }}
              />
              <Button type="submit">
                Send <S.SendIcon src={SendIcon} />
              </Button>
              <S.SendIcon className="mobile" src={SendIconMobile} />
            </S.Form>
          )}
        </S.Container>
      </S.Wrapper>
    </S.Main>
  );
}

export default Chats;
