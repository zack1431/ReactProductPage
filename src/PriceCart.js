
import './price.css';


function PriceCart(props){
  return (
    
    <div className="col-lg-4">
	  <div className="card mb-5 mb-lg-0">
	    <div className="card-body">
	      <h5 className="card-title text-muted text-uppercase text-center">{props.cardData.plan}</h5>
	      <h6 className="card-price text-center">${props.cardData.price}<span className="period">/month</span></h6>
	      <hr />
	      <ul className="fa-ul">
	        <li className={props.cardData.isUser ? '':'text-muted'}><span className="fa-li"><i className={props.cardData.isUser ? 'fas fa-check':'fas fa-times'}></i></span>{props.cardData.user}</li>
	        <li className={props.cardData.isStorage ? '':'text-muted'}><span className="fa-li"><i className={props.cardData.isStorage ? 'fas fa-check':'fas fa-times'}></i></span>{props.cardData.storage}</li>
	        <li className={props.cardData.isAccess ? '':'text-muted'}><span className="fa-li"><i className={props.cardData.isAccess ? 'fas fa-check':'fas fa-times'}></i></span>{props.cardData.access}</li>
	        <li className={props.cardData.isPrivate ? '':'text-muted'}><span className="fa-li"><i className={props.cardData.isPrivate ? 'fas fa-check':'fas fa-times'}></i></span>{props.cardData.private}</li>
	        <li className={props.cardData.isSupport ? '':'text-muted'}><span className="fa-li"><i className={props.cardData.isSupport ? 'fas fa-check':'fas fa-times'}></i></span>{props.cardData.support}</li>
	        <li className={props.cardData.isSubdomain ? '':'text-muted'}><span className="fa-li"><i className={props.cardData.isSubdomain ? 'fas fa-check':'fas fa-times'}></i></span>{props.cardData.subdomain}</li>
	        <li className={props.cardData.isReports ? '':'text-muted'}><span className="fa-li"><i className={props.cardData.isReports ? 'fas fa-check':'fas fa-times'}></i></span>{props.cardData.reports}
	        </li>
	      </ul>
	      <div className="d-grid">
	        <button className="btn btn-primary text-uppercase">Button</button>
	      </div>
	    </div>
	  </div>
	</div>
  )
}

export default PriceCart;