import React from "react";

export default function HrLine({ width, height, color }) {
  return (
    <hr
      style={{
        height,
        width,
        backgroundColor: color,
        marginLeft: 0,
        borderRadius: "10px",
      }}
    ></hr>
  );
}
