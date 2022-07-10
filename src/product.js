import './product.css';
import logo from './images/dummy.svg'
import React, { useEffect,useState } from "react";
import Cart from './Cart'

const products = [
	{	
		id:1,
		name:'Product 1',
		rating: 4,
		mrp_price:'100 Rs',
		sale_price:'90 Rs',
		onSale:false,
		btnEnable:false
	},
	{	
		id:2,
		name:'Product 2',
		rating: 5,
		mrp_price:'110 Rs',
		sale_price:'100 Rs',
		onSale:false,
		btnEnable:false
	},
	{	
		id:3,
		name:'Product 3',
		rating: 2,
		mrp_price:'120 Rs',
		sale_price:'90 Rs',
		onSale:false,
		btnEnable:false
	},
	{	
		id:4,
		name:'Product 4',
		rating: 5,
		mrp_price:'150 Rs',
		sale_price:'80 Rs',
		onSale:true,
		btnEnable:false
	},
	{	
		id:5,
		name:'Product 5',
		rating: 3,
		mrp_price:'110 Rs',
		sale_price:'90 Rs',
		onSale:false,
		btnEnable:false
	},
	{	
		id:6,
		name:'Product 6',
		rating: 5,
		mrp_price:'150 Rs',
		sale_price:'80 Rs',
		onSale:true,
		btnEnable:false
	}
]



function ProductComp(){
	const [cartArray, setUsers] = useState([]);
	const [cartCount, setCart] = useState(0);
	const [flag, setFlag] = useState(false);
	const addtoCart = (obj,idx) =>{
		obj.btnEnable = true;
		setUsers(current => [...current, obj])
		setFlag(false);
	}
	

	function openCart() {
		if(cartArray.length > 0){
			setFlag(prev => !prev);
		}
		
	}

	useEffect(() => {
	    setCart(cartArray.length)
	  }, [cartArray]);
	return (
		<div className="container py-2 ci-pos-relative">
			<p className="p-2 mb-20 ">
				<span className="fontBold">Home / Products</span>
				<span className="flt-r cart_count" onClick={openCart}>
					<i className="fas fa-shopping-cart"></i> cart : {cartCount}
				</span>
				
			</p>
			<div className="cartPopup">
				{
					flag ? <Cart items={cartArray} product={products} itemCount={setCart}/> : ''
				}
			</div>
          	<div className="row width100">
          		{
	              products.map((val,idx) => 
	                <div className="col-xs-6 col-sm-6 col-md-4 col-lg-3 col-xl-2 mb-20 p-4" key={idx}>
						<div className="card">
						  	<img src={logo} className="card-img-top img-fluid" alt="dummy"/>
						  	<div className="card-body">
						    	<h5 className="card-title text-center">{val.name}</h5>
						    	<div className="card-text text-center">
							    	<div className="rating-section ci-pt-20">
      
								      <div className="rating-wrapper ratingInfo ci-cursor">
								        <input type="radio" className="rating-input" id={'rating-input-1-1'+val.id} name={'rating-input-1'+val.id}/>
								        <label for={'rating-input-1-1'+val.id} className={val.rating ===  5 ? 'rating-star rating-value' : 'rating-star'}></label>
								        <input type="radio" className="rating-input" id={'rating-input-1-2'+val.id} name={'rating-input-2'+val.id}/>
								        <label for={'rating-input-1-2'+val.id} className={val.rating ===  4 || val.rating ===  5 ? 'rating-star rating-value' : 'rating-star'}></label>
								        <input type="radio" className="rating-input" id={'rating-input-1-3'+val.id} name={'rating-input-3'+val.id}/>
								        <label for={'rating-input-1-3'+val.id} className={val.rating ===  3 || val.rating ===  4 || val.rating ===  5 ? 'rating-star rating-value' : 'rating-star'}></label>
								        <input type="radio" className="rating-input" id={'rating-input-1-4'+val.id} name={'rating-input-4'+val.id} />
								        <label for={'rating-input-1-4'+val.id} className={val.rating ===  2 || val.rating ===  3 || val.rating ===  4 || val.rating ===  5 ? 'rating-star rating-value' : 'rating-star'}></label>
								        <input type="radio" className="rating-input" id={'rating-input-1-5'+val.id} name={'rating-input-5'+val.id}/>
								        <label for={'rating-input-1-5'+val.id} className={val.rating ===  1 || val.rating ===  2 || val.rating === 3 || val.rating ===  4 || val.rating ===  5 ? 'rating-star rating-value' : 'rating-star'}></label>
								      </div>
								    </div>
						    	</div>
						    	<p className="card-text text-center"><span className="mr-10"><strike>{val.mrp_price}</strike></span><span>{val.sale_price}</span></p>
						    	<div className="d-flex justify-content-center">
						    		<button disabled={val.btnEnable} className="btn btn-primary " onClick={() => addtoCart(val,idx)}>Add to Cart</button>
					    		</div>
						  	</div>
						</div>
					</div>
	              )
	            }
				
			</div>
		</div>
	)
}

export default ProductComp;