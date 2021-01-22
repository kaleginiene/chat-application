import React, { useEffect, useState, useContext } from "react";
import { ChatContext } from "../../contexts/ChatContext";
import { ChatBar, ChatBubble, InputField } from "../../components";
import * as S from "./Chats.style";

function Chats() {
  const [data, setData] = useState(); //storing data from API.
  const senderID = useContext(ChatContext); //storing chatID data for displaying chat bubbles in the chatbox
  const [message, setMessage] = useState(""); //storing message from an input

  useEffect(() => {
    //getting data from API
    fetch("https://api.jsonbin.io/b/60098ea2a3d8a0580c345ecb/8", {
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
        <S.Form onSubmit={(e) => e.preventDefault()}>
          <InputField
            type="text"
            placeholder="Enter your message..."
            handleChange={(e) => setMessage(e.target.value)}
          />
        </S.Form>
      </S.Container>
    </S.Main>
  );
}

export default Chats;
