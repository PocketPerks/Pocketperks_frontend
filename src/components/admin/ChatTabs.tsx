import React from "react";

interface ChatTabsProps {
  tabs: string[];
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

const ChatTabs: React.FC<ChatTabsProps> = ({ tabs, activeTab, setActiveTab }) => (
  <nav className="flex gap-6 border-b border-gray-200 px-4 bg-white sticky top-0 z-10">
    {tabs.map((tab) => (
      <button
        key={tab}
        onClick={() => setActiveTab(tab)}
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
);

export default ChatTabs;