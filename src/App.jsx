import React, { useState } from 'react';
import ReactDom from 'react-dom';
import BG from './BgChange.jsx'
import TimeFunction from './Time.jsx';
import Form from './Form';




function App (){

  return(
       
    <div>
        <BG></BG>
        <TimeFunction></TimeFunction>
        <Form></Form>

    </div>

  )
}



  export default App;