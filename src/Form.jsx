import React, { useState } from 'react';
import ReactDom from 'react-dom';


const Form = () =>{
    const [text,newText] = useState();
    const [fullName, setFullName] = useState();
    const [lName, setlName] = useState();
    const [lastName, setLastName] = useState();
    const InputEvent = (demo) =>{
        newText(demo.target.value);

    };
    const onSubmit = (demo) =>{
        demo.preventDefault();
        setFullName(text);
        setlName(lastName);
    };
    const InputEventTWo = (demo) =>{
        setLastName(demo.target.value);
    }

        return(
            
            <div className="form-section">
            <form>
                     <h1>Hello {fullName}{lName}</h1>
                 <input type="text" placeholder="Enter Your Name"  onChange={InputEvent} value={text}/>
                 <br/>
                 <input type="text" placeholder="Enter Your Last"  onChange={InputEventTWo} value={lastName}/>
                 <button type= "submit" onClick={onSubmit}>SUBMIT</button>
              </form>
        </div>

        );
};

export default Form;