import { Link } from "react-router-dom";

function Pages() {
  return (
    <p>
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
      </ul>
    </p>
  );
}

export default Pages;
