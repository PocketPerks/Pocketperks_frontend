import { Contact } from "../types";

export const contacts: Contact[] = [
  { id: 1, name: 'Aditya', avatar: '/logos/pfp.jpg', lastMessage: 'last message they sent or new message', tab: 'Pending', unread: 2 },
  { id: 2, name: 'Priya', avatar: '/logos/pfp.jpg', lastMessage: 'Can you help me with my order?', tab: 'Pending', unread: 3 },
  { id: 3, name: 'Rahul', avatar: '/logos/pfp.jpg', lastMessage: 'Thank you for your help!', tab: 'Visited', unread: 0 },
  { id: 4, name: 'Sara', avatar: '/logos/pfp.jpg', lastMessage: 'I have another question.', tab: 'Visited', unread: 0 },
  { id: 5, name: 'John', avatar: '/logos/pfp.jpg', lastMessage: 'When will my product arrive?', tab: 'Visited', unread: 0 },
  { id: 6, name: 'Emma', avatar: '/logos/pfp.jpg', lastMessage: 'Issue resolved, thanks!', tab: 'Resolved', unread: 0 },
];