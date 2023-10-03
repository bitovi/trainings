// 1. Define a type for "CustomParent" without explicitly typing
//    "children".
// 2. Correct the type for "CustomElement" so that it only allows
//    props that are valid for the element passed in the "as" prop.
//    For example, if the "as" prop is "button" in "CustomElement",
//    it should only allow props that are attributes of a button.
//    Using other attributes like "href" as a prop should throw
//    an error.

import React from "react";

type CustomElementProps<T extends React.ElementType> = {
  as?: T,
} & React.AnchorHTMLAttributes<HTMLDivElement>
// Do you recall a similar “bad type” from earlier?

const CustomParent = ({
  message,
  // Binding element 'message' implicitly has an 'any' type.

  backgroundColor,
  // Binding element 'backgroundColor' implicitly has an 'any' type.

  children
  // Binding element 'children' implicitly has an 'any' type.

}) => {
  return (
    <p style={{ backgroundColor }}>
      <h4>{message}</h4>
      {children}
    </p>
  );
};

const CustomElement = <T extends React.ElementType>({
  as,
  children,
  ...restOfProps }: CustomElementProps<T>
) => {
  const Component = as || "div";

  return (
    <Component {...restOfProps}>
      {children}
    </Component>
  );
}

const App = () => {
  return (
    <CustomParent message="Hi there!" backgroundColor="red">
      <CustomElement as="button" href="www.google.com">
        What element am I?
      </CustomElement>
    </CustomParent>
  );
}

export default App;