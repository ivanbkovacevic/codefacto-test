
import './assets/scss/style.css';
import ItemsList from './components/ItemsList';
import {items} from './assets/database/items';
import Pagination from './components/Pagination';
import Navbar from './components/Navbar';
import { useState } from 'react';


function App() {

const [itemsToShowStart,setItemsToShow]=useState(0);
const itemsLength=items.length;
const handlePagination = arg => () => {

 
  if(arg==='next' && itemsToShowStart<=10){
    setItemsToShow(itemsToShowStart+5)
  }else if(arg==='previus' && itemsToShowStart>=4){
    setItemsToShow(itemsToShowStart-5)
  }
console.log(arg)
}


  return (
    <div className="app-container">
      <Navbar />
      <div className="app">
   
          <ItemsList  itemstoshowstart={itemsToShowStart} />
        <Pagination 
            itemstoshowstart={itemsToShowStart}
            handlepagination={handlePagination}
            itemslength={itemsLength}
          />
      </div>
    
    
    </div>
  );
}

export default App;
