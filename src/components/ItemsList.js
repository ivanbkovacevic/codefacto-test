
import {items} from '../assets/database/items';
import Stars from './Stars'

const ItemList = (props) => {
  const pizzas=[...items];
  

    let showPizzas=pizzas.map((item,i)=>{

      if(props.itemstoshowstart <= i && i<= props.itemstoshowstart+4 ){
        return(
          <div className="item-container" key={item.id}>
             <div className="item-container__header">
             <p>{item.id}</p> <h2>{item.name}</h2>
             </div>
             
              <img src={item.imageUrl} alt={item.id}></img>
              <Stars />
          </div>
        )
      }
 
    })
  
    return (
      <div >
          <div>  {showPizzas}</div>
      </div>
    );
};

export default ItemList;