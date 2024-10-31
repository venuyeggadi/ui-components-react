import { useState } from "react";
import LoginForm from "./LoginForm";

function LoginButton() {
  const [showModal, setShowModal] = useState(false);
  return (
    <>
      <button className="modal-button" onClick={() => setShowModal(true)}>
        Login
      </button>
      {showModal && <LoginForm onClose={() => setShowModal(false)} />}
    </>
  );
}

export default LoginButton;
