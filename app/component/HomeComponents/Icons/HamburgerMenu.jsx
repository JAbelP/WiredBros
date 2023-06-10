"use client"
import { useState } from 'react';
import styles from './HamburgerMenu.module.css';
import Link from 'next/link';

const HamburgerMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const handleClick = () => {
    console.log("isOpen ")
    setIsOpen(!isOpen);
  };


  return (
    <div >
        <div 
          className={`${styles.navIcon} ${isOpen ? styles.open : ''} z-30`}
          onClick={handleClick}
        >
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
        </div>
        
    <div className={`fixed w-1/2 h-full text-black bg-blue-600 right-0 top-0 duration-300 z-20 transition-transform transform ${isOpen?("-translate-x-0"):("translate-x-full")} text-center text-5xl pt-36`}>
    <ul>

      <li className="pb-10">
        <Link href={"/"}>
          <p onClick={handleClick}>Home</p>
        </Link>
      </li>

      <li>
        <Link href={"/Book"}>
          <p onClick={handleClick}>Book Us</p>
        </Link>
      </li>
      </ul>
    </div>
    <div onClick={handleClick} className={`fixed w-1/2 h-full bg-blue-950 opacity-75 left-0 top-0 duration-300 z-20 transition-transform transform ${isOpen?("translate-x-0"):("-translate-x-full")} text-center text-5xl pt-36`}/>
    </div>
  );
};

export default HamburgerMenu;