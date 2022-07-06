import React from 'react';
import { FaShoppingBasket } from 'react-icons/fa';
import { IconContext } from "react-icons";
import BasketListItem from './BasketListItem';
import actions from '../redux/actions';
import { connect } from 'react-redux';

const BasketList = ({ basketItems, removeCart }) => {
  return (
    <IconContext.Provider value={{ color: "#222222", size: 30, className: "basket" }}>
      <div className='w-full flex flex-col self-stretch items-center pt-6'>
        <div>
          <p className='flex justify-center items-center'>
            <FaShoppingBasket />
            <span className='pl-5'>Basket List</span>
          </p>
        </div>
        <div className='pt-6'>
          {(basketItems || []).map(ele => <BasketListItem label={ele.name} key={ele.id} onClick={() => removeCart(ele.id)} />)}
        </div>
      </div>
    </IconContext.Provider >
  )
}

const mapStateToProps = state => {
  return {
    basketItems: state.cart.cart,
  }
};

const mapDispatchToProps = dispatch => {
  return {
    removeCart: id => dispatch(actions.removeCart(id)),
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(BasketList);