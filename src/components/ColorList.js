import React from "react";

function ColorList() {
  const colors = [
    "firebrick",
    "rebeccapurple",
    "salmon",
    "darkslategray",
    "hotpink",
  ];

  const colorElements = colors.map(color=>{  // transforms our list of array of colors to an array of JSX elements.
    return <li key={color} style={{color:color}}>{color}</li>
  })

  return (
    <div>
      <h1>Top 5 CSS Colors</h1>
      <ol>
      {colorElements}
      </ol>
    </div>
  );
}

export default ColorList;
