// pages/users.tsx
import React from "react";
import UserCard, { User } from "@/components/admin/UserCard";

// Users Page
const UsersPage: React.FC = () => {
  const users: User[] = [
    {
      id: 1,
      name: "Alice",
      email: "alice@example.com",
      status: "Active",
      cbEarned: 120,
      avatar: "/logos/pfp.jpg",
      role: "Admin",
      joined: "2023-01-12",
      lastLogin: "2025-09-20",
    },
    {
      id: 2,
      name: "Bob",
      email: "bob@example.com",
      status: "Active",
      cbEarned: 230,
      avatar: "/logos/pfp.jpg",
      role: "User",
      joined: "2023-02-18",
      lastLogin: "2025-09-23",
    },
    {
      id: 3,
      name: "Charlie",
      email: "charlie@example.com",
      status: "Suspended",
      cbEarned: 10,
      avatar: "/logos/pfp.jpg",
      joined: "2023-03-05",
      lastLogin: "2025-08-11",
    },
    {
      id: 4,
      name: "Diana",
      email: "diana@example.com",
      status: "Active",
      cbEarned: 200,
      avatar: "/logos/pfp.jpg",
      role: "Manager",
      joined: "2023-04-20",
      lastLogin: "2025-09-24",
    },
    {
      id: 5,
      name: "Eve",
      email: "eve@example.com",
      status: "Inactive",
      cbEarned: 40,
      avatar: "/logos/pfp.jpg",
      role: "User",
      joined: "2023-05-15",
      lastLogin: "2025-09-10",
    },
    {
      id: 6,
      name: "Frank",
      email: "frank@example.com",
      status: "Inactive",
      cbEarned: 430,
      avatar: "/logos/pfp.jpg",
      role: "Moderator",
      joined: "2023-06-01",
      lastLogin: "2025-09-18",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-100 p-8 text-black">
      <h1 className="text-3xl font-bold mb-8">Users</h1>
      <div className="grid grid-cols-2 gap-6">
        {users.map((user) => (
          <UserCard key={user.id} user={user} />
        ))}
      </div>
    </div>
  );
};

export default UsersPage;
