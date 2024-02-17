import {Link} from 'react-router-dom';
function Cards({item}){
    let pathi="hospitalinfo/"+item.id;
    return(
        <>
            <div className="hospital-card">
            <img src={item.image} 
            alt="Hospital Image"
             />
             
            <div className="hospital-card-info">
        <h3><Link to={pathi}>{item.name}</Link></h3>
        <p>{item.address}</p>
        <p >{item.phnno}</p>
    
        {item.services.map((spec) => {
            return <button className="categerories" >{spec}</button>
        })}
        
        <div className="hospital-card-rating" style={{marginTop:"9px"}}>
          <span className="rating">4.0</span> &nbsp;
          <span className="star">&#9733;</span>
          <span className="star">&#9733;</span>
          <span className="star">&#9733;</span>
          <span className="star">&#9733;</span>
          <span className="star">&#9734;</span>
        </div>
      </div>
    </div>
        </>
    )
}

export default Cards;