"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { Message } from "./types";

export default function ChatBubbles({ messages }: { messages: Message[] }) {
  const bottomRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  return (
    <div className="flex-1 p-3 md:p-8 overflow-y-auto bg-gray-50">
      <div className="flex flex-col space-y-4">
        {messages.map((bubble, index) => (
          <div key={index} className={`flex items-end gap-2 ${bubble.isYou ? 'justify-end' : 'justify-start'}`}>
            {!bubble.isYou && (
              <div className="w-8 h-8 rounded-full overflow-hidden flex-shrink-0 mt-2 border border-gray-200">
                <Image src={bubble.avatar} alt={`${bubble.sender}'s avatar`} width={32} height={32} className="object-cover" />
              </div>
            )}
            <div className={`p-4 rounded-2xl max-w-xs md:max-w-sm shadow-sm ${bubble.isYou ? 'bg-black text-white self-end rounded-br-none' : 'bg-white text-gray-900 self-start rounded-bl-none border border-gray-200'} relative`}>
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
}
