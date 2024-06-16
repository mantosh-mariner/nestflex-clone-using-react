// import "./index.css"
// import React, { useState } from "react";
import React,{useState} from "react";
// const Ndata=[
//   { id :1,
//     imgsrc:"https://m.media-amazon.com/images/I/71tqf702KNL._AC_UF1000,1000_QL80_DpWeblab_.jpg",
//     title:"Netflix Orignal Series",
//     sname:"MONEY HEIST",
//     link:"https://www.netflix.com/in/title/80192098"

//   },
  // {id :1,
  //   imgsrc:"",
  //   title:"",
  //   sname:"",
  //   link:""

  // },
  // {id :1,
  //   imgsrc:"",
  //   title:"",
  //   sname:"",
  //   link:""

  // },
  // {id :1,
  //   imgsrc:"",
  //   title:"",
  //   sname:"",
  //   link:""

  // }
  
// ]

// let count=1



const But=()=>
{
  // const [count, setCount]=useState(5);
  // return  count++;
  // const state =useState();
  // console.log(count++);

  // this is the hooks thats return array of object which contain two element 
  // let [count, setCount]=useState(0);
  let [name, setName]=useState("");
  let [fullname , setFullname]=useState();
  let [last, setLast]=useState();
 
// console.log(count);

// let count=1;
const onSumit=(event)=>{
  setFullname(name)
  event.preventDefault();

}
function inputEvent(event){

  // count++;
  setName(event.target.value);
  
}
function inputEvent1(event){

  // count++;
  
  setLast(event.target.value);
}

  return(
    <div>
    <form  onSubmit={onSumit}>
   
      <div className="Sum" >

        {/* <h1>{count}</h1> */}
        <h1>hello  {fullname}{last}
        </h1>
        <input type="text" placeholder="enter fist name " onChange={inputEvent} value={name}></input>
      <div>
        <input type="text" placeholder="enter last name " onChange={inputEvent1} value={last}></input>
        </div>
        <button  type="submit">click</button>
    </div>
    <div>
  
    </div>
       
    </form>
    </div>
    
    
  )

}

export default But;