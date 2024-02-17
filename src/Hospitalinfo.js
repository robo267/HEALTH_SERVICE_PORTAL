import {useParams} from 'react-router-dom';
import SlideShow from './hospi-compos/SlideShow';
import Card from './hospi-compos/Card';
import Services from './hospi-compos/Services';
import Aboutfooter from './hospi-compos/About-footer';
function Hospitalinfo(props){
    let {details} = props;
    const param = useParams();
    return(
        <>
            
            {details.filter(item => {
                return item.id == param.id;
            }).map((item) => {
                return <>
                        <SlideShow item={item}/>
                        <Card item={item}/>
                        <Services item={item} />
                        <Aboutfooter item={item}/>
                    </>

            })}
        </>
    )
}

export default Hospitalinfo;