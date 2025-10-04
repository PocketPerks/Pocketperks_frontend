"use client";

import React from "react";
import ChatBubbles from "./Chat/ChatBubbles";
import ChatTabs from "./Chat/Chattabs";
import ChatInput from "./Chat/ChatInput";
import ContactList from "./Chat/ContactList";
import EmptyState from "./Chat/EmptyState";
import Header from "./Chat/Header";
import { useChat } from "./hooks/useChat";

export default function ChatPage() {

  
  const {
    tabs,
    activeTab,
    setActiveTab,
    filteredContacts,
    selectedContact,
    setSelectedContact,
    messages,
    input,
    setInput,
    send,
  } = useChat();
   const currentContact = filteredContacts.find(c => c.id === selectedContact);

  return (
    <div className="flex flex-col md:flex-row h-[80vh] md:h-[calc(100vh-6rem)] font-sans bg-gray-50 rounded-2xl shadow overflow-hidden">
      <aside className="w-full md:w-1/4 min-w-[250px] border-r border-gray-200 bg-white flex flex-col">
        <Header />
        <ChatTabs tabs={tabs} activeTab={activeTab} setActiveTab={setActiveTab} />
        {filteredContacts.length > 0 ? (
          <ContactList contacts={filteredContacts} selectedContact={selectedContact} setSelectedContact={setSelectedContact} />
        ) : (
          <EmptyState label="No contacts" />)
        }
      </aside>

      <section className="flex-1 flex flex-col bg-gray-50">
       <ChatBubbles messages={messages} />
        <ChatInput input={input} setInput={setInput} username={currentContact?.name || "You"} />

      </section>
    </div>
  );
}