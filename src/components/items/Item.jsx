import React from 'react'
import "./Item.css";

const Item = (props) => {
  return (
    <div className='item'>
        <img src={props.image} alt=''/>
        <p>{props.name}</p>
        <div className='itemprice'>
            <div className='itempricenew'>
                {props.new_price}
            </div>
            <div className='itempriceold'>
                {props.old_price}
            </div>
        </div>
      
    </div>
  )
}

export default Item
