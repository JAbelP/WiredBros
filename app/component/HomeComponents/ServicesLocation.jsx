import React from 'react'
import Image from 'next/image'
import florida from "../../../public/Florida.svg"

export const ServicesLocation = () => {

  return (
<div className='text-5xl p-6'>
  <p className='text-stroke'>
    <span className='text-white'>
      servicing Locations all across Florida
    </span>
  </p>
  <div className='absolute right-1/3 top-60  opacity-60'>
    <Image src={florida} alt="florida" width={200} height={200} />
  </div>
</div>

  )
}
