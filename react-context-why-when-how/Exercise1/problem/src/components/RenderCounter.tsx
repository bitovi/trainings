import { FC, useRef } from "react";

export const RenderCounter: FC = ({ children }) => {
  const renders = useRef(0);
  renders.current++;

  return (
    <div className="render-wrapper">
      <div key={renders.current} className={`render-count`}>
        {renders.current}
      </div>
      <div className="card">{children}</div>
    </div>
  );
};
