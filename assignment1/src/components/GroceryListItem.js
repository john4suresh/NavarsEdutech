import React from 'react';
import { RiAddCircleFill } from "react-icons/ri";
import { IconContext } from "react-icons";

const GroceryListItem = ({ label, onClick }) => {
  return (
    <IconContext.Provider value={{ size: 24, className: "add_cart" }}>
      <div className='flex cursor-pointer p-2 add_cart' onClick={() => onClick()}>
        <p className='inline-block pr-5'><RiAddCircleFill /></p>
        <p>{label}</p>
      </div>
    </IconContext.Provider>
  )
}

export default GroceryListItem