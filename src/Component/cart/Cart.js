import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingBag } from '@fortawesome/free-solid-svg-icons'
import "./cart.css"
import Show from '../detilesShow/Show';

const Cart = (props) => {
 const {total} = props;


    let price = 0;
    let img = '';
    let name = "";
    for (const product of total){
        price = price + product.cost;
        img = product.img;
        name = product.name
    }



    
    const element = <FontAwesomeIcon icon={ faShoppingBag } />
    return (

        <div className="container ">
         <div className="card  text-white bg-light mb-3 ">
            <div className="card-header bg-success">{element} Shopping Cart</div>
            <div className="card-body">
            <h5 className="card-title text-dark fw-bold">Car Added {props.total.length}</h5>
            <p className="card-text text-dark fw-bold">Total Price:{price}</p>
            <p className="card-text text-dark fw-bold">{name}</p>
            <img class="img-fluid" src={img} alt="" srcset="" />

            {

                total.map(into => <Show
                data={into}
                >

                </Show>)
            }
            
            </div>
            </div>
        </div>
    );
};

export default Cart;