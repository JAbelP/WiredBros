"use client"
import { useState } from 'react';
import styles from './HamburgerMenu.module.css';

const HamburgerMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className='w-screen'>
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
    <div className={`${isOpen ?('hidden'):('visible')} grid grid-cols-2`}>
      {/* I would like to make a transition from h-0 to h-screen that eases in and out in a .5s manner  */}
      
      <div className={`${styles.grayColumn} ${isOpen ? styles.open:''}`}>
      </div>
    
      <div className='h-screen bg-gray-400 w-full   top-0'>
      </div>
    </div>
    </div>
  );
};

export default HamburgerMenu;