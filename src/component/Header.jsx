import React from 'react'
import './Header.css'

const Header = () => {
  return (
    <header className="bg-gray-800 text-white py-6 rounded-lg mb-6 shadow-md">
      <h1 className="text-3xl font-bold mb-4 tracking-wide">
        Welcome to My Website!
      </h1>
      <nav className="flex justify-center gap-x-12">
        <a href="#">Home</a>
        <a href="#">About</a>
        <a href="#">Contact</a>
      </nav>
    </header>
  )
}

export default Header
