import React from 'react';

const Show = (props) => {
   
    return (
        <div>
                            
                    <div className="card mb-3" >
                    <div className="row g-0">
                    <div className="col-md-4">
                    <img src={props.data.img} className="img-fluid rounded-start" alt="..."/>
                    </div>
                    <div className="col-md-8">
                    <p className="text-dark fw-bold">{props.data.name}</p>
                    </div>
                </div>
                </div>


        </div>
    );
};

export default Show;