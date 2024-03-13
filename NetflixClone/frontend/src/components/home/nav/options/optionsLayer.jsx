import React from "react";
import { useNavigate } from "react-router-dom";

const OptionsLayer = ({ optionVisibility }) => {

    const navigate = useNavigate();

  return optionVisibility ? (
    <ul className="option-layer">
      <li className="optn-layer-items">
        <span>Settings</span>
      </li>
      <li className="optn-layer-items">
        <span onClick={()=>{
            navigate("/login")
        }}>Logout</span>
      </li>
    </ul>
  ) : null;
};

export default OptionsLayer;
