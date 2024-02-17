import {useState} from 'react';
import {Link} from 'react-router-dom';
import img from './regi.png';
import { postData } from './api';
import Portallogin from './Portallogin';
function Register(){
    let [rdata,setrdata] = useState({
        fname:"",
        lname:"",
        email:"",
        password:"",
        rpassword:""
    });
    let [errors,seterrors] = useState({
        fname:"",
        lname:"",
        email:"",
        password:"",
        rpassword:""
    });
    let emailpattern=/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    const postData2 = async(data) => {
        console.log(data);
        await postData(data);
        setrdata({...rdata,fname:"",lname:"",email:"",password:"",rpassword:""});
        alert("Registration Successfully..");
      }

    function aftercheck(){
        if(errors.fname=="" && errors.lname=="" && errors.email=="" && errors.password=="" && errors.rpassword=="")
        {
            postData2({
                First_Name:rdata.fname,
                Last_Name:rdata.lname,
                Email:rdata.email,
                Password:rdata.password
            })
        }
        
    }
    function checkrdata(){
        if(rdata.fname.trim()==""){
            seterrors((errors) => ({...errors,fname:"Enter Your First Name"}))
        }
        else{
            seterrors((errors) => ({...errors,fname:""}))
        }
        if(rdata.lname.trim()==""){
            seterrors((errors) => ({...errors,lname:"Enter Your Last Name"}))
        }
        else{
            seterrors((errors) => ({...errors,lname:""}))
        }
        if(rdata.email.trim() == ""){
            seterrors((errors) => ({...errors,email:"Enter Email"}))
        }
        else if(!emailpattern.test(rdata.email)){
            seterrors((errors) => ({...errors,email:"Enter Valid Email"}))
        }
        else{
            seterrors((errors) => ({...errors,email:""}))
        }
        if(rdata.password.trim() == ""){
            seterrors((errors) => ({...errors,password:"Enter Password"}))
        }
        else if(rdata.password.trim().length<8){
            seterrors((errors) => ({...errors,password:"Password must be of length 8 characters"}))
        }
        else{
            seterrors((errors) => ({...errors,password:""}))
        }
        if(rdata.rpassword.trim() == ""){
            seterrors((errors) => ({...errors,rpassword:"Enter Password again"}))
        }
        else if(rdata.rpassword != rdata.password){
            seterrors((errors) => ({...errors,rpassword:"Passwords do not match"}))
        }
        else{
            seterrors((errors) => ({...errors,rpassword:""}))
        }
    }
    return(
        <>
            <div className='doctmain'>
            
            <div className="border w-25 m-auto mt-5 mr-0 p-3"  >
                <h2 className="text-primary text-center">Registration Form</h2>
                <div className="mt-3">
                    <label>First Name</label>
                    <input type="text" className="form-control mt-1" value={rdata.fname} onChange={(e) => {setrdata({...rdata,fname:e.target.value})}} />
                    {errors.fname && <span className="text-danger">{errors.fname}</span>}
                </div>
                <div className="mt-3">
                    <label>Last Name</label>
                    <input type="text" className="form-control mt-1" value={rdata.lname} onChange={(e) => {setrdata({...rdata,lname:e.target.value})}}/>
                    {errors.lname && <span className="text-danger">{errors.lname}</span>}
                </div>
                <div className="mt-3">
                    <label>Email</label>
                    <input type="text" className="form-control mt-1" value={rdata.email} onChange={(e) => {setrdata({...rdata,email:e.target.value})}}/>
                    {errors.email && <span className="text-danger">{errors.email}</span>}
                </div>
                <div className="mt-3">
                    <label>Password</label>
                    <input type="password" className="form-control mt-1" value={rdata.password} onChange={(e) => {setrdata({...rdata,password:e.target.value})}}/>
                    {errors.password && <span className="text-danger">{errors.password}</span>}
                </div>
                <div className="mt-3">
                    <label>Repeat Password</label>
                    <input type="password" className="form-control mt-1" value={rdata.rpassword} onChange={(e) => {setrdata({...rdata,rpassword:e.target.value})}}/>
                    {errors.rpassword && <span className="text-danger">{errors.rpassword}</span>}
                </div>
                <button className="btn btn-primary mt-3" onClick={() => {
                    checkrdata();
                    aftercheck();
                }}>Register</button>
                <p className='text-danger mt-3'>Back to login form: {<Link to='/login'>Login</Link>}</p>
            </div>
            <img className='doctlog' src={img}></img>
            </div>
        
        </>
    )
}
export default Register;