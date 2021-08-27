import React, { useState, useEffect} from 'react';
const mailchimp = require("@mailchimp/mailchimp_marketing");

const MailChimp = () => {

  function ready() {
    const { type } = window.screen.orientation;
    console.log(`Fullscreen and locked to ${type}. Ready!`);
  }


    async function start() {
      await document.body.requestFullscreen();
      await window.screen.orientation.lock("portrait-primary");
      ready();
    }

    return (
        <div>
          <button onClick={()=>start()}>GO</button>
            <h1>MailCHIMP</h1>

        </div>
    );
}

export default MailChimp;