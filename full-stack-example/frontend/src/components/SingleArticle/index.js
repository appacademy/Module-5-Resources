import { NavLink, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchSingleArticle } from "../../store/articleReducer";
import "./SingleArticle.css";

const SingleArticle = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const article = useSelector((store) => store.articleState[id]);

  if (!article) {
    dispatch(fetchSingleArticle(id));
    return null;
  }

  return (
    <div className="singleArticle">
      <NavLink to="/">Back to Article Home</NavLink>
      <h1>{article.title}</h1>
      <img src={article.imageUrl} alt={article.title} />
      <p>{article.body}</p>
    </div>
  );
};

export default SingleArticle;
