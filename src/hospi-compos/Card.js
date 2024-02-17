import '../hospitalpage.css';

function Card({item}){
    return(
        <>
            <section id="about">
                <div class="compocard">
        
                <pre><h2 class="card-heading">{item.name}</h2></pre>

            <span class="rating">5.0</span>
            <span class="card-rating">★★★★★</span>
            <div class="card-address">
              <p>Narasaraopet,narasaraopet 	&#8226;  Fee:💲{item.fee} &#8226; Established in {item.establishment}</p>
            </div>
            <div class="card-contact">
              <p >Contact:<a href={"tel:+91"+item.phnno+""}> {item.phnno}</a></p>
            </div>
          </div>
      </section>
        </>
    )
}

export default Card;