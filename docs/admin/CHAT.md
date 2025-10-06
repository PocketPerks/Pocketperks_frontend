# Chat Module

This document describes the Admin Chat module under `src/components/admin/chat/`.

## Overview
A modular chat interface for admins to handle user conversations. It includes a sidebar with tabs and contacts, a message thread with auto‑scroll, and a send box. State and mock data are isolated so you can swap in real APIs later.

## File tree
```
src/components/admin/chat/
├─ index.ts                         # barrel exports (ChatPage, hooks, components)
├─ types.ts                         # TabKey, Message, Contact, ConversationMap
├─ data/
│  ├─ contacts.mock.ts              # sample contacts grouped by tab
│  └─ conversations.mock.ts         # sample messages keyed by contactId
├─ hooks/
│  └─ useChat.ts                    # chat state/logic: tabs, selection, messages, send
├─ ChatPage.tsx                     # page container (layout only)
└─ components/
   ├─ ChatBubbles.tsx               # thread (auto-scroll to bottom)
   ├─ ChatInput.tsx                 # input + Send button
   ├─ ChatTabs.tsx                  # Pending | Visited | Resolved
   ├─ ContactList.tsx               # contacts list with unread badges
   ├─ EmptyState.tsx                # fallback when no contacts
   └─ Header.tsx                    # title bar
```

## Types (types.ts)
- `TabKey` = 'Pending' | 'Visited' | 'Resolved'
- `Message`: `{ sender, time, message, status, isYou, avatar }`
- `Contact`: `{ id, name, avatar, lastMessage, tab, unread }`
- `ConversationMap`: `Record<number, Message[]>`

## Hook: useChat
Manages all state and returns the minimal API to compose the UI.
- `tabs: TabKey[]` – the available tabs
- `activeTab, setActiveTab(tab: TabKey)` – switching tab also selects the first contact of that tab
- `selectedContact, setSelectedContact(id: number)`
- `filteredContacts: Contact[]` – contacts for the active tab
- `messages: Message[]` – thread for the selected contact
- `input, setInput(val: string)` – controlled input
- `send()` – appends a new `Message` for the selected contact (time and basic metadata are generated)

## ChatPage composition
ChatPage is a layout-only component that wires the hook outputs into smaller presentational components.
- Sidebar: `<Header />`, `<ChatTabs />`, `<ContactList />`
- Thread: `<ChatBubbles />`
- Composer: `<ChatInput />`

## UI/UX notes
- ChatBubbles auto‑scrolls to the newest message using a sentinel ref.
- ContactList renders unread badges and highlights the selected entry.
- ChatInput disables Send when the input is empty and supports Enter‑to‑send.
- All components are client components; Tailwind is used for styling.

## Replacing mock data with real APIs
1) Replace `data/contacts.mock.ts` and `data/conversations.mock.ts` with service calls (REST or GraphQL).
2) Update `useChat` to fetch contacts for the active tab and messages for `selectedContact`.
3) Implement `send()` to call your backend (POST /messages) and optimistically update local state.
4) Optional: subscribe to live updates (WebSocket/SSE) for new messages/unread counts.

### Suggested backend shapes
- `GET /admin/chat/contacts?tab=Pending` -> `Contact[]`
- `GET /admin/chat/conversations/:contactId` -> `Message[]`
- `POST /admin/chat/conversations/:contactId/messages` -> `{ ok: true }`
- Message fields should include a stable `id` and an ISO timestamp; the UI can format `time`.

## Accessibility
- Send button has `aria-label="Send message"`.
- Colors have sufficient contrast; keyboard users can send with Enter.

## Extending
- Typing indicator: add `isTyping` state in the hook and a small component below ChatBubbles.
- Read receipts: use `status` to display Delivered/Read ticks.
- Attachments: extend Message with `files?: Attachment[]` and add UI to ChatInput.
- Pagination: load more messages on scroll‑up and prepend them to the thread.
