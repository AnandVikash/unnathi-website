import React, { useState } from "react";

export default function Index(props) {
  const [hover, setHover] = useState(false);
  const { btntext, bgcolor, color, hoverColor, hoverBgColor } = props;
  const buttonStyle = ({ hover }) => ({
    padding: "13px 50px",
    background: hover ? hoverBgColor : bgcolor,
    margin: "20px 0px",
    fontSize: "20px",
    fontWeight: "600",
    borderRadius: "20px",
    color: hover ? hoverColor : color,
    border: "none",
  });

  return (
    <>
      <button
        onPointerOver={() => setHover(true)}
        onPointerOut={() => setHover(false)}
        style={buttonStyle({ hover })}
      >
        {btntext}
      </button>
    </>
  );
}
