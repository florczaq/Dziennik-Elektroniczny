import React, { useEffect, useState } from "react";
import ReactModal from "react-modal";
import { getStudentComments } from "../../connection/Connection";
import * as Session from "../../connection/Session";
import Comment from "./SingleComment";
import "./Comments.css";
import Modal from "./Modal";


const Title = () => <div className="title">Uwagi</div>


const renderComments = (comments, onCommentOpen) => comments.map(
  (e, i) => {
    return <div key={i}>
      <Comment {...e} onCommentOpen={onCommentOpen} />
    </div>
  }
)

const Comments = () => {
  const [isModalOpen, setModalOpen] = useState(false);
  const [openCommentData, setOpenCommentData] = useState({});
  const [data, setData] = useState([]);

  useEffect(() => {
    ReactModal.setAppElement('.comments-container')
    getStudentComments(Session.getLoggedStudentInfo().id)
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