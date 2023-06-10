import React from 'react';
import HambugerMenu from "./Icons/HamburgerMenu";
import Image from 'next/image';
import logoSvg from '../../../public/WIREDBROSVG.svg';

export const Headers = () => {
  return (
    <div className='bg-white text-blue-900 w-full pl-4 h-20 '>
      <div className='relative'>
          <div className='flex flex-row items-start h-0'>
            <Image src={logoSvg} alt="Logo" className='h-20 w-20' />
          </div>

        <div className='hidden lg:block absolute top-10 left-1/3 text-2xl font-semibold'>
          <div className='flex flex-row gap-x-10'>
            <p className='relative group'>
              IT Services
              <span className='absolute bottom-0 left-0 w-full bg-white h-0 transition-all duration-200 group-hover:h-1'></span>
            </p>
            <p className='relative group'>
              Website Design
              <span className='absolute bottom-0 left-0 w-full bg-white h-0 transition-all duration-200 group-hover:h-1'></span>
            </p>
            <p className='relative group'>
              VOIP
              <span className='absolute bottom-0 left-0 w-full bg-white h-0 transition-all duration-200 group-hover:h-1'></span>
            </p>
            <p className='relative group'>
              Contact
              <span className='absolute bottom-0 left-0 w-full bg-white h-0 transition-all duration-200 group-hover:h-1'></span>
            </p>
          </div>
        </div>
      </div>

      <div className='text-center lg:hidden'>
        <div className='flex justify-end'>
          <HambugerMenu/>
        </div>
      </div>
    </div>
  );
}
