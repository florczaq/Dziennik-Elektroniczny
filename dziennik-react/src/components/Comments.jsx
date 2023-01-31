import React, { useEffect, useState } from "react";
import ReactModal from "react-modal";
import { getStudentComments } from "../connection/Connection";
import { getLoggedStudentInfo } from "../connection/Session";
import "./Comments/Comments.css";


const Title = () => {
  return <div className="title">Uwagi</div>
}

const Comment = ({ title = "", description = "", date, positive = false, onCommentOpen }) => {
  return <div className={`comment ${positive && "positive"}`} onClick={() => onCommentOpen(title, description, date)} >
    <p>{title}</p>
    <p>{date}</p>
  </div>
}

const renderComments = (comments, onCommentOpen) => comments.map(
  (e, i) => {
    return <div key={i}>
      <Comment {...e} onCommentOpen={onCommentOpen} />
    </div>
  }
)

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


const Comments = () => {
  const [isModalOpen, setModalOpen] = useState(false);
  const [openCommentData, setOpenCommentData] = useState({});
  const [data, setData] = useState([]);

  useEffect(() => {
    ReactModal.setAppElement('.comments-container')
    getStudentComments(1)
      .then(res => setData(res.data))
      .catch(err => console.error(err))
  }, [])

  const onCommentOpen = (title, description, date) => {
    setModalOpen(true);
    setOpenCommentData({ title: title, description: description, date: date })
  }

  return <div className="comments-container">
    <Title />
    <Modal isOpen={isModalOpen} onClose={() => setModalOpen(false)} {...openCommentData} />
    {renderComments(data, onCommentOpen)}
  </div>
}

export default Comments;