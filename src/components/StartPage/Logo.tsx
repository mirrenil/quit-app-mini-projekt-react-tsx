import React from "react";
import logo from "./";

// interface Props extends RouteComponentProps<{ name: string }> { }
// interface Props {
//   title: string;
// }

function Logo() {
  // const url = "/assets/" + props.title + ".png";

  return (
    <div>
      <img src={logo} alt="Logotype" />
    </div>
  );
}

export default Logo;
