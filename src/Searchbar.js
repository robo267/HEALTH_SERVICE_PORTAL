import {useState} from 'react';
import './App.css';

function SearchBar(){
    const data = require('./hospital-details.json');
  let [ele,upele] = useState("");

  
  function SearchItem(searchItem){
    upele(searchItem);
    //console.log("SearchItem: "+ele);
  }

    return(
        <>
            
  

      <div className="search-container">
      <div className="search-inner">
        <input type="text" id="wanted" value={ele} onChange={(e) => {upele(e.target.value)}}/>
        
      </div>
      <div className='dropdown'>
        {data.filter(item => {
          const l1 = ele.toLowerCase();
          const l2 = item.name.toLowerCase();
          return l1 && l2.startsWith(l1) && l1 !== l2
        }).map((item,index) => ( 
          <div className='dropdown-row' onClick={() => {SearchItem(item.name)}}>{item.name}</div>  
        ))}
      </div>
    </div>
        </>
    )
}

export default SearchBar;