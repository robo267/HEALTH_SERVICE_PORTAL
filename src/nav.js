import {Link} from 'react-router-dom';


import './App.css';



function Nav(props){
    let {userlog} = props;

;    
    return(
        <>

        
            <nav>
            <ul className='pikachu'>
              <li><Link to='/'>Home</Link></li>
              <li><Link to='hospitals'>Hospitals</Link></li>
              <li><Link to='about'>About Us</Link></li>
              
              
              
              
              {
                userlog==false ? 
                <li  style={{float:"right"}} className='active'><Link to='login'>Login</Link></li>
                : 
                <li  style={{float:"right"}} className='active'><Link to='profile'>Profile</Link></li>
              }
            </ul>
            </nav>
        </>
    )
}

export default Nav;