'use client'
import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { FaRupeeSign, FaUserFriends } from 'react-icons/fa'
import {
  HomeIcon,
  BanknotesIcon,
  ShieldCheckIcon,
  ClockIcon,
  TicketIcon,
  UserGroupIcon,
  QuestionMarkCircleIcon,
  StarIcon,
} from '@heroicons/react/24/outline'

export default function DetailsBar() {
  const [isOpen, setIsOpen] = useState(false)
  const [isMobile, setIsMobile] = useState(false)

  // check screen size
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 640) // sm breakpoint
    }
    handleResize()
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  return (
    <div className="min-h-screen flex">
      {/* Hamburger button (only mobile) */}
      {isMobile && (
        <div className="sm:hidden p-4">
          <button
            onClick={() => setIsOpen(true)}
            className="p-2 rounded-md bg-white/70 shadow-md"
          >
            <span className="block w-6 h-0.5 bg-black mb-1"></span>
            <span className="block w-6 h-0.5 bg-black mb-1"></span>
            <span className="block w-6 h-0.5 bg-black"></span>
          </button>
        </div>
      )}

      {/* Sidebar */}
      <motion.ul
        initial={isMobile ? { x: '-100%' } : false}
        animate={isMobile ? (isOpen ? { x: 0 } : { x: '-100%' }) : { x: 0 }} 
        transition={{ type: 'spring', stiffness: 80, damping: 20 }}
        className={`sm:relative fixed top-0 left-0 
    h-auto w-[16rem] sm:w-[18rem] p-4 space-y-13
    bg-white/40 shadow-lg z-40 `}
      >
        {/* Close button only mobile */}
        {isMobile && (
          <div className="flex justify-end">
            <button
              onClick={() => setIsOpen(false)}
              className="p-2 text-gray-600 hover:text-black"
            >
              ✕
            </button>
          </div>
        )}

        {/* Sidebar items */}
        <li className="flex items-center gap-3 pl-6 sm:pl-10">
          <a href="/profile" className="flex items-center gap-3">
            <HomeIcon className="w-6 h-6 text-orange-500" />
            <span className="hover:text-blue-600 cursor-pointer">
              Account Settings
            </span>
          </a>
        </li>

        <li className="flex items-center gap-3 pl-6 sm:pl-10">
          <BanknotesIcon className="w-6 h-6 text-orange-500" />
          <a href="/profile/MyEarning" className="items-center flex gap-3">
            <span className="hover:text-blue-600 cursor-pointer break-words">
              My earning
            </span>
          </a>
        </li>

        <li className="flex items-center gap-3 pl-6 sm:pl-10">
          <FaRupeeSign className="w-6 h-6 text-orange-500" />
          <a className="items-center flex gap-3">
            <span className="hover:text-blue-600 cursor-pointer break-words">
              Payment
            </span>
          </a>
        </li>

        <li className="flex items-center gap-3 pl-6 sm:pl-10">
          <ClockIcon className="w-6 h-6 text-orange-500" />
          <a href="/profile/History"className="items-center flex gap-3">
            <span className="hover:text-blue-600 cursor-pointer break-words">
              History
            </span>
          </a>
        </li>

        <li className="flex items-center gap-3 pl-6 sm:pl-10">
          <TicketIcon className="w-6 h-6 text-orange-500" />
          <a className="items-center flex gap-3">
            <span className="hover:text-blue-600 cursor-pointer break-words">
              Missing Cashback
            </span>
          </a>
        </li>

        <li className="flex items-center gap-3 pl-6 sm:pl-10">
          <UserGroupIcon className="w-6 h-6 text-orange-500" />
          <a href="/profile/ReferalEarn" className="items-center flex gap-3">
            <span className="hover:text-blue-600 cursor-pointer break-words">
              Referal & Earn
            </span>
          </a>
        </li>

        <li className="flex items-center gap-3 pl-6 sm:pl-10">
          <QuestionMarkCircleIcon className="w-6 h-6 text-orange-500" />
          <a href='/profile/help' className="items-center flex gap-3">
            <span className="hover:text-blue-600 cursor-pointer break-words">
              Help
            </span>
          </a>
        </li>

        <li className="flex items-center gap-3 pl-6 sm:pl-10">
          <FaUserFriends className="w-6 h-6 text-orange-500" />
          <a href="/profile/MyReferal" className="items-center flex gap-3">
            <span className="hover:text-blue-600 cursor-pointer break-words">
              My Referal
            </span>
          </a>
        </li>

        <li className="flex items-center gap-3 pl-6 sm:pl-10">
          <StarIcon className="w-6 h-6 text-orange-500" />
          <a href="/profile/Review" className="items-center flex gap-3">
            <span className="cursor-pointer hover:text-blue-600">Review</span>
          </a>
        </li>

        <li className="flex items-center gap-3 pl-6 sm:pl-10">
          <ShieldCheckIcon className="w-6 h-6 text-orange-500" />
          <a href="/profile/PrivacyPolicy" className="flex gap-3">
            <span className="hover:text-blue-600 cursor-pointer break-words">
              Privacy Policy
            </span>
          </a>
        </li>
      </motion.ul>

      {/* Overlay for mobile */}
      {isMobile && isOpen && (
        <div
          className="fixed inset-0 bg-black/40 sm:hidden z-40"
          onClick={() => setIsOpen(false)}
        />
      )}
    </div>
  )
}
