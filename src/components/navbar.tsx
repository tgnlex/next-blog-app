"use client"
import './css/navbar.css';
import Link from 'next/link';
const Navbar = () => {
  return (
    <nav id="navbar" className="flex flex-col place-content-center place-items-center">
      <ul id="nav-list" className="flex flex-row place items-start">
        <li className="nav-item space-x-1">
          <Link href="/" className="nav-link px-8">Home</Link>
        </li>
        <li className="nav-item ml-8">          
          <Link href="/blog" className="nav-link px-8">Blog</Link>
        </li> 
        <li className="nav-item ml-8">
          <Link href="/profile" className="nav-link px-8">Profile</Link>
        </li>
        <li className="nav-item ml-8">
          <Link href="/about" className="nav-link px-8">About</Link>
        </li>
        <li className="nav-item ml-8">
          <Link href="/auth/login" className="nav-link px-8">Login</Link>
        </li>
      </ul>
    </nav>
  )
}

export default Navbar;