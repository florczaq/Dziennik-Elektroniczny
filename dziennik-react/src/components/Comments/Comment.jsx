import React from "react";
import "./Comments.css";


const Comment = ({ title = "", description = "", date, positive = false, onCommentOpen }) => {
  return <div className={`comment ${positive && "positive"}`} onClick={() => onCommentOpen(title, description, date)} >
    <p>{title}</p>
    <p>{date}</p>
  </div>
}

export default Comment;