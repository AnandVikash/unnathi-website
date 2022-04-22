import React from "react";

export default function HrLine({ width, height, color }) {
  return (
    <hr
      style={{
        height,
        width,
        backgroundColor: color,
        borderRadius: "10px",
      }}
    ></hr>
  );
}
