"use client"
import { useState } from 'react';
import styles from './HamburgerMenu.module.css';

const HamburgerMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
        <div 
          className={`${styles.navIcon} ${isOpen ? styles.open : ''} z-10`}
          onClick={handleClick}
        >
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
        </div>
        
    <div className={`${styles.sidebar} ${isOpen? styles.active:''}`}>
        <ul>
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/about">About</a>
          </li>
          <li>
            <a href="/contact">Contact</a>
          </li>
        </ul>
    <div >
    </div>
    </div>
    </div>
  );
};

export default HamburgerMenu;