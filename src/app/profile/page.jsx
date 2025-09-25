// UserProfileNextJS.jsx
// Next.js-compatible React component (single-file). Uses Tailwind CSS for styling.
// Paste this file into your Next.js `app` or `pages` folder and ensure Tailwind is configured.

'use client'
import { useState } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

export default function UserProfile() {
  const [form, setForm] = useState({
    firstName: 'satyam',
    lastName: 'jain',
    username: 'Satyam123',
    email: 'example@gmail.com',
    password: ''
  })

  function handleChange(e) {
    const { name, value } = e.target
    setForm(prev => ({ ...prev, [name]: value }))
  }

  function handleSave(e) {
    e.preventDefault()
    alert('Save changes (mock)\n' + JSON.stringify(form, null, 2))
  }

  function handleUpdatePassword(e) {
    e.preventDefault()
    alert('Password updated (mock)')
  }

  return (
    <div className="min-h-screen  w-full bg-gray-50 pt-3">
      <div className="w-full mx-auto rounded-lg bg-white">
        <Navbar/>

        <main className="p-2 mt-5 ">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Left column: avatar + nav */}
            <aside className="md:col-span-1 bg-gray-100 rounded-lg p-6 flex flex-col items-center">
              <div className="w-32 h-32 rounded-full bg-white border flex items-center justify-center overflow-hidden">
                {/* placeholder avatar */}
                <img
                  src="https://via.placeholder.com/120"
                  alt="avatar"
                  className="w-full h-full object-cover"
                />
              </div>

              <nav className="mt-6  w-full">
                <ul className="space-y-4 text-center text-lg font-medium">
                  <li  className="py-2 ">Account</li>
                  <li className="py-2">My Earnings</li>
                  <li className="py-2">Payment</li>
                  <li className="py-2">History</li>
                  <li className="py-2">Referral & Earn</li>
                  <li className="py-2"><a href='/profile/help'>Help</a></li>
                </ul>
              </nav>
            </aside>

            {/* Right column: main form area */}
            <section className="md:col-span-2 bg-gray-50 rounded-lg p-3 shadow-2xl">
              <h2 className="text-3xl font-extrabold mb-6">Account</h2>

              <form onSubmit={handleSave} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium mb-2">Username</label>
                    <input
                      name="username"
                      value={form.username}
                      onChange={handleChange}
                      className="w-full rounded-md border px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-300"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">password</label>
                    <input
                      name="lastName"
                      value={form.lastName}
                      onChange={handleChange}
                      className="w-full rounded-md border px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-300"
                    />
                  </div>

                 

                  <div className='ml-[12rem] w-full'>
                    <label className="text-sm font-medium mb-2">Email</label>
                    <input
                      name="email"
                      value={form.email}
                      onChange={handleChange}
                      className="w-full rounded-md border px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-300"
                    />
                  </div>
                </div>

                <div>
                  <button
                    type="submit"
                    className="inline-block bg-black text-white px-4 py-2 rounded-md text-sm font-semibold"
                  >
                    Save Changes
                  </button>
                </div>
              </form>

              <hr className="my-8" />

              <div>
                <h3 className="text-2xl font-extrabold mb-4">Password</h3>

                <form onSubmit={handleUpdatePassword} className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium mb-2">New password</label>
                    <input
                      name="password"
                      value={form.password}
                      onChange={handleChange}
                      type="password"
                      placeholder="********"
                      className="w-full rounded-md border px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-300"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2">Repeat password</label>
                    <input
                      type="password"
                      placeholder="********"
                      className="w-full rounded-md border px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-300"
                    />
                  </div>

                  <div className="sm:col-span-2">
                    <button className="mt-2 bg-black text-white px-4 py-2 rounded-md text-sm font-semibold">Update Password</button>
                  </div>
                </form>
              </div>
            </section>
          </div>
        </main>
<div className='mt-10'>
    <Footer/>
    </div>
      </div>
    </div>
  )
}
