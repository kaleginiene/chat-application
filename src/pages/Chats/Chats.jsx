import React, { useEffect, useContext, useState } from "react";
import { useHistory } from "react-router-dom";
import { ChatContext } from "../../contexts/ChatContext";
import { UserContext } from "../../contexts/UserContext";
import {
  Button,
  ChatBar,
  ChatBubble,
  InputField,
  Notification,
  ProfileBlock,
} from "../../components";
import * as S from "./Chats.style";
import {
  AddChat,
  ChattingPeople,
  DefaultPhoto,
  EditIcon,
  SendIcon,
  SendIconMobile,
} from "../../assets";

function postMessage(data, setNotification) {
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
    .catch((err) => {
      setNotification("Something went wrong");
      console.log(err.message);
    });
}

function setMessageID(data, senderID, setNotification, vanishMode) {
  //setting the message id for the new chats
  const theChat = data.results.chats.filter(
    //filtering messages by userID from API data
    (chat) => chat.user_id === senderID.state
  );
  if (theChat.length === 1 && !vanishMode) {
    //if there were a chat with the user and the vanish mode is false, then id of the new message is going to be messages quantity + 1
    const newMsgID = theChat[0].messages.length + 1;
    return newMsgID;
  } else if (theChat.length === 1 && vanishMode) {
    //if there were a chat with the user and the vanish mode is true, then create an ID for vanishing messages
    const newMsgID = theChat[0].vanish_messages.length + 1;
    return newMsgID;
  } else if (theChat.length === 0) {
    //if there were no messages with the user, then for the first message setting the id 1
    return 1;
  } else {
    //if theChat.length is more than 1 it means,that there are duplicates and something went wrong
    setNotification("Wrong user. Try to login again");
  }
}

//sending message function, when user submits
function sendMessageSubmit(
  data,
  event,
  message,
  senderID,
  setMessage,
  setNotification,
  setData,
  vanishMode
) {
  event.preventDefault();
  if (message.text.length > 0) {
    const theChat = data.results.chats.filter(
      //filtering chat by userID from API data
      (chat) => chat.user_id === senderID.state
    );
    if (theChat.length === 1) {
      theChat[0].messages.push(message);
    } else {
      createNewChat(data, setData, message, senderID, vanishMode);
    }
    postMessage(data, setNotification); //run function for posting message into the API
    setMessage({ ...message, id: null, text: "" }); //when the message is sent, reset message state and the form event targets
    event.target.reset();
  }
}

//creating new chat if there isn't any
function createNewChat(data, setData, message, senderID, vanishMode) {
  const chats = data.results.chats; // chats from API
  const newChatID = chats.length + 1; //new ID is calculatated
  const newChat = {
    //set newChat values
    id: newChatID,
    user_id: senderID.state,
    messages: [],
    vanish_messages: [],
  };

  if (message.id !== null && message.text.length > 0 && !vanishMode) {
    newChat.messages.push(message); //if there is a message, the push data into newChat array
    chats.push(newChat);
    setData(data); //updateing data, that there wouldnt be necessary to refresh the page
  } else if (message.id !== null && message.text.length > 0 && vanishMode) {
    newChat.vanish_messages.push(message); //if there is a message, the push data into newChat array
    chats.push(newChat);
    setData(data); //updateing data, that there wouldnt be necessary to refresh the page
  } else {
    return chats;
  }
}

function filterVanishModeUser(data, setChatBar, vanishModeUser) {
  //Filtering chatBar by input value
  if (data) {
    const users = data.results.users;

    if (vanishModeUser) {
      const filteredUsers = users.filter(
        //filtering values if it includes the input value
        (x) =>
          x.name.toLowerCase().includes(vanishModeUser.toLowerCase()) ||
          x.surname.toLowerCase().includes(vanishModeUser.toLowerCase())
      );
      if (filteredUsers.length > 0 && vanishModeUser.length > 0) {
        setChatBar(filteredUsers); //set chatbar list by filtered value
      } else {
        setChatBar(users); //if there is no such value return all users
      }
    } else {
      setChatBar(users); //if there isn't vanish mode, than return all users
    }
  }
}

//-----Functions for sending messages on VANISH MODE
function sendVanishModeMessage(
  data,
  event,
  message,
  senderID,
  setNotification,
  setMessage,
  setData,
  setVanishedMessageID,
  vanishMode
) {
  event.preventDefault();
  if (message.text.length > 0) {
    const theChat = data.results.chats.filter(
      //filtering chat by userID from API data
      (chat) => chat.user_id === senderID.state
    );

    if (theChat.length === 0) {
      createNewChat(data, setData, message, senderID, vanishMode); //if there is any chats, then run function to create new chat
      data.results.chats.filter((chat) => chat.user_id === senderID.state); //filtering chats again to get new chat
    } else if (theChat.length === 1) {
      theChat[0].vanish_messages.push(message); //if the chat is the one, push the message into the vanish_messages
      const messageIndex = theChat[0].vanish_messages.findIndex(
        (x) => x.id === message.id
      ); //find the index of the message
      postMessage(data, setNotification); //post updated data into the server
      setTimeout(() => {
        theChat[0].vanish_messages.splice(messageIndex, 1); //after 10sec remove the message from the vanish messages array
        setVanishedMessageID(message.id); //setting the message id, so that it wouldn't be necesarry to refresh the page
        postMessage(data, setNotification); //post to the API new data
      }, 10000);
    }

    setMessage({ ...message, id: null, text: "" }); //reset meessage state after updating data into the server
    setVanishedMessageID(null); //reset vanished message id
    event.target.reset();
  }
}

function Chats() {
  const history = useHistory();
  const [data, setData] = useState(undefined); //storing data from API.
  const senderID = useContext(ChatContext); //storing chatID data for displaying chat bubbles in the chatbox
  const userInfo = useContext(UserContext);
  const [message, setMessage] = useState({
    id: null,
    user_id: "user",
    text: "",
  }); //storing message from an input
  const [notification, setNotification] = useState();
  const windowWidth = window.innerWidth;
  const [vanishMode, setVanishMode] = useState(false);
  const [vanishModeUser, setVanishModeUser] = useState("");
  const [chatBar, setChatBar] = useState([]);
  const [vanishedMessageID, setVanishedMessageID] = useState(null);

  useEffect(() => {
    //getting data from API
    fetch("https://api.jsonbin.io/b/60098ea2a3d8a0580c345ecb/11", {
      headers: {
        "secret-key":
          "$2b$10$QSzsWWZX0dZ9oTgYIiTRiu3aQI9EEFsc/amKTuuQ0dGl3lLeFV5ju",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        setData(data);
        setChatBar(data.results.users);
      })
      .catch((error) => {
        console.log(error.message);
        setNotification("Something went wrong with the server");
      });
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
        {windowWidth < 768 && (
          <S.FlexBlock
            className="flex-block"
            onClick={() => {
              setVanishMode(!vanishMode);
              senderID.setState(null);
            }}
          >
            <S.AddChat src={AddChat} alt="Add a vanish mode chat" />
            Create a vanish mode chat
          </S.FlexBlock>
        )}
        {windowWidth > 767 ? ( //if the window width is more than 767px then always show the title
          <S.Title>Conversations</S.Title>
        ) : windowWidth < 768 && !senderID.state ? ( //if the window is less than 767px, then show title only when the sender id is not set
          <S.Title>Conversations</S.Title>
        ) : (
          <></>
        )}
        <S.Block className="aside">
          {data ? (
            <ChatBar
              chats={data.results.chats || []}
              users={!chatBar ? data.results.users : chatBar}
            />
          ) : (
            <Notification notification={notification} />
          )}
        </S.Block>

        {windowWidth > 767 && (
          <S.FlexBlock
            className="flex-block"
            onClick={() => {
              setVanishMode(!vanishMode);
              senderID.setState(null);
            }}
          >
            <S.AddChat src={AddChat} alt="Add a vanish mode chat" />
            Create a vanish mode chat
          </S.FlexBlock>
        )}
      </S.SideBar>
      <S.Wrapper>
        {vanishMode && (
          <S.Title>
            This is a Vanish Mode. Your messages are going to be visible only
            for 10 seconds!
          </S.Title>
        )}
        <S.Container display={senderID.state} vanishMode={vanishMode}>
          {!senderID.state && !vanishMode && (
            <S.Block>
              <S.Picture
                src={ChattingPeople}
                alt="Choose the person to chat with"
              />
              <S.Title>Choose the person to chat with!</S.Title>
            </S.Block>
          )}
          {vanishMode && !senderID.state && (
            <S.Block>
              <S.Title>Choose the person to chat with on Vanish mode!</S.Title>
              <S.Form
                onSubmit={(e) => {
                  e.preventDefault();
                  filterVanishModeUser(data, setChatBar, vanishModeUser);
                }}
              >
                <InputField
                  type="text"
                  placeholder="Choose the person..."
                  handleKeyUp={(e) => {
                    setVanishModeUser(e.target.value);
                    filterVanishModeUser(data, setChatBar, vanishModeUser);
                  }}
                />
                <S.Icon />
              </S.Form>
            </S.Block>
          )}
          <S.ScrollWrapper>
            {senderID.state !== null &&
            data && ( //if there is userID, data and vanishMode is false then show the chat where the userID is included
                <ChatBubble
                  chat={data.results.chats.filter(
                    (chat) => chat.user_id === senderID.state
                  )}
                  users={data.results.users}
                  vanishMode={vanishMode}
                  vanishedMessageID={vanishedMessageID}
                />
              )}
          </S.ScrollWrapper>

          {senderID.state !== null && ( //if there is userID and vanish mode is false, then show the message input
            <S.Form
              onSubmit={(e) => {
                if (!vanishMode) {
                  sendMessageSubmit(
                    data,
                    e,
                    message,
                    senderID,
                    setNotification,
                    setMessage,
                    setData,
                    vanishMode
                  );
                } else if (vanishMode) {
                  sendVanishModeMessage(
                    data,
                    e,
                    message,
                    senderID,
                    setMessage,
                    setNotification,
                    setData,
                    setVanishedMessageID,
                    vanishMode
                  );
                }
              }}
            >
              <InputField
                type="text"
                placeholder="Type your message here..."
                handleChange={(e) => {
                  setMessage({
                    ...message,
                    id: setMessageID(
                      data,
                      senderID,
                      setNotification,
                      vanishMode
                    ),
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
