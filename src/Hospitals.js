import Cards from './Cards';
//import details from './hospital-details.json';
import {useState} from 'react';
//import dropdown from './dropdown.json';
import './App.css';
function Hospitals(props){
  //let wanted = document.getElementById('wanted').value;
  console.log("Hospitals Called");
  let {details,dropdown} = props;
  console.log(details);
  console.log(dropdown);
  let [name,upname] = useState("");
  let [ele,upele] = useState("");
  let [product,updateproduct] = useState("");
  return(
    <>
      <div className="hospi-textbox-search">
      <h1 className="text-primary text-center">Hospitals in Narasaraopet</h1>
      <select id="one" onChange={(e) => {updateproduct(e.target.value)}} value={product}>
          <option value="">Select the Service</option>
          {
            dropdown.map((item,index) => {
              return <option key={index} value={item}>{item}</option>
              
            })
          }
      </select>
      <div className='inputhospitals'>
            <input type="text" id="wanted1" placeholder='Enter Hospital Name' value={ele} onChange={(e) => {upele(e.target.value)}}/>
            <button onClick={() => {
              let na = document.getElementById('wanted1').value;
              upname(na);
              updateproduct("");
            }}>search</button>

      <div className='dropdown'>
        {details.filter(item => {
          const l1 = ele.toLowerCase();
          const l2 = item.name.toLowerCase();
          return l1 && l2.startsWith(l1) && l1 !== l2
        }).map((item,index) => ( 
          <div className='dropdown-row' onClick={() => {upele(item.name)}}>{item.name}</div>  
        ))}
      </div>


      </div>

      </div>          
          <div>
                {
                  product? 
                    details.filter(item => {
                      console.log("Search product "+product)
                      return item.services.includes(product)
                    }).map((item) => {
                      console.log(item);
                        return(
                          
                        <Cards item={item} />
                        
                    )
                    })
                  :details.filter(item => {
                      console.log(name);
                      console.log(item.name.startsWith(name));
                      if(name){
                        let na1 = item.name.toLocaleLowerCase();
                        let na2 = name.toLocaleLowerCase();
                      return na1.startsWith(na2);
                      }
                      else
                      return item;
                    }).map((item) => {
                        return(
                          
                        <Cards item={item} />
                        
                    )
                    })
                  
                }
            </div>
      
    </>
  )
}

export default Hospitals;