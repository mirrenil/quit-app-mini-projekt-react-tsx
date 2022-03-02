import React, { CSSProperties } from "react";

function Logo() {
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
