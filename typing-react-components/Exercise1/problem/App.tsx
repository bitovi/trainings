// 1. Add appropriate type to the Message component to get rid of TS errors.
//    The type should not allow Message to be rendered without "children" i.e.
//    the third Message render call in the code should be invalid.
//   
// 2. Update the component render calls in order to get the desired result.
//    Desired result - 
//    You can probably ignore this: Don't forget to subscribe to the newsletter.
//    Please take action immediately: Your payment is due today!


const Message = ({ isLowPriority, children }) => {
  return isLowPriority ? (
      <p>You can probably ignore this: {children}</p>
    ) : (
      <p style={{ color: "red" }}>Please take action immediately: {children}</p>
    );
};

const App = () => {
  return (
    <>
      <Message isLowPriority="1">
        Don't forget to subscribe to the newsletter.
      </Message>
      <Message isLowPriority="0">
        <strong style={{ color: "red" }}>Your payment is due today!</strong>
      </Message>
      <Message isLowPriority="1" />
    </>
  );
};

export default App;
