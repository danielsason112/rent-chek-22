import React from "react";
import "./NavBar.css";

const NavBar = () => {
  return (
    <div className="navBar">
      <ul className="nav justify-content-end">
        <li className="nav-item">
          <a className="nav-link disabled">איך זה עובד</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">
            קצת עלינו
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">
            צור חוזה
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#">
            דף הבית
          </a>
        </li>
      </ul>
    </div>
  );
};
export default NavBar;
