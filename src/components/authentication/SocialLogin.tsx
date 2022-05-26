import React, { useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import Cookies from 'js-cookie'

const SocialLogin = () => {

  const params = useParams();
  const navigate = useNavigate();

    useEffect(() => {
      
      const token = params.token;
      if(token){
        Cookies.set("token", token);
        navigate('/',{ replace: true })
      }

    });
  
   return (
    <div>
      <h4>Success! Redirecting To Home Page...</h4>
    </div>
)};

export default SocialLogin