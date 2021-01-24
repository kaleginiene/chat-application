import React, { useEffect, useState, useContext } from "react";
import { ChatContext } from "../../contexts/ChatContext";
import { ChatBar, ChatBubble, InputField } from "../../components";
import * as S from "./Chats.style";

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

function Chats() {
  const [data, setData] = useState(); //storing data from API.
  console.log(data);
  const senderID = useContext(ChatContext); //storing chatID data for displaying chat bubbles in the chatbox
  const [message, setMessage] = useState({
    id: null,
    user_id: "user",
    text: "",
  }); //storing message from an input

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
        <S.Title>Chats</S.Title>
        <ChatBar
          chats={data ? data.results.chats : []}
          users={data ? data.results.users : []}
        />
      </S.SideBar>
      <S.Container>
        {senderID.state !== null && (
          <ChatBubble
            chat={data.results.chats.filter(
              (chat) => chat.user_id === senderID.state
            )}
          />
        )}
        {senderID.state !== null && (
          <S.Form
            onSubmit={(e) => {
              e.preventDefault();
              if (message.text.length > 0) {
                const theChat = data.results.chats.filter(
                  //filtering chat by userID from API data
                  (chat) => chat.user_id === senderID.state
                );
                theChat[0].messages.push(message);
                setMessage({ ...message, id: null, text: "" });
                postMessage(data);
                e.target.reset();
              }
            }}
          >
            <InputField
              type="text"
              placeholder="Enter your message..."
              handleChange={(e) => {
                const theChat = data.results.chats.filter(
                  //filtering chat by userID from API data
                  (chat) => chat.user_id === senderID.state
                );
                setMessage({
                  ...message,
                  id: theChat[0].messages.length + 1,
                  text: e.target.value,
                });
              }}
            />
          </S.Form>
        )}
      </S.Container>
    </S.Main>
  );
}

export default Chats;
