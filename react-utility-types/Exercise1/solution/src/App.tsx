// 1. Define a type for "CustomParent" without explicitly typing
//    "children".
// 2. Correct the type for "CustomElement" so that it only allows
//    props that are valid for the element passed in the "as" prop.
//    For example, if the "as" prop is "button" in "CustomElement",
//    it should only allow props that are attributes of a button.
//    Using other attributes like "href" as a prop should throw
//    an error.

import React, { ComponentPropsWithoutRef, PropsWithChildren } from "react";

interface CustomParentType {
  backgroundColor: string;
  header: string;
}

type CustomElementProps<T extends React.ElementType> = {
  as?: T;
} & ComponentPropsWithoutRef<T>;

const CustomParent = ({
  backgroundColor,
  header,
  children
}: PropsWithChildren<CustomParentType>) => {
  return (
    <section style={{ backgroundColor }}>
      <h2>{header}</h2>
      {children}
    </section>
  );
};

const CustomElement = <T extends React.ElementType>({
  as,
  children,
  ...restOfProps
}: CustomElementProps<T>) => {
  const Component = as || "p";

  return <Component {...restOfProps}>{children}</Component>;
};

const App = () => {
  return (
    <>
      <h1>React Utility Types</h1>

      <CustomParent backgroundColor="lightblue" header="Anchor element">
        {/* This should NOT error. */}
        <CustomElement as="a" href="https://www.bitovi.com">
          Bitovi
        </CustomElement>
      </CustomParent>

      <CustomParent backgroundColor="pink" header="Button element">
        {/* This SHOULD error. */}
        <CustomElement as="button" href="https://www.bitovi.com">
          Bitovi
        </CustomElement>
      </CustomParent>
    </>
  );
};

export default App;
