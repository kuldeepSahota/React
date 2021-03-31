import React, { useState } from 'react';
import ReactDom from 'react-dom';





const BG = () =>{
  const color = "bisque"
  const [bg, setBg] = useState(color);
  const [name, setname] = useState('Click Me');
  const bgChange = () =>{
    // console.log("clicked");
    let newBg = '#34495e';
    setBg (newBg)
    setname('wow!')

  }
  const double = () =>{
    // console.log("clicked");
    setBg (color)
    setname('Boorah!')

  }
  
  return (
    <>
      <div className="background" style={{ background: bg }}>
              <button onClick={bgChange} onDoubleClick={double}> {name} </button>
      </div>
    </>
    );

};


  export default BG;