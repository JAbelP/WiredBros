import React from 'react'
import HambugerMenu from "./Icons/HamburgerMenu";

export const Headers =() => {
  return (
    <div className='bg-purple-600 w-screen text-center h-16'>
        <div className='flex justify-end'>
            <HambugerMenu/>
        </div>
    </div>
  )
}
