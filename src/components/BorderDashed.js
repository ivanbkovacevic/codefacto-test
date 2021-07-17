import React from 'react';
import {useState} from 'react';
import cn from 'classnames';

const BorderDashed = () => {

  const[solidLength,setSolidLength]=useState(0);

  const[buttonsArr,setButtonsArr]=useState([
      {id:'0',clicked:false,solid:85},
      {id:'1',clicked:false,solid:75},
      {id:'2',clicked:false,solid:55},
      {id:'3',clicked:false,solid:35},
      {id:'4',clicked:false,solid:15}
  ]);

    const moveIconUp=(e)=>{
        let btn_clicked=e.target.id;
        let buttonsArrCopy=[...buttonsArr]
        console.log(buttonsArrCopy.className)

        if(buttonsArrCopy[btn_clicked].clicked===false){
           buttonsArrCopy[btn_clicked].clicked=true;
           setSolidLength(buttonsArrCopy[btn_clicked].solid)
        }

           buttonsArrCopy.forEach(element => {
               if(element.id!==btn_clicked){
                 element.clicked=false;
               }

           });
           setButtonsArr(buttonsArrCopy)
           console.log(e.target.style)

            
        }
     
     
    

    return (
        <div className="sticky-container">
            <div className="borders-container">
                <div className="solid" style={{right:`${solidLength}%`}}></div>
                <div className="dashed"></div>
            </div>
       
            <div className="icons-container">
                <button className={cn('btn-not-clicked',{'btn-clicked':buttonsArr[0].clicked})} id="0" onClick={(e)=>moveIconUp(e)}>1</button>
                <button className={cn('btn-not-clicked',{'btn-clicked':buttonsArr[1].clicked})} id="1" onClick={(e)=>moveIconUp(e)}>2</button>
                <button className={cn('btn-not-clicked',{'btn-clicked':buttonsArr[2].clicked})} id="2" onClick={(e)=>moveIconUp(e)}>3</button>
                <button className={cn('btn-not-clicked',{'btn-clicked':buttonsArr[3].clicked})} id="3" onClick={(e)=>moveIconUp(e)}>4</button>
                <button className={cn('btn-not-clicked',{'btn-clicked':buttonsArr[4].clicked})} id="4" onClick={(e)=>moveIconUp(e)}>5</button>
            </div>
        </div>
    );
};

export default BorderDashed;