import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import "./SingleArticle.css";

const SingleArticle = () => {
  const { id } = useParams();
  const singleArticle = useSelector((state) => state.articleState.entries);
  const article = singleArticle.find((article) => article.id === id);

  if(!article) return null;

  return (
    <div className="singleArticle">
      <h1>{article.title}</h1>
      <img src={article.imageUrl} alt={singleArticle.title} />
      <p>{article.body}</p>
    </div>
  );
};

export default SingleArticle;
