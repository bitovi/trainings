// 1. Add a type to the event argument in the handleFieldChange
//    function which would allow it to handle the event object 
//    from both the fields and get rid of the TypeScript error
// 2. Create an element which will call submitClickHandler 
//    when the user clicks on this element, while keeping
//    in mind the type defined for submitClickHandler. 


import React, { useState, MouseEvent } from 'react';

const App = () => {
  const [fields, setFields] = useState({
    title: "",
    description: ""
  });

  const handleFieldChange = (e) => {
    // Parameter 'e' implicitly has an 'any' type.

    const { name, value } = e.target;
    setFields({
      ...fields,
      [name]: value
    });
  };

  const submitClickHandler = (e: MouseEvent<HTMLDivElement>) => {
    console.log("Submitted!");
  };

  return (
    <>
      <div>
        Title:
        <input name="title" onChange={handleFieldChange}/>
      </div>
      <div>
        Description:
        <div>
          <textarea name="description" onChange={handleFieldChange}/>
        </div>
      </div>
      <div>
     
        {/* Submit element code goes here */}
       
      </div>
    </>
  );
}

export default App;