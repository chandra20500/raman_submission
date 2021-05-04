import React, { Component } from 'react';
import GoogleLogin from 'react-google-login';
import { useHistory } from 'react-router-dom';


export default function Cources(){
  const location = document.location.pathname;
  const [selected , ChangeSelect] = React.useState(location);
  const history = useHistory();

  const routeChange = (p) => {
    let path = `${p}`;
    ChangeSelect(`${p}`);
    console.log({selected});
    history.push(path);
  };

  function responseGoogle(response){
    console.log(response);
    console.log(response.profileObj); 
    routeChange("/upload");
  }
    return (
      <div>
        <GoogleLogin
        clientId="485536728289-35ogud03f4i54k38lu8gihdcqdnrgiiq.apps.googleusercontent.com"
        buttonText="Login"
        onSuccess={() => routeChange("/upload")}
        onFailure={() => alert('something is wrong!!! please check')}
        cookiePolicy={'single_host_origin'}
        
        />
      </div>
    )
}