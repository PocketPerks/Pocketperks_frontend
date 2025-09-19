'use client';

import { useState, useRef, useEffect } from 'react';
import Image from 'next/image';

type Message = {
  sender: string;
  time: string;
  message: string;
  status: string;
  isYou: boolean;
  avatar: string;
};

const contacts = [
  { id: 1, name: 'Aditya', avatar: '/logos/pfp.jpg', lastMessage: 'last message they sent or new message', tab: 'Pending', unread: 2 },
  { id: 2, name: 'Priya', avatar: '/logos/pfp.jpg', lastMessage: 'Can you help me with my order?', tab: 'Pending', unread: 3 },
  { id: 3, name: 'Rahul', avatar: '/logos/pfp.jpg', lastMessage: 'Thank you for your help!', tab: 'Visited', unread: 0 },
  { id: 4, name: 'Sara', avatar: '/logos/pfp.jpg', lastMessage: 'I have another question.', tab: 'Visited', unread: 0 },
  { id: 5, name: 'John', avatar: '/logos/pfp.jpg', lastMessage: 'When will my product arrive?', tab: 'Visited', unread: 0 },
  { id: 6, name: 'Emma', avatar: '/logos/pfp.jpg', lastMessage: 'Issue resolved, thanks!', tab: 'Resolved', unread: 0 },
];

// convos
const initialConversations: Record<number, Message[]> = {
  1: [
    {
      sender: 'Aditya',
      time: '12:00',
      message: 'Hi, I need help!',
      status: 'Delivered',
      isYou: false,
      avatar: '/logos/pfp.jpg',
    },
  ],
  2: [
    {
      sender: 'Priya',
      time: '12:10',
      message: 'Can you help me with my order?',
      status: 'Delivered',
      isYou: false,
      avatar: '/logos/pfp.jpg',
    },
  ],
  3: [],
  4: [],
  5: [],
  6: [],
};

const ChatBubbles = ({ messages }: { messages: Message[] }) => {
  const bottomRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  return (
    <div className="flex-1 p-3 md:p-8 overflow-y-auto bg-gray-50">
      {/* ma msg */}
      <div className="flex flex-col space-y-4">
        {messages.map((bubble: Message, index: number) => (
          <div
            key={index}
            className={`flex items-end gap-2 ${bubble.isYou ? 'justify-end' : 'justify-start'}`}
          >
            {!bubble.isYou && (
              <div className="w-8 h-8 rounded-full overflow-hidden flex-shrink-0 mt-2 border border-gray-200">
                <Image src={bubble.avatar} alt={`${bubble.sender}'s avatar`} width={32} height={32} className="object-cover" />
              </div>
            )}

            <div
              className={`p-4 rounded-2xl max-w-xs md:max-w-sm shadow-sm ${
                bubble.isYou
                  ? 'bg-black text-white self-end rounded-br-none'
                  : 'bg-white text-gray-900 self-start rounded-bl-none border border-gray-200'
              } relative`}
            >
              <div className="flex items-baseline space-x-2">
                <span className="font-semibold text-xs md:text-sm">{bubble.isYou ? 'You' : bubble.sender}</span>
                <span className="text-xs opacity-60">{bubble.time}</span>
              </div>
              <p className="mt-1 break-words">{bubble.message}</p>
              <span className="block text-[10px] opacity-50 mt-1 text-right">{bubble.status}</span>
            </div>

            {bubble.isYou && (
              <div className="w-8 h-8 rounded-full overflow-hidden flex-shrink-0 mt-2 border border-gray-200">
                <Image src={bubble.avatar} alt="Your avatar" width={32} height={32} className="object-cover" />
              </div>
            )}
          </div>
        ))}
        <div ref={bottomRef} />
      </div>
    </div>
  );
};



export default function ChatPage() {
  const [conversations, setConversations] = useState(initialConversations);
  const [input, setInput] = useState('');
  const [activeTab, setActiveTab] = useState('Pending');
  const [selectedContact, setSelectedContact] = useState(contacts[0].id);

  const tabs = ['Pending', 'Visited', 'Resolved'];

  const filteredContacts = contacts.filter((c) => c.tab === activeTab);
  const messages = conversations[selectedContact] || [];

  const handleSend = () => {
    if (!input.trim()) return;

    const newMessage: Message = {
      sender: 'You',
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      message: input,
      status: 'Sent',
      isYou: true,
      avatar: '/logos/pfp.jpg',
    };

    setConversations((prev) => ({
      ...prev,
      [selectedContact]: [...(prev[selectedContact] || []), newMessage], //msg stays in the selected contact
    }));

    setInput('');
  };

  return (
    <div className="flex flex-col md:flex-row h-[80vh] md:h-[calc(100vh-6rem)] font-sans bg-gray-50 rounded-2xl shadow overflow-hidden">
      {/* ContactArea */}
      <aside className="w-full md:w-1/4 min-w-[250px] border-r border-gray-200 bg-white flex flex-col">
        <h1 className="text-2xl md:text-3xl font-bold px-4 pt-4 pb-2">Chat</h1>

        {/*tabs*/}
        <nav className="flex gap-6 border-b border-gray-200 px-4 bg-white sticky top-0 z-10">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => {
                setActiveTab(tab);
                const first = contacts.find((c) => c.tab === tab);
                if (first) setSelectedContact(first.id);
              }}
              className={`relative py-3 text-base font-semibold transition-colors
                ${activeTab === tab ? 'text-black' : 'text-gray-500 hover:text-black'}
              `}
              style={{ background: 'none', border: 'none' }}
            >
              {tab}
              {activeTab === tab && (
                <span className="absolute left-0 -bottom-[2px] w-full h-[2px] bg-black rounded" />
              )}
            </button>
          ))}
        </nav>

        {/* ContactList */}
        <div className="flex-1 overflow-y-auto space-y-1 px-2 py-2">
          {filteredContacts.map((contact) => (
            <div
              key={contact.id}
              onClick={() => setSelectedContact(contact.id)}
              className={`relative flex items-center space-x-4 p-2 rounded-xl cursor-pointer transition-colors
                ${selectedContact === contact.id ? 'bg-gray-200' : 'hover:bg-gray-100'}
              `}
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
          {filteredContacts.length === 0 && (
            <div className="text-gray-400 text-center py-8">No contacts</div>
          )}
        </div>
      </aside>

      {/*Chat Area*/}
      <section className="flex-1 flex flex-col bg-gray-50">
        <ChatBubbles messages={messages} />
        <div className="flex items-center gap-2 p-4 bg-white border-t border-gray-200 sticky bottom-0">
          <div className="flex-1 relative">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && handleSend()}
              placeholder="Type your message…"
              className="w-full py-3 pl-5 pr-14 rounded-full border border-gray-300 bg-gray-50 focus:outline-none focus:ring-2 focus:ring-black/30 text-base shadow-sm transition placeholder-gray-400 text-black"
            />
          </div>
          <button
            onClick={handleSend}
            disabled={!input.trim()}
            className={`flex items-center justify-center px-6 py-3 rounded-full font-semibold transition-colors shadow
              ${
                input.trim()
                  ? 'bg-black text-white hover:bg-gray-800 focus:ring-2 focus:ring-black/30'
                  : 'bg-gray-200 text-gray-400 cursor-not-allowed'
              }
            `}
            aria-label="Send message"
          >
            <span className="font-bold tracking-wide">Send</span>
          </button>
        </div>
      </section>
    </div>
  );
}
