import React, { useState, useEffect} from 'react';
const mailchimp = require("@mailchimp/mailchimp_marketing");

const MailChimp = () => {
useEffect(()=>{
  function ready() {
    const { type } = window.screen.orientation;
    console.log(`Fullscreen and locked to ${type}. Ready!`);
  }
    async function start() {
      await document.body.requestFullscreen();
      await window.screen.orientation.lock("portrait-primary");
      ready();
    }

    const double = () =>{
      ready()
      start()
    }
    document.body.addEventListener('click',double)
},[])

    return (
        <div>
            <h1>body</h1>
        </div>
    );
}

export default MailChimp;