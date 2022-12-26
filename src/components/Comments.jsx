import React from "react";
import "./Comments/Comments.css"

const comments = [
  { title: "Ta  uwaga jest pozytywna", date: "01.01.2020", positive: false },
  { title: "Jakaś uwaga o długim tytule", date: "01.01.2020", positive: true },
  { title: "Tytuł 3", date: "01.01.2020", positive: false },
  { title: "Tytuł 4", date: "01.01.2020", positive: true },
]

const Title = () => {
  return <div className="title">
    Uwagi
  </div>
}

const Comment = ({ title = "", description = "", date = new Date(), positive = false }) => {
  return <div className={`comment ${positive && "positive"}`} >
    <p>{title}</p>
    <p>{date}</p>
  </div>
}

const Comments = () => {
  return <div className="comments-container">
    <Title />
    {
      comments.map((e, i) => {
        return <div key={i}>
          <Comment {...e} />
        </div>
      })
    }

  </div>
}

export default Comments;