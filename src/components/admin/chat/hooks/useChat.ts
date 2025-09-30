"use client";

import { useMemo, useState } from "react";
import { contacts as initialContacts } from "../data/contacts.mock";
import { conversations as initialConversations } from "../data/conversations.mock";
import { ConversationMap, Message, TabKey } from "../types";

export function useChat() {
  const tabs: TabKey[] = ["Pending", "Visited", "Resolved"];
  const [activeTab, setActiveTab] = useState<TabKey>("Pending");
  const [selectedContact, setSelectedContact] = useState<number>(initialContacts.find(c => c.tab === "Pending")?.id || initialContacts[0]?.id || 1);
  const [input, setInput] = useState("");
  const [conversations, setConversations] = useState<ConversationMap>(initialConversations);

  const filteredContacts = useMemo(() => initialContacts.filter(c => c.tab === activeTab), [activeTab]);
  const messages = conversations[selectedContact] || [];

  const send = () => {
    if (!input.trim()) return;
    const newMessage: Message = {
      sender: "You",
      time: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
      message: input,
      status: "Sent",
      isYou: true,
      avatar: "/logos/pfp.jpg",
    };
    setConversations(prev => ({
      ...prev,
      [selectedContact]: [...(prev[selectedContact] || []), newMessage],
    }));
    setInput("");
  };

  const setTab = (tab: TabKey) => {
    setActiveTab(tab);
    const first = initialContacts.find(c => c.tab === tab);
    if (first) setSelectedContact(first.id);
  };

  return {
    tabs,
    activeTab,
    setActiveTab: setTab,
    selectedContact,
    setSelectedContact,
    filteredContacts,
    messages,
    input,
    setInput,
    send,
  };
}
