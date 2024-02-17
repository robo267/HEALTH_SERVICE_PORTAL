import {useState,useContext} from 'react';
import {Link} from 'react-router-dom';
import './App.css';
import img from './doct.png';
import { getData } from './api';
import { useNavigate } from 'react-router-dom';


Login.defaultProps = {
    imgg:true,
    imgwidth:"border w-25 m-auto mt-15 p-3"
}

function Login(props){
    let navigate = useNavigate();
    
    
    let [email,updateemail] = useState("");
    let [password,updatepassword] = useState("");
    let [userdata,updateuserdata] = useState([]);
    let [islogged,updateislogged] = useState(false);
    
    let {updateuserlog,updateprouserdata} = props;

    let [errors,updateerrors] = useState({
        email:"",
        password:""
    });
    let emailpattern=/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    const checkinfo = async() =>{
        let data = await getData();
        updateuserdata(data.data);
        getresult();
    }

    const getresult = () => {
        // 
        userdata.filter(item => {
            console.log(item.Email == email, item.Password == password)
            return item.Email == email && item.Password == password
        }).map((item) => {
            alert("loggedIn Successfully...");
            updateislogged(true);
            updateuserlog(true);
            let demodata = {
                    First_Name: item.First_Name ,
                    Last_Name: item.Last_Name,
                    Email: item.Email,
            }
            updateprouserdata(demodata);
            navigate("/");
        })
        getalert();
    }
    const getalert = () => {
        if(islogged==false){
            alert("Invalid Credentials....");
            updateislogged(false);
            }
    }

    function finderror(){
        if(email.trim() == ""){
            updateerrors((errors) => ({...errors,email:"Enter Email"}))
        }
        else if(!emailpattern.test(email)){
            updateerrors((errors) => ({...errors,email:"Enter Valid Email"}))
        }
        else{
            updateerrors((errors) => ({...errors,email:""}))
        }
        if(password.trim() == ""){
            updateerrors((errors) => ({...errors,password:"Enter Password"}))
        }
        else if(password.trim().length<8){
            updateerrors((errors) => ({...errors,password:"Password must be of length 8 characters"}))
        }
        else{
            updateerrors((errors) => ({...errors,password:""}))
        }
    
    }
  
    return(
        <>
        <div className='doctmain'>
        {
            props.imgg && <img className='doctlog2' src={img}></img>
        }
            <div className={props.imgwidth}>
                <h1 className="text-primary text-center">Login Form</h1>
                <div className="mt-3">
                    <label>Email</label>
                    <input type="text" className="form-control mt-1" value={email} onChange={(e) => {updateemail(e.target.value)}}/>
                    {errors.email && <span className="text-danger">{errors.email}</span>}
                </div>
                <div className="mt-3">
                    <label>Password</label>
                    <input type="password" className="form-control mt-1" value={password} onChange={(e) => {updatepassword(e.target.value)}}/>
                    {errors.password && <span className="text-danger">{errors.password}</span>}
                </div>
                <button className="btn btn-primary mt-3" onClick={() => {
                    finderror();
                    checkinfo();
                }}>Login</button>
                <p className="text-danger mt-3">Create Account: {<Link to='/register'>Register</Link>}</p>
                
            </div>
        </div>
        
        </>
    )
}

export default Login;
