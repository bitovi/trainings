// 1. Define a type for "CustomParent" without explicitly typing
//    "children".
// 2. Correct the type for "CustomElement" so that it only allows
//    props that are valid for the element passed in the "as" prop.
//    For example, if the "as" prop is "button" in "CustomElement",
//    it should only allow props that are attributes of a button.
//    Using other attributes like "href" as a prop should throw
//    an error.

import React, { PropsWithChildren, ComponentPropsWithoutRef } from "react";

interface CustomParentType {
  message: string;
  backgroundColor: string;
}

type CustomElementProps<T extends React.ElementType> = {
  as?: T;
} & ComponentPropsWithoutRef<T>;

const CustomParent = ({
  message,
  backgroundColor,
  children
}: PropsWithChildren<CustomParentType>) => {
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
  ...restOfProps
}: CustomElementProps<T>) => {
  const Component = as || "div";

  return <Component {...restOfProps}>{children}</Component>;
};

const App = () => {
  return (
    <CustomParent message="This is a button" backgroundColor="red">
      <CustomElement as="button" href="www.google.com">
      {/* Type '{ children: string; as: "button"; href: string; }' 
      is not assignable to type 'IntrinsicAttributes & 
      { as?: "button" | undefined; } & 
      Omit<DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, 
      HTMLButtonElement>, "ref">'.
      
      Property 'href' does not exist on type 'IntrinsicAttributes 
      & { as?: "button" | undefined; } & 
      Omit<DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, 
      HTMLButtonElement>, "ref">'. */}
        What element am I?
      </CustomElement>
    </CustomParent>
  );
};

export default App;
