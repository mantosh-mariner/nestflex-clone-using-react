import "./index.css"
import Card from './Card';
import Sdata from "./Sdcard";
// import but from "./Netflix";
import But from "./Netflix";
// import Fav from "./App";
import React from 'react';
import ReactDOM from "react-dom";


// import "./index.css";

// here we can write anything as props
// console.log(Sdata[1])
console.log(But)
 let sel=document.getElementById("id")

ReactDOM.render(<React.Fragment>

<h1 className='Heading_style'>List of Top Jiocinema Series 👍</h1>
{/* <But/> */}
{/* <select name="select" id="id">
        <option value="Jiocimena">Jiocimena</option>
        <option value="Netflix">Netflix</option>
      </select> */}
 {/* <Fav></Fav> */}
 

 {
  Sdata.map((val, index)=>{
    { console.log(val) }
    return (<Card 
    key={val.id}
    imgsrc={val.imgsrc}
    title={val.title}
    sname={val.sname}
    link={val.link}
  />)
  })
  
 }

  {/* <Card 
    imgsrc={Sdata[0].imgsrc}
    title={Sdata[0].title}
    sname={Sdata[0].sname}
    link={Sdata[0].link}
  />
  <Card 
    imgsrc={Sdata[1].imgsrc}
    title={Sdata[1].title}
    sname={Sdata[1].sname}
    link={Sdata[1].link}
  />
  <Card 
    imgsrc={Sdata[2].imgsrc}
    title={Sdata[2].title}
    sname={Sdata[2].sname}
    link={Sdata[2].link}
  />
   <Card 
    imgsrc={Sdata[3].imgsrc}
    title={Sdata[3].title}
    sname={Sdata[3].sname}
    link={Sdata[3].link}
  />
  <Card 
    imgsrc={Sdata[4].imgsrc}
    title={Sdata[4].title}
    sname={Sdata[4].sname}
    link={Sdata[4].link}
  /> */}

</React.Fragment>
 ,
  document.getElementById('root')
)

