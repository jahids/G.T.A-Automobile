import React, { useEffect, useState } from 'react';
import Car from '../AllCar/Car';
import Cart from '../cart/Cart';
import ('./body.css')

const Body = () => {

    const [Data, setData] = useState([]);
    
    useEffect(() => {

            fetch('./fakedb.json')
            .then(res => res.json())
            .then(data => setData(data))


        },[])

            const [product, setproduct] = useState([]);

            const handaler = (information) => {
            const newproduct = [...product, information]
            setproduct (newproduct);


            }
        

    return (

        <div className="container">


          

              <div className="row">
              <div className="all-cart col-md-9 mt-5">
                 

                 <div className="custom row row-cols-1 row-cols-md-3 g-4 ">

                 {
                  Data.map(datas => <Car
                  key={datas.id}
                  post={datas}
                  handle={handaler}

                  ></Car>)
              }

                  </div>
                  
             

             </div>

             <div className="cart-function col-md-3 mt-5 ">

                      <Cart 
                      total = {product}
                      ></Cart>
             </div>

              </div>

        </div>
       
     


    );
};

export default Body;