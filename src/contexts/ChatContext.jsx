import React, { createContext, useState } from "react";

export const ChatContext = createContext();

export const ChatProvider = ({ children }) => {
  const [state, setState] = useState(null);

  return (
    <ChatContext.Provider value={{ state, setState }}>
      {children}
    </ChatContext.Provider>
  );
};

export default ChatProvider;
