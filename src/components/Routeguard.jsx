import React from 'react'
import { Navigate, useLocation } from 'react-router-dom';

const Routeguard = ({children}) => {
    const location=useLocation();
    console.log(location.state?.item);

    if(location.state != null){
        return children;
      }else{
        return <Navigate to={'/'}/>
      }
    

  return (
    <div>
      
      
    </div>
  )
}

export default Routeguard
