
import {items} from '../assets/database/items';
import Stars from './Stars'

const ItemList = (props) => {
  const pizzas=[...items];
  let show=[];
  //rendering the items list
  pizzas.map((item,i)=>{
    //showing only 5 elements, next or previus ones
      if(props.itemstoshowstart <= i && i<= props.itemstoshowstart+4 ){
        //pushing in a seperate array because of .map() need to have return at the end
        show.push( <div className="item-container" key={item.id}>
        <div className="item-container__header">
            <p>{item.id+1}</p> <h2>{item.name}</h2>
            </div>
            <img src={item.imageUrl} alt={item.id}></img>
            <Stars />
        </div>)     
      }
      return(
         show
        )
    });
  
    return (
      <div >
          <div>  {show}</div>
      </div>
    );
};

export default ItemList;