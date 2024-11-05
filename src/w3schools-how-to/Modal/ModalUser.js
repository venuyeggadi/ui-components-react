import Modal from "./Modal";
import { useState } from "react";

export default function ModalUser() {
  const [open, setOpen] = useState(false);

  const Body = () => {
    return (
      <div>
        <p>Some text in the Modal Body</p>
        <p>Some other text...</p>
      </div>
    );
  };

  const Footer = () => {
    return (
      <div>
        <button onClick={() => setOpen(false)}>Close</button>
      </div>
    );
  };

  const Header = () => {
    return (
      <div>
        <p>Modal Header</p>
      </div>
    );
  };

  return (
    <>
      <button onClick={() => setOpen(true)}>Open Modal</button>
      <Modal
        open={open}
        handleClose={() => setOpen(false)}
        header={<Header />}
        body={<Body />}
        footer={<Footer />}
      />
    </>
  );
}
