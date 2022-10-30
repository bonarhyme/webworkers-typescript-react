import React from "react";

type Props = {
  color?: "black" | "white";
  size?: number;
  display?: "inline-block" | "block";
};

const Loader = ({
  color = "black",
  size = 20,
  display = "inline-block",
}: Props) => {
  return (
    <div
      style={{
        border: `4px solid ${color}`,
        width: `${size}px`,
        height: `${size}px`,
        borderRightColor: "transparent",
        borderRadius: "50%",
        display,
        margin: display === "block" ? "50px auto" : "none",
      }}
      className="loader"
    ></div>
  );
};

export default Loader;
