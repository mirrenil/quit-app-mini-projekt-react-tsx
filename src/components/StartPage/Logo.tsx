import React, { CSSProperties } from "react";

// interface Props extends RouteComponentProps<{ name: string }> { }
// interface Props {
//   title: string;
// }

function Logo() {
  // const url = "/assets/" + props.title + ".png";

  return (
    <div style={logoDiv}>
      <img src={require('./bigLogo.png')} alt="Logotype" />
    </div>
  );
}

const logoDiv: CSSProperties = {
  marginTop: '50px',
};

export default Logo;
