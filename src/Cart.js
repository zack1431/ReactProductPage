// import logo from './images/dummy.svg'
// import React, { useEffect,useState } from "react";

function Cart(props){
	function remove(id,idx) {
		if(props.items.length > 0){
			props.items.splice(idx,1);
			props.product.forEach(val =>{
				if(val.id === id){
					val.btnEnable = false;
				}
			})
		}
		props.itemCount(props.items.length);
	}

	return (
			<div>
				<ol className="list-group list-group-numbered">
					{
						props.items.map((item,idx) =>
							<li className="list-group-item d-flex justify-content-between align-items-start" key={idx}>
							    <div className="ms-2 me-auto">
							      <div className="fw-bold">{item.name}</div>
							      <span className="mr-10"><strike>{item.mrp_price}</strike></span><span>{item.sale_price}</span>
							    </div>
							    <span className="badge bg-primary rounded-pill mr-10">{item.rating}</span>
							    <span className="badge bg-danger rounded-pill cursor" onClick={() => remove(item.id,idx)}><i className="fas fa-trash-alt"></i></span>
						  	</li>
						)
					}
				  
				</ol>
			</div>
	)
		
}

export default Cart;

