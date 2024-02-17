import '../hospitalpage.css';
function Services({item}){
    let val=1;
    return(
        <>
            <div class="services">
        <h4>Services</h4>
        <div class="ourservices">
            <div class="sergap">
                <ul>
                {
                    item.services.map((value,index) => {
                        return <>
                            
                                    <li  key={index}><i class="tick-icon">✔</i> {value}</li>
                        </>
                    })
                }
                </ul>
                </div>
        </div>
        <div class="service-address">
            <h3>address </h3>
           <p >D No : 10-9-16, BEHIND NAGASARAPU RAMARAO COMPLEX, PALNADU ROAD, Narasaraopet, Narasaraopet - 522601</p>
            <li><a>&#128231; Send Enquiry by Email</a></li>
            <li><a>&#x1F4E7; Get info via SMS/Email</a></li>
            <li><a><i class="fa fa-share-alt"></i> Share this</a></li>
            <li><a>✰ Taa to rate</a></li>
            <li><a><i class='fab fa-chrome'></i> Visit our Website</a></li>
        </div>

    </div>
        
        </>
    )
}

export default Services;