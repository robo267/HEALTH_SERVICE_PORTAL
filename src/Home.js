    import './style.css';
import {Link} from 'react-router-dom';
import BestHospitalsNRT from './BestHospitalsNRT';
import Department from './Department';
import ExperiencedDoctors from './ExperiencedDoctors';
import Footer from './Footer';
function Home(){
    return(
        <>
            <section class="banner_part">
        <div class="container">
            <div class="row align-items-center">
            
                <div class="col-lg-5 col-xl-5">
                    <div class="banner_text">
                        <div class="banner_text_iner">
                            <h5 class="hlu">We are here for your care</h5>
                            <h1 class="hlu">Best Doctors &
                                Better Hospitals</h1>
                            <p class="plu"> We povide you best doctors and Hospitals in the Narasaraopet
                                Only a Doctor is blessed to treat a life,to bring health into
                                our lives and to be there with us when we lost all our hopes
                            </p>
                            

                        </div>
                    </div>
                </div>
                <div class="col-lg-7">
                    <div class="banner_img">
                        <img class="imglu" src="/images/banner_img.png" alt="" />
                    </div>
                </div>
            </div>
        </div>
    </section>


    
    <section class="about_us padding_top">
        <div class="container">
            <div class="row justify-content-between align-items-center">
                <div class="col-md-6 col-lg-6">
                    <div class="about_us_img">
                        <img class="imglu" src="/images/top_service.png" alt="" />
                    </div>
                </div>
                <div class="col-md-6 col-lg-5">
                    <div class="about_us_text">
                        <h2 class="">About us</h2>
                        <p class="plu">Narasaropet Health Care Portal is to provide you
                           the best hospitals and also the best doctors in 
                           the Narasaraopet It can help people to solve 
                           their problems easy way </p>
                        
                        <a class="btn_1" ><Link to='about'>About Us</Link></a>
                    </div>
                </div>
            </div>
        </div>
    </section>
        <BestHospitalsNRT />
        <Department />
        <ExperiencedDoctors />
        <Footer />
        </>
    )
}

export default Home;