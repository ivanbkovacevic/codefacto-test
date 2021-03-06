
import './assets/scss/style.css';
import './assets/scss/icomoon.css';

import ItemsList from './components/ItemsList';
import {items} from './assets/database/items';
import Pagination from './components/Pagination';
import Navbar from './components/Navbar';
import { useState } from 'react';
import BorderDashed from './components/BorderDashed';
import RadialGradijent from './components/RadialGradijent';
import MailChimp from './components/MailChimp';


function App() {

const [itemsToShowStart,setItemsToShow]=useState(0);
const itemsLength=items.length;

//Pagination control
const handlePagination = arg=>()=> {

  //Checking is it start or end of the list
  if(arg==='next' && itemsToShowStart<=10){
    setItemsToShow(itemsToShowStart+5)
  }else if(arg==='previus' && itemsToShowStart>=4){
    setItemsToShow(itemsToShowStart-5)
  }
}

  return (
    <div data-testid="app" className="app-container">
      <Navbar />
      <div className="app">
          <ItemsList  itemstoshowstart={itemsToShowStart} />
          <Pagination 
            itemstoshowstart={itemsToShowStart}
            handlepagination={handlePagination}
            itemslength={itemsLength}
          />
          <BorderDashed />
          <RadialGradijent />
          <MailChimp />
      </div>
    </div>
  );
}

export default App;
