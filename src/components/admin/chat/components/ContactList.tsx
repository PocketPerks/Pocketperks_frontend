"use client";

import React from "react";
import { Contact } from "../types";
import Image from "next/image";

export default function ContactList({ contacts, selectedContact, setSelectedContact }: { contacts: Contact[]; selectedContact: number; setSelectedContact: (id: number) => void; }) {
  return (
    <div className="flex-1 overflow-y-auto space-y-1 px-2 py-2">
      {contacts.map((contact) => (
        <div
          key={contact.id}
          onClick={() => setSelectedContact(contact.id)}
          className={`relative flex items-center space-x-4 p-2 rounded-xl cursor-pointer transition-colors ${selectedContact === contact.id ? 'bg-gray-200' : 'hover:bg-gray-100'}`}
        >
          {contact.unread > 0 && (
            <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full px-1.5 py-0.5 border border-white z-10 shadow">
              {contact.unread}
            </span>
          )}
          <div className="w-12 h-12 rounded-full bg-gray-300 border-2 border-white overflow-hidden flex-shrink-0 relative">
            <Image src={contact.avatar} alt={`${contact.name}'s avatar`} width={48} height={48} className="object-cover" />
          </div>
          <div className="flex-1 min-w-0">
            <h3 className="text-base font-semibold text-black truncate">{contact.name}</h3>
            <p className="text-xs text-gray-500 truncate">{contact.lastMessage}</p>
          </div>
        </div>
      ))}
      {contacts.length === 0 && (
        <div className="text-gray-400 text-center py-8">No contacts</div>
      )}
    </div>
  );
}
