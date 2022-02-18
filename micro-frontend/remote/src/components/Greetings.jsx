import React from "react";

export const Greetings = ({ name }) => {
  return <div>Hello {name ? name : "Anonim"}</div>;
};
