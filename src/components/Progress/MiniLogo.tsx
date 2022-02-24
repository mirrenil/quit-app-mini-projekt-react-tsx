import React, { CSSProperties } from "react";


function MiniLogo() {


  return (
    <div style={logoDiv}>
      <img src={require('./MiniLogo.png')} alt="Logotype" />
    </div>
  );
}

const logoDiv: CSSProperties = {

};

export default MiniLogo;
