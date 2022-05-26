import { apiNewsRelease } from "../../api/requests";
import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
const NewsRelease = () => {
  const [NewsRelease, setNewsRelease] = useState([]);
  useEffect(() => {
    const fetchNews = async () => {
      try {
        const res = await axios.get(apiNewsRelease);
        console.log(res.data);
        setNewsRelease(res.data);
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
          {NewsRelease.map((item) => (
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

export default NewsRelease;
