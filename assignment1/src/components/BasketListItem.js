import React from 'react';
import { IoIosRemoveCircle } from "react-icons/io";
import { IconContext } from "react-icons";

const BasketListItem = ({ label, onClick }) => {
  return (
    <IconContext.Provider value={{ size: 24, className: "remove_cart" }}>
      <div className='flex cursor-pointer p-2 remove_cart' onClick={onClick}>
        <p className='inline-block pr-5'><IoIosRemoveCircle /></p>
        <p>{label}</p>
      </div>
    </IconContext.Provider>
  )
}

export default BasketListItem