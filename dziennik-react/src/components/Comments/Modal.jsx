import React from "react";
import ReactModal from "react-modal";
import "./Comments.css";

const modalStyles = {
  content: {
    position: "absolute",
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    width: "50%",
    height: '60%',
    transform: 'translate(-50%, -50%)',
    borderRadius: "10px",
    backgroundColor: '#7B889D',
    borderWidth: '3px',
    borderColor: '#242e47',
  },
  overlay: {
    backgroundColor: 'transparent'
  }
}

const Modal = ({ isOpen = false, onClose, title = "", date = "", description = '' }) => {
  return <ReactModal
    isOpen={isOpen}
    style={modalStyles}
    shouldCloseOnOverlayClick={true}
    onRequestClose={onClose}
  >
    <div className="comment-modal">
      <div className="comment-main-info-container">
        <p>{title}</p>
        <p>{date}</p>
      </div>
      <p>{description}</p>
    </div>
  </ReactModal>
}

export default Modal;