import './stylehidai.css';
function About(){
    return(
        <>
            <div class="head">
    <div class="subhead">
      
      <h1>NRT HEALTH SERVICE PORTAL</h1>
    </div>
  </div>
  <h1 class="h1" style={{textAlign:"center"}}>About us</h1>
  <div class="bdy">
    <div class="subbdy" >
      <div class="para"><p > 
                Welcome to our NRT health service portal! We are dedicated for providing high-quality healthcare services and ensuring the well-being of our patients. 
  Our experienced team of doctors, nurses, and staff work together to deliver personalized care in a compassionate and professional manner.
                Our hospitals are equipped with state-of-the-art facilities and advanced medical technology to diagnose and treat various medical conditions. 
  We offer a wide range of medical specialties, including internal medicine, pediatrics, cardiology, orthopedics, and more.</p><br /><p>
          At our website, we prioritize patient comfort and safety. We strive to create a warm and welcoming environment where patients feel cared for and
  supported throughout their healthcare journey.Our dedicated team is available round the clock to address any concerns and provide the best possible care.
          Thank you for choosing our hospital for your healthcare needs. We look forward to serving you and improving the health and well-being of our community.
          </p>
      </div>
    </div>
  <div class="imag">
    <img  src="/images/aboutus/service1.jpg" alt="image1" /><br></br>
    <img  src="/images/aboutus/service2.jpg" alt="image2" />
  </div>
  <div class="dupe">
    <img  src="/images/aboutus/service3.jpg" alt="image3" />
  </div>
  </div>
<div class="flex-container"  align="center">
    <div class="flex-item" ><div class="card">
      <img src="/images/aboutus/hospital.jpg" alt=''/>
      <p>emergency </p></div>
    </div>
    <div class="flex-item"><div class="card">
      <img src="/images/aboutus/clinic.jpg" alt='' />
      <p>clinical service</p></div>
    </div>
    <div class="flex-item"><div class="card">
      <img src="/images/aboutus/firstaid.jpg" alt='' />
      <p>first aid centers.</p></div>
    </div>
  </div>
  <div class="list">
    <ul >
    <li>major operations</li>
        <li>surgery</li>
        <li>therapy</li>
        <li>critical cases</li></ul>
    <ul >
    <li>health issues</li>
          <li>medication</li>
          <li>minor surgery</li>
          <li>health care</li></ul>
    <ul>
    <li>minor accidents</li>
          <li>first aid</li>
          <li>medication</li>
          <li>cure</li></ul>
    </div>
  <div class="container">
    <h1>FOR FEEDBACK AND QUERIES</h1>
    <label for="username"><b>Username</b></label>
    <input  class="inp"type="text" placeholder="Enter Username" name="username" required />

    <label for="Email"><b>Email</b></label>
    <input class="inp"type="text" placeholder="Enter Email" name="Email" required />

    Feedback and Query:
<input class="inp"type="text" id="feed" />
<button  class="button" type="submit" >submit</button><br />
<div class="call"><p>For telecommunication:</p>
<a href="tel:9346587438">📞</a>
</div>
</div>
<br></br> 
<footer  class="fut">
  <p  >for more info:</p>
  <ul ><li><a class="icon" href="https://www.facebook.com/campaign/landing.php?campaign_id=14884913640&extra_1=s|c|589460569678file|b|www%20facebook%20com%27|&placement=&creative=589460569678&keyword=www%20facebook%20com%27&partner_id=googlesem&extra_2=campaignid%3D14884913640%26adgroupid%3D128696221352%26matchtype%3Db%26network%3Dg%26source%3Dnotmobile%26search_or_content%3Ds%26device%3Dc%26devicemodel%3D%26adposition%3D%26target%3D%26targetid%3Dkwd-370943296522%26loc_physical_ms%3D9040204%26loc_interest_ms%3D%26feeditemid%3D%26param1%3D%26param2%3D&gclid=Cj0KCQjwho-lBhC_ARIsAMpgMock9rF3kW9ndUNx-5iIAnOYl6xlpuO3-HF1a5UBiY1QeqYwpcOUBuMaAtLOEALw_wcB"><img  src="/images/aboutus/facebook1.png" alt=''/></a></li>
  <li><a class="icon" href="https://www.facebook.com/campaign/landing.php?campaign_id=14884913640&extra_1=s|c|589460569678file|b|www%20facebook%20com%27|&placement=&creative=589460569678&keyword=www%20facebook%20com%27&partner_id=googlesem&extra_2=campaignid%3D14884913640%26adgroupid%3D128696221352%26matchtype%3Db%26network%3Dg%26source%3Dnotmobile%26search_or_content%3Ds%26device%3Dc%26devicemodel%3D%26adposition%3D%26target%3D%26targetid%3Dkwd-370943296522%26loc_physical_ms%3D9040204%26loc_interest_ms%3D%26feeditemid%3D%26param1%3D%26param2%3D&gclid=Cj0KCQjwho-lBhC_ARIsAMpgMock9rF3kW9ndUNx-5iIAnOYl6xlpuO3-HF1a5UBiY1QeqYwpcOUBuMaAtLOEALw_wcB"><img  src="/images/aboutus/insta.png" alt=''/></a></li>
  
</ul></footer>
        </>
    )
}

export default About;