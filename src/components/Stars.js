import React,{useState} from 'react';
import starImg from '../assets/images/Star.png'

const Stars = () => {

    const [btnDisabled,setBtnDisabled]=useState({disabled:false,cursor:'pointer'});

    //defing stars object and values
    const[stars,setStars]= useState([
        {id:0,value:1,isMarked:false},
        {id:1,value:2,isMarked:false},
        {id:2,value:3,isMarked:false},
        {id:3,value:4,isMarked:false},
        {id:4,value:5,isMarked:false}
])

    const starsCopy=[...stars];

    //rating all the stars below the clicked one
    const handleRated = arg => {
        starsCopy.forEach(element => {
            if(element.id <=arg){
                element.isMarked=true;
            }
        });

        starsCopy[arg].isMarked=true;
     
        setStars(starsCopy);
        setBtnDisabled({disabled:true,cursor:"not-allowed"})
    }

    //drawing the stars dinamicly
    const starsToDraw=starsCopy.map((item,index)=>{
        return (    
            <button title='star-btn' className="my-btn" disabled={btnDisabled.disabled} style={{cursor:btnDisabled.cursor}}
                key={index} 
                onClick={()=>handleRated(index)}>
                <img className={item.isMarked ? 'single-star__rated' : 'single-star__not-rated'} src={starImg}  alt='img'>
                </img>
            </button> 
        )
    })

    return (
        <div  className="stars-container">
           {starsToDraw}
        </div>
    );
};

export default Stars;