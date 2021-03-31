// // var React = require('react');
// // var ReactDom = require('react-dom');
// import React from 'react';
// import ReactDom from 'react-dom';
// ReactDom.render(
//   <>
//     <h1>Hello World.....</h1>
//     <p>lorem dummy text</p>
//     <ol>
//         <li>one</li>
//         <li>two</li>
//         <li>three</li>
//         <li>four</li>
//         <li>five</li>
//     </ol>
  
//   </>,
//   document.getElementById("root"));

// import  React  from "react";
// import ReactDom from  "react-dom";
// import './index.css';
// const currentDate = new Date().toLocaleDateString();
// const currentTime = new Date().toLocaleTimeString();
// const iamge1 = "https://picsum.photos/seed/picsum/200/300";
// const iamge3 = "https://picsum.photos/200/300?random=1";
// const iamge4 = "https://picsum.photos/seed/picsum/400/300";

// let curDate = new Date();
// curDate = curDate.getHours();

// let greeting = "";

// if (curDate <= 12 ) {
//   greeting = "Good Morning Kuldeep ";
// } else if (curDate >12 ) {
//   greeting = "Good Afternoon Kuldeep";
// }else{
//   greeting = "Good Evening Kuldeep";
// }

// ReactDom.render( 
// <>
//        <h1 className="heading">KULDEEP {greeting} </h1>
//        {/* <img src={iamge1} alt="iamge here"/>
//       //  <img src={iamge3} alt="iamge here"/>
//       //   <img src="https://picsum.photos/200/300?random=1"/>
//       //   <img src="https://picsum.photos/200/300?random=1"/>
//       //   <img src="https://picsum.photos/200/300?random=1"/>
//       //   <img src="https://picsum.photos/200/300?random=1"/>
//       //   <img src="https://picsum.photos/200/300?random=1"/>
//       //   <img src="https://picsum.photos/200/300?random=1"/>
//       //  <a href="https://www.instagram.com/kuldeep__sahota/">
//       //  <img src={iamge4} alt="iamge here"/>
//       //  </a> */}
      
       
// </>,
//   document.getElementById("root"));


// import React from 'react';
// import ReactDom from 'react-dom';
// ReactDom.render(
//        <>
//               <h1 contentEditable>My name is kuldeep singh</h1>
//               <img src="https://picsum.photos/200/300">
//        </>,
//        document.getElementById("root")
// );



// import React from 'react';
// import ReactDom from 'react-dom'; 
// import Heading from './Heading';

// ReactDom.render(
//   <> 
//    <Heading/>
//   </>,
// document.getElementById("root"));


import React from 'react';
import ReactDom from 'react-dom';
import css from './index.css';
import App from './App';
import Cards from './Cards';
import  './index.css';
import Data from './Carddata.jsx';
console.log(Data[0].info);
// function ncard(val){
//   return (
//     <Cards 
//      imgsrc={val.imgsrc} 
//      title={val.title}
//       info={val.info} 
//       link={val.link}/>
//   );
// }

// const favLanguage = ['react','node','java script','python'];
// console.log(favLanguage.length)

// let  [first,,,last] = favLanguage;
// console.log(`my first fav lang is ${first} and my last fav lang is ${last}`)




ReactDom.render(
  <>
    {/* <App></App> */}
    {/* <h1 >List of my all youtube tutorials</h1>
    <Cards  imgsrc={Data[0].imgsrc} title={Data[0].title} info={Data[0].info} link={Data[0].link}/>
    <Cards  imgsrc={Data[1].imgsrc} title={Data[1].title} info={Data[1].info} link={Data[1].link}/>
    <Cards   imgsrc={Data[2].imgsrc} title={Data[2].title} info={Data[2].info} link={Data[2].link}/>
    <Cards  imgsrc={Data[3].imgsrc} title={Data[3].title} info={Data[3].info} link={Data[3].link}/>
    <Cards  imgsrc={Data[4].imgsrc} title={Data[4].title} info={Data[4].info} link={Data[4].link}/>
    <Cards  imgsrc={Data[5].imgsrc} title={Data[5].title} info={Data[5].info} link={Data[5].link}/>
    <Cards  imgsrc={Data[6].imgsrc} title={Data[6].title} info={Data[6].info} link={Data[6].link}/>
    <Cards  imgsrc={Data[7].imgsrc} title={Data[7].title} info={Data[7].info} link={Data[7].link}/> */}
    {/* {Data.map(ncard)} */}

<App/>


    {/* {Data.map( (val,index) => {
      // console.log(index);
        return (
          <Cards 
          key={val.id}
           imgsrc={val.imgsrc} 
           title={val.title}
            info={val.info} 
            link={val.link}/>
        );
    })}
    
    {/* <Card/>
    <Card/>
    <Card/> */} 
    

    </>,

  document.getElementById("root")
  );
  