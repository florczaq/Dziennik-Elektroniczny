import React from 'react'
import "./News/News.css";

import { getSchoolNews } from '../connection/Connection';
import { useState } from 'react';
import { useEffect } from 'react';

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
      .catch(err=>console.error(`Smth went wrong. ${err}`));
  }, []);

  return (
    <div className='news-container'>
      <div className='news'>
        {
          data.map((e, i) => {
            return <SingleNews key={i} {...e} />
          })
        }
      </div>
    </div>
  )
}
