import ReactDom from 'react-dom';
import Login from './Login';
import {Link} from 'react-router-dom'

function Portallogin(props){
    return(    
            ReactDom.createPortal(
              <div className="outer">
                <div className="inner">
                  <div className="heading">
                      <h3 style={{color:"blue"}}>Login to Continue.</h3>
                      
                      <li  className="cross" onClick={props.close}>
                      <span aria-hidden="true" >&times;</span>
                      </li>
                  </div>
              
                  <button onClick={props.close}><Link to='login'>Login</Link></button>
                  
                </div>
              </div>,document.getElementById("root2")
        )
  
      
    )
  }
export default Portallogin;