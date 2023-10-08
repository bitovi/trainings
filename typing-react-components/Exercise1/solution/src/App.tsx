/*

Exercise:

1) Replace the `never` type with an interface that requires children.

2) Fix the uses of the Message component so the first usage shows as high priority
   and the others appear as low priority.

*/

import React, { ReactNode } from "react";

interface MessageProps {
  isHighPriority: boolean;
  children: ReactNode
};

const Message = ({ isHighPriority, children }: MessageProps) => {
  // CANNOT use PropsWithChildren since it types "children" as an optional property.  
  return isHighPriority ? (
    <p className="alert alert-warning d-flex align-items-center" role="alert">
      <svg className="bi flex-shrink-0 me-2" height="16" role="img" viewBox="0 0 16 16" width="16">
        <title>High priority:</title>
        <use xlinkHref="../node_modules/bootstrap-icons/bootstrap-icons.svg#exclamation-triangle-fill" />
      </svg>
      {children}
    </p>
  ) : (
    <p className="alert alert-primary d-flex align-items-center" role="alert">
      <svg className="bi flex-shrink-0 me-2" height="16" role="img" viewBox="0 0 16 16" width="16">
        <title>Low priority:</title>
        <use xlinkHref="../node_modules/bootstrap-icons/bootstrap-icons.svg#info-circle-fill" />
      </svg>
      {children}
    </p>
  );
};

const App = () => {
  return (
    <>
      {/* This should NOT error and appear as high priority. */}
      <Message isHighPriority={true}>
        Your payment is due today!
      </Message>

      {/* This should NOT error and appear as low priority. */}
      <Message isHighPriority={false}>
        Don’t forget to subscribe to the newsletter.
      </Message>

      {/* This SHOULD error and appear as low priority. */}
      <Message isHighPriority={false} />
    </>
  );
};

export default App;
