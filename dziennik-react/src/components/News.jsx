import React, { useEffect, useState } from 'react';
import { getSchoolNews } from '../connection/Connection';
import "./News/News.css";

const SingleNews = ({ title = "", date = "", content = "" }) => {
  return <div className='single-news'>
    <div className='main-info'>
      <p>{title}</p>
      <p>{date}</p>
    </div>
    <p className='content-p'>{content}</p>
  </div>
}

export default function News() {
  const [data, setData] = useState([]);

  useEffect(() => {
    getSchoolNews()
    .then(res => setData(res.data))
    .catch(err => console.error(err))
  },
    []);

  const renderNews = data.map((e, i) => <SingleNews key={i} {...e} />)

  return (
    <div className='news-container'>
      <div className='news'>
        {renderNews}
      </div>
    </div>
  )
}
