import React from 'react';
import ReactDOM from 'react-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import "./car.css"



const Car = (props) => {
    
  const {name, Role, img, speed,Transmission,manufacturers,cost} = props.post

  const element = <FontAwesomeIcon icon={faShoppingCart} />


    
    return (

<div>
    
    <div className="container ">
    <div className="col ">
    <div className=" card h-100 shadow p-3 mb-5 bg-body rounded">
      <img src={img} className="card-img-top" alt="..."/>
      <div className="card-body">
        <h3 className="card-title font-weight-bold">{name}</h3>
        <h5 className="card-text "> <span className='fw-bold'> Role</span> : {Role}</h5>
        <p className="card-text "> <span className='fw-bold'> Speed :</span>{speed}</p>
        <p className="card-text "> <span className='fw-bold'>  Transmission :</span>  {Transmission}</p>
        <p className="card-text ">  <span className='fw-bold'> manufactures :</span> {manufacturers}</p>
        <p className="card-text "> <span className='fw-bold'> price:</span>  ${cost}</p>

      </div>
     <div onClick={()=>props.handle(props.post)} className="btn btn-success">{element} Shop now</div>
      </div>

</div> 
</div>
 </div>

    );
};

export default Car;