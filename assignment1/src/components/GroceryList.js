import React from 'react';
import { GiSolidLeaf } from 'react-icons/gi';
import { IconContext } from "react-icons";
import GroceryListItem from './GroceryListItem';
import { connect } from 'react-redux';
import actions from '../redux/actions';

const GroceryList = ({ groceryData, addCart }) => {
  return (
    <IconContext.Provider value={{ color: "#222222", size: 30, className: "basket" }}>
      <div className='w-full flex flex-col justify-center items-center pt-6'>
        <div>
          <p className='flex justify-center items-center'><GiSolidLeaf /> <span className='pl-5'>Groceries</span></p>
        </div>
        <div className='pt-6'>
          {groceryData.map(ele => <GroceryListItem label={ele.name} key={ele.id} onClick={() => addCart(ele)} />)}
        </div>
      </div>
    </IconContext.Provider>
  )
}



const mapDispatchToProps = dispatch => {
  return {
    addCart: payload => dispatch(actions.addCart(payload)),
  }
};

export default connect(null, mapDispatchToProps)(GroceryList)