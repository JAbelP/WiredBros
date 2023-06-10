import React from 'react';

export const ServicesTypes = (props) => {
  console.log(props);
  return (
    <div className={`group pl-4 md:m-auto ml-20  ${props.item.baseColor} w-52 h-52 mx-5 rounded-2xl transition-all duration-300 hover:${props.item.changeColor}`}>
      <p className='text-2xl flex-wrap pt-2'>
        {props.item.heading}
      </p>
      <p className='capitalize text-lg pr-2 pt-2 sm:transition-all sm:duration-200 sm:delay-150 sm:opacity-0 sm:group-hover:sm:opacity-100 sm:translate-y-5 sm:group-hover:sm:translate-y-0'>
        {props.item.details}
      </p>
    </div>
  );
};
