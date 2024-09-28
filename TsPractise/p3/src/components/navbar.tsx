import { useState } from "react";

export const Navbar = () => {
  const [isDarkTheme, setisDarkTheme] = useState(false);
  const changeTheme = () => {
    setisDarkTheme(!isDarkTheme);
  };
  return (
    <nav>
      <div>
        <span>Logo</span>
      </div>
      <ul>
        <li>Home</li>
        <li>About Us</li>
        <li>Contact</li>
        <li>Membership</li>
      </ul>

      <div className="wrapper">
        <div className="toggler-wrapper" onClick={changeTheme}>
          <div
            className="toggler"
            style={
              isDarkTheme
                ? { transform: "translateX(90%)" }
                : { transform: "translateX(0%)" }
            }
          ></div>
        </div>
      </div>
    </nav>
  );
};
