function Aboutfooter({item}){
    return(
        <>
            <div class="about">
        <h2>About Hospital</h2>
        
        <h2>{item.name} in Panasathota, Narasaraopet</h2>

            <p>{item.Aboutus}</p>
            </div>
    
    
<footer class="hfot">
    <p>&copy; 2023 {item.name}. All rights reserved.</p>
    For Appointment &nbsp;<a href={"tel:+91"+item.phnno}>{item.phnno}</a>
  </footer>
        </>
    )
}

export default Aboutfooter;