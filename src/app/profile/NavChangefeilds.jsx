"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function NavChnagefeilds() {
  const pathname = usePathname();

  return (
    <ul className="flex gap-5">
      <li>
        <Link
          href="/profile"
          className={`${
            pathname === "/profile"
              ? "underline decoration-2 underline-offset-4 text-orange-600"
              : "text-gray-700 hover:text-orange-600"
          }`}
        >
          Personal Details
        </Link>
      </li>
      <li>
        <Link
          href="/profile/PasswordChange"
          className={`${
            pathname === "/profile/PasswordChange"
              ? "underline decoration-2 underline-offset-4 text-orange-600"
              : "text-gray-700 hover:text-orange-600"
          }`}
        >
          Password
        </Link>
      </li>
    </ul>
  );
}
