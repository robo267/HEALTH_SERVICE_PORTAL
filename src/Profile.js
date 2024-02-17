import './App.css';
import {getData,putData} from './api';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
function Profile(props){
    let navigate = useNavigate();
    
    let {prouserdata,updateuserlog,updateprouserdata} = props;

    let [fname,updatefname] = useState("");
    let [lname,updatelname] = useState("");
    let [email,updateemail] = useState("");

    const checkData2 = async(name,value) => {
        console.log(name,value);
        let data = await getData();
        data = data.data;
        data.filter(item => {
            return item.Email == prouserdata.Email;
        }).map((item,index) => {
            
            let material = {...item,[name]:value};
            updateprouserdata({...prouserdata,[name]:value});
            
            console.log(material);
            putData(material);
        })
    }
    
    return(
        <div className="profile-outer">
            
            <div className='profile-img'>
                <img src="/images/profile-img2.jpeg" />
            </div>
            <div>
                <div className="profile-categerories">
                    <h2>First Name: {prouserdata.First_Name}</h2>
                    <input type="text" className='profile-textbox' placeholder='Enter First Name' value={fname} onChange={(e) => {updatefname(e.target.value)}}/>
                    <button className='profile-btn' onClick={() => {checkData2("First_Name",fname); updatefname("");}}>Edit</button>
                </div>
                <div className="profile-categerories">
                    <h2>Last Name: {prouserdata.Last_Name}</h2>
                    <input type="text" className='profile-textbox' placeholder='Enter Last Name' value={lname} onChange={(e) => {updatelname(e.target.value)}}/>
                    <button className='profile-btn' onClick={(e) => {checkData2("Last_Name",lname); updatelname("");}}>Edit</button>
                </div>
                <div className="profile-categerories">
                    <h2>Email: {prouserdata.Email}</h2>
                    <input type="text" className='profile-textbox' placeholder='Enter Email' value={email} onChange={(e) => {updateemail(e.target.value)}}/>
                    <button className='profile-btn' onClick={(e) => {checkData2("Email",email); updateemail("");}}>Edit</button>
                </div>
                <button onClick={() => {
                    updateuserlog(false);
                    navigate('/login');
                }}>Logout</button>
            </div>
        </div>
    )
}
export default Profile;