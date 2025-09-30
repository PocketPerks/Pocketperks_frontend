export type TabKey = 'Pending' | 'Visited' | 'Resolved';

export type Message = {
  sender: string;
  time: string; // HH:mm
  message: string;
  status: string; // Sent | Delivered | Read
  isYou: boolean;
  avatar: string;
};

export type Contact = {
  id: number;
  name: string;
  avatar: string;
  lastMessage: string;
  tab: TabKey;
  unread: number;
};

export type ConversationMap = Record<number, Message[]>;
