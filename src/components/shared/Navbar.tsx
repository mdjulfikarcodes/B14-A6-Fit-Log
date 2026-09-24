import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import logo from '@/assets/logo.png'

const Navbar = () => {
  return (
    <nav className='bg-black shadow-sm'>
      <div className="navbar">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg aria-label="Menu" xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
            </div>
            <ul
              tabIndex={-1}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
              <li><a>Item 1</a></li>
              <li>
                <a>Parent</a>
                <ul className="p-2">
                  <li><a>Submenu 1</a></li>
                  <li><a>Submenu 2</a></li>
                </ul>
              </li>
              <li><a>Item 3</a></li>
            </ul>
          </div>
          <Image src={logo} alt='fitlog logo' />
          <h2 className='font-bold text-amber-50 mx-1 text-1.5xl'>FITLOG</h2>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li>
              <Link
                href="/"
                className="font-semibold hover:bg-lime-950 hover:rounded-3xl text-amber-50 hover:text-lime-400 active:bg-transparent"
              >
                Workouts
              </Link>
            </li>

            <li>
              <Link
                href="/"
                className="font-semibold text-amber-50 hover:bg-lime-950 hover:rounded-3xl hover:text-lime-400 active:bg-transparent"
              >
                My Plan
              </Link>
            </li>
          </ul>
        </div>
        <div className="flex items-center gap-10 navbar-end">
          <button className="flex items-center gap-3 text-0.5xl font-semibold cursor-pointer text-[#a5a7ad]">
            Plan
            <span className="flex h-7 w-7 items-center justify-center rounded-full bg-[#b6ff00] text-[18px] font-bold text-black">
              0
            </span>
          </button>

          <button className="flex items-center gap-3 text-0.5xl font-semibold cursor-pointer text-[#a5a7ad]">
            Saved
            <span className="flex h-7 w-7 items-center justify-center rounded-full border border-[#30343d] text-[18px] text-[#c5c7cc]">
              0
            </span>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;