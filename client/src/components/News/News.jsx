import "./News.css";
import axios from "axios";
import { useEffect, useState } from "react";
import { apiNewsUrl } from "../../api/requests";
import { Link } from "react-router-dom";

const News = () => {
  const [news, setNews] = useState([]);
  useEffect(() => {
    const fetchNews = async () => {
      try {
        const res = await axios.get(apiNewsUrl);
        console.log(res.data);
        setNews(res.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchNews();
  }, []);
  return (
    <>
      <div className="container">
        <div className="news-list">
          {news.map((item) => (
            <Link key={item.id} to="#" className="news-item">
              <div>
                <img src={item.image} alt="" className="news-item-img" />
              </div>
              <h3 className="news-item-title">{item.title}</h3>
              <p className="news-item-createAt">{item.createAt}</p>
            </Link>
          ))}
        </div>
      </div>
    </>
  );
};

export default News;
