import React from "react";

// interface Props extends RouteComponentProps<{ name: string }> { }
// interface Props {
//   title: string;
// }

function Logo() {
  // const url = "/assets/" + props.title + ".png";

  return (
    <div>
      <img src={require('./bigLogo.png')} alt="Logotype" />
    </div>
  );
}

export default Logo;
