"use client";

import { MessageContext } from "@/context/messages";
import { FC, HTMLAttributes, useContext, useReducer } from "react";

interface ChatMessagesProps extends HTMLAttributes<HTMLDivElement> {}

const ChatMessages: FC<ChatMessagesProps> = ({ className, ...props }) => {
  const { messages } = useContext(MessageContext);
  const inverseMessages = [...messages].reverse();

  return (
    <div {...props} className="">
      chatMessages
    </div>
  );
};

export default ChatMessages;
