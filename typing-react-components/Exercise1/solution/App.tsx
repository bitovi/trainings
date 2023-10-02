// 1. Add appropriate type to the Message component to get rid of TS errors.
//    The type require Message to be rendered with "children" i.e.
//    the third Message render call in the code should be invalid.
//   
// 2. Update the component render calls in order to get the desired result.
//    Desired result - 
//    You can probably ignore this: Don't forget to subscribe to the newsletter.
//    Please take action immediately: Your payment is due today!

import { ReactNode } from "react";

interface MessageProps {
  isLowPriority: boolean;
  children: ReactNode
};


const Message = ({ isLowPriority, children }: MessageProps) => {
// CANNOT use PropsWithChildren since it types "children" as an optional property.  
  return isLowPriority ? (
      <p>You can probably ignore this: {children}</p>
    ) : (
      <p style={{ color: "red" }}>Please take action immediately: {children}</p>
    );
};

const App = () => {
  return (
    <>
      <Message isLowPriority={true}>
        Don't forget to subscribe to the newsletter.
      </Message>
      <Message isLowPriority={false}>
        <strong style={{ color: "red" }}>Your payment is due today!</strong>
      </Message>
      <Message isLowPriority={true} />
    </>
  );
};

export default App;
