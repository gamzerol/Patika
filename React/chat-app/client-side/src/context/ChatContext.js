import { createContext, useContext, useState } from "react";

const ChatContext = createContext();

export const ChatProvider = ({ children }) => {
  const [messages, setMessage] = useState([
    {
      message: "Selam",
    },
    {
      message: "Naber?",
    },
  ]);
  const values = { messages, setMessage };

  return <ChatContext.Provider value={values}>{children}</ChatContext.Provider>;
};

export const useChat = () => useContext(ChatContext);
