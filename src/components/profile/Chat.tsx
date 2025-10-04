"use client";

import React, { useState } from "react";
import ChatBubbles from "../admin/chat/components/ChatBubbles";
import ChatInput from "../admin/chat/components/ChatInput";
import Header from "../admin/chat/components/Header";
import { Message } from "../admin/chat/types";

export default function Chat() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState("");
  const [showFaq, setShowFaq] = useState(true);

  const faqs = [
    "How do I redeem a perk?",
    "What is PocketPerk Pro?",
    "How can I contact support?",
    "Where can I see my rewards?",
  ];

  const send = (text?: string) => {
    const content = (text ?? input).trim();
    if (!content) return;

    const newMessage: Message = {
      sender: "You",
      time: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
      message: content,
      status: "Sent",
      isYou: true,
      avatar: "/logos/pfp.jpg",
    };

    setMessages((prev) => [...prev, newMessage]);
    if (!text) setInput("");
    if (showFaq) setShowFaq(false);
  };

  const handleSendClick = () => send();

  return (
    <div className="flex flex-col h-[80vh] md:h-[calc(100vh-6rem)] font-sans bg-gray-50 rounded-2xl shadow overflow-hidden">
      {/* Header to match admin UI style */}
      <div className="bg-white border-b border-gray-200">
        <Header />
      </div>

      {/* Main chat area (no contact list) */}
      <section className="relative flex-1 flex flex-col bg-gray-50">
        {/* Blur entire chat (messages + input) while FAQ overlay is visible */}
        <div className={(showFaq ? "filter blur-[2px] pointer-events-none " : "") + "relative flex-1 flex flex-col"}>
          <ChatBubbles messages={messages} />
          <ChatInput input={input} setInput={setInput} onSend={handleSendClick} />
        </div>

        {/* FAQ overlay (click sends from user side or click outside to close) */}
        {showFaq && (
          <div
            className="absolute inset-0 flex items-center justify-center bg-black/20"
            onClick={() => setShowFaq(false)}
          >
            <div
              className="mx-4 md:mx-8 w-full md:max-w-2xl bg-white/80 backdrop-blur-md border border-gray-200 rounded-2xl shadow-lg p-6"
              onClick={(e) => e.stopPropagation()}
            >
              <h2 className="text-lg md:text-xl font-semibold text-black mb-4">Quick questions</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {faqs.map((q) => (
                  <button
                    key={q}
                    onClick={() => send(q)}
                    className="text-left px-4 py-3 rounded-xl border border-gray-200 bg-white hover:bg-gray-50 transition shadow-sm text-sm md:text-base text-black"
                  >
                    {q}
                  </button>
                ))}
              </div>
              <p className="text-xs text-gray-600 mt-4">Select a question above or type your own below.</p>
            </div>
          </div>
        )}
      </section>
    </div>
  );
}