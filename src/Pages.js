import { Link } from "react-router-dom";

function Pages() {
  return (
    <ul>
      <li>
        <Link to="login-form">Login Form</Link>
      </li>
      <li>
        <Link to="modal">Modal</Link>
      </li>
      <li>
        <Link to="feedback">Feedback</Link>
      </li>
      <li>
        <Link to="profile-card">Profile Card</Link>
      </li>
      <li>
        <Link to="side-menu">Side Menu</Link>
      </li>
      <li>
        <Link to="toggle-button">Toggle Button</Link>
      </li>
    </ul>
  );
}

export default Pages;
