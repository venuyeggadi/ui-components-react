import "./LoginForm.css";

function LoginForm({onClose}) {
  return (
    <div className="LoginModal">
      <div className="LoginForm">
        <form>
          <div className="modal-close">
            <span
              className="material-symbols-rounded close-icon"
              onClick={onClose}
            >
              close
            </span>
          </div>
          <label htmlFor="username">
            <b>Username</b>
          </label>
          <input id="username" type="text" placeholder="Enter Username" />
          <label htmlFor="password">
            <b>Password</b>
          </label>
          <input id="password" type="password" placeholder="Enter Password" />
          <button className="login-btn" type="submit">
            Login
          </button>
          <input id="remember-me" type="checkbox" />
          <label htmlFor="remember-me">Remember me</label>
        </form>
        <div className="LoginForm-footer">
          <button className="cancel-btn" type="button">
            Cancel
          </button>
          <span>
            Forgot <a>password</a>?
          </span>
        </div>
      </div>
    </div>
  );
}

export default LoginForm;
