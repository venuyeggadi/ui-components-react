import "./Modal.css";

const Modal = ({ open, handleClose, header, body, footer }) => {
  return open ? (
    <div className="modal-overlay">
      <div className="modal-content">
        <div className="modal-header">{header}</div>
        <div className="modal-body">{body}</div>
        <div className="modal-footer">{footer}</div>
      </div>
    </div>
  ) : (
    <></>
  );
};

export default Modal;
