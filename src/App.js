import Nav from './nav';
import './App.css';
import Home from './Home';
import About from './about';
import Login from './Login';
import Register from './Register';
import Hospitals from './Hospitals';
import {useEffect,useState} from 'react';

import Portallogin from './Portallogin';
import { getHospitalData,getDropDownData } from './api';

import {Routes,Route} from 'react-router-dom';
import Hospitalinfo from './Hospitalinfo';
import Profile from './Profile';




function App() {
  let [dis,setdis] = useState();
  let [userlog,updateuserlog] = useState(false);
  let [prouserdata,updateprouserdata] = useState(
    
  );
  let [details,updatedetails] = useState([]);
  let [dropdown,updatedropdown] = useState([]);

  
  useEffect(
    () => {
      setdis(true);
      getHospitalData2();
      getDropDownData2();
    },[]
  )

  
  let getHospitalData2 = async() => {
    let data = await getHospitalData();
    console.log(data.data);
    updatedetails(data.data);
  }

  let getDropDownData2 = async() => {
    let data = await getDropDownData();
    console.log(data.data);
    updatedropdown(data.data);
  }
  

  function Toggledata(){
    setdis(false);
    
  }
  
  return (
    <>
      
      
      <Nav userlog={userlog}/>
      
      {
        dis && <Portallogin close={Toggledata}/>
      }
        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='about' element={<About />} />
          <Route path='login' element={<Login updateuserlog={updateuserlog} updateprouserdata={updateprouserdata}/>} />
          <Route path='profile' element={<Profile prouserdata={prouserdata} updateuserlog={updateuserlog} updateprouserdata={updateprouserdata}/>} />
          <Route path='register' element={<Register />} />
          <Route path='hospitals' element={<Hospitals details={details} dropdown={dropdown}/>} />
          
          <Route path='Hospitals/hospitalinfo/:id' element={<Hospitalinfo details={details}/>} />
        </Routes>
      
    </>
  );
}

export default App;
