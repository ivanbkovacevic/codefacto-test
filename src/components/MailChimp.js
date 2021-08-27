import React, { useState, useEffect} from 'react';
const mailchimp = require("@mailchimp/mailchimp_marketing");

const MailChimp = () => {

    // mailchimp.setConfig({
    //   apiKey: "8a7f9ef0f618d8d9c2cf2e5d9a01fedc-us4",
    //   server: "us4",
    // });
    
    // async function run() {
    //   const response = await mailchimp.ping.get();
    //   console.log(response);
    // }
    
    // run();

    const [msg,setMsg] = useState('')
    useEffect(()=>{
      
      const ornChange = () => {
        console.log( window.screen.orientation.type)
        if(window.screen.orientation.type === 'portrait-primary'){
          console.log('portrait-primary ---')
          window.screen.orientation.lock('portrait-primary'); 
          setMsg('ok je')
        }else{
        setMsg('rotate phone')
      }
    }
  
      window.screen.orientation.addEventListener('change',ornChange)

      return ()=>{
       window.removeEventListener('orientationchange',ornChange)
      }
    },[])
  
    return (
        <div>
            <h1>{msg}</h1>
            <h1>MailCHIMP</h1>

        </div>
    );
}

export default MailChimp;