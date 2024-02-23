import React from "react";

const Footer = () => {
  let year = new Date();
  year = year.getFullYear();

  return (
    <div className="footer" 
    style={{display: 'flex',
            justifyContent: 'center',
            position: 'absolute',
            width: '100%',
            top: '95%',
            color: 'white'
}}
    >
      <span>Shrey.dev © {year}</span>
    </div>
  );
};

export default Footer;
