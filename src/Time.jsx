import React, { useState } from 'react';
import ReactDom from 'react-dom';




const TimeFunction = () =>{
    const [count,setCount] = useState(0);

    let Time = new Date().toLocaleTimeString();

    let [oldtime, newtime] = useState(Time);
    const UpdateTime = () =>{
         Time = new Date().toLocaleTimeString();
        newtime(Time);    
    };

    let time = new Date().toLocaleTimeString();

    let [ctime, newctime] = useState(time);
    const DigitalTime = () =>{
        time = new Date().toLocaleTimeString();
        newctime(time);    
    };
    setInterval(DigitalTime,1000);
    
    return(
      <>
      <div className="addtime">
        <h1>{count}</h1>
        <button style={{background: "#000",color: "#fff"}} onClick={() => setCount(count+1)}>Click Me</button>
      </div>


      <div className="livetime">
        <h1>{Time}</h1>
        <button style={{background: "#000",color: "#fff"}} onClick={UpdateTime}>GET TIME</button>
      </div>

      {/* <h1 style={{marginTop: "40px"}}>{Time}</h1> */}
      </>
    );
    
  } 



  export default TimeFunction;