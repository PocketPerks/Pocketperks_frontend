"use client";

import React, { useEffect } from "react";
import { io } from "socket.io-client";

interface ChatInputProps {
  input: string;
  setInput: (val: string) => void;
  username: string; // user ka naam bhejna hai to
}

const socket = io("http://localhost:3001"); // 👈 backend socket server ka URL

const ChatInput: React.FC<ChatInputProps> = ({ input, setInput, username }) => {

  useEffect(() => {
    socket.on("connect", () => {
      console.log("✅ Connected to Socket.io Server");
    });

    return () => {
      socket.disconnect();
      console.log("❌ Disconnected");
    };
  }, []);

  const handleSend = () => {
  if (!input.trim()) return;

  const messageData = {
    user: username,
    text: input,
    time: new Date().toLocaleTimeString(),
  };

  console.log("Sending message:", messageData);  // ✅ ye browser console me show hoga

  socket.emit("chatMessage", messageData);

  setInput("");
};


  return (
    <div className="flex items-center gap-2 p-4 bg-white border-t border-gray-200 sticky bottom-0">
      <div className="flex-1 relative">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && handleSend()}
          placeholder="Type your message…"
          className="w-full py-3 pl-5 pr-14 rounded-full border border-gray-300 bg-gray-50 focus:outline-none focus:ring-2 focus:ring-black/30 text-base shadow-sm transition placeholder-gray-400 text-black"
        />
      </div>
      <button
        onClick={handleSend}
        disabled={!input.trim()}
        className={`flex items-center justify-center px-6 py-3 rounded-full font-semibold transition-colors shadow
          ${input.trim()
            ? "bg-black text-white hover:bg-gray-800 focus:ring-2 focus:ring-black/30"
            : "bg-gray-200 text-gray-400 cursor-not-allowed"}
        `}
        aria-label="Send message"
      >
        <span className="font-bold tracking-wide">Send</span>
      </button>
    </div>
  );
};

export default ChatInput;
