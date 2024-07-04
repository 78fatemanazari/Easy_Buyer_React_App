import { faClose } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect, useState } from 'react';
import { json } from 'react-router-dom';

const Welcome = () => {
  const [showWelcome, setShowWelcome] = useState();
  useEffect (() => {
    const data = localStorage.getItem("show_mess");
    setShowWelcome(JSON.parse(data) ?? true);
  },[])
  const onHideWelcome = () => {
    setShowWelcome(false);
    localStorage.setItem("show_mess", JSON.stringify(false));
  } 
    return (
      <React.Fragment>
        { showWelcome && (
        <div className='container'>
          <div className='bg-primary text-white my-3'>
            <FontAwesomeIcon 
            icon={faClose}
            style={{float: "right", margin: "5px"}}
            onClick={onHideWelcome}
            />
            <div className="p-4">Welcome</div>
          </div>  
        </div>
        )}
      </React.Fragment>
    );
}

export default Welcome;