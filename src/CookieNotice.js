import './CookieNotice.css';
import React, {useEffect, useState} from 'react';


function CookieNotice() {

const [showNotice, setNotice] = useState(true);


useEffect(() => {
  setTimeout(()=> {setNotice(false)}, 5000);
});

  
if(showNotice)
  return (
    <div className="CookieNotice">
      <div className="Warning">
          <h1>This site doesn't use cookies/local storage to do anything.</h1>
      </div>
    </div>
  );
else{
  return null;
}
}


export default CookieNotice;
