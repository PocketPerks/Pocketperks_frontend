"use client";

import { X } from "lucide-react";
import { useState } from "react";

interface ChatBoxProps {
  onClose: () => void;
}

export default function ChatBox({ onClose }: ChatBoxProps) {
  const [messages, setMessages] = useState<string[]>([]);
  const [input, setInput] = useState("");

  const sendMessage = () => {
    if (input.trim() === "") return;
    setMessages((prev) => [...prev, input]);
    setInput("");
  };

  return (
    <div className="fixed bottom-4 right-4 w-80 max-w-[90vw] bg-white border border-gray-300 rounded-2xl shadow-2xl flex flex-col overflow-hidden z-[60]">
      <div className="flex justify-between items-center bg-gray-100 px-4 py-2 border-b border-gray-300">
        <h2 className="font-semibold text-gray-800">Chat Support</h2>
        <button onClick={onClose} className="text-gray-600 hover:text-gray-800">
          <X className="w-5 h-5" />
        </button>
      </div>

      <div className="flex-1 overflow-y-auto px-3 py-2 space-y-2 max-h-60">
        {messages.length === 0 ? (
          <p className="text-gray-500 text-sm text-center mt-4">
            Start a conversation!
          </p>
        ) : (
          messages.map((msg, idx) => (
            <div key={idx} className="bg-blue-100 text-gray-900 rounded-lg px-3 py-1.5 w-fit max-w-[80%] ml-auto">
              {msg}
            </div>
          ))
        )}
      </div>

      <div className="flex items-center border-t border-gray-300 p-2 bg-gray-50">
        <input
          type="text"
          placeholder="Type a message..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && sendMessage()}
          className="flex-1 px-3 py-1.5 rounded-xl border border-gray-300 focus:outline-none focus:ring-1 focus:ring-blue-400 text-sm"
        />
        <button
          onClick={sendMessage}
          className="ml-2 bg-black text-white text-sm px-3 py-1.5 rounded-xl hover:bg-gray-800"
        >
          Send
        </button>
      </div>
    </div>
  );
}
