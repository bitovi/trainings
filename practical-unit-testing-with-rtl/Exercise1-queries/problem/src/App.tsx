import React from "react"

const Button = () => {
  return <button> Click me to submit!</button>;
};

const TextInput = () => {
  return (
    <>
      <label htmlFor="username">Username</label>
      <input id="username" placeholder="Enter Username Here" />
    </>
  );
};

const ColorPicker = () => {
  return (
    <>
      <label htmlFor="color">Select Your Favorite Color:</label>
      <select id="color" name="color">
        <option value="red" selected>
          Red
        </option>
        <option value="blue">Blue</option>
        <option value="green">Green</option>
        <option value="yellow">Yellow</option>
        <option value="purple">Purple</option>
      </select>
    </>
  );
};

const App = () => {
  return (
    <>
      <h1 data-testid="main-header">Welcome to our App!</h1>
      <img src="https://picsum.photos/200" alt="a randomly selected image" />
      <form>
        <TextInput /> 
        <ColorPicker /> 
        <Button /> 
      </form>
      <a href="https://google.com" title="I'm feeling lucky!">Feelin' lucky, punk?</a>
    </>
  );
};

export default App;
