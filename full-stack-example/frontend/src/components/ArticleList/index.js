import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { fetchArticles } from "../../store/articleReducer";

const ArticleList = () => {
  const dispatch = useDispatch();
  const articles = useSelector((state) => state.articleState);

  if (Object.keys(articles).length < 2) {
    dispatch(fetchArticles());
    return null;
  }

  return (
    <div>
      <h1>Article List</h1>
      <div className="cards-wrapper width-100">
        {Object.values(articles).map(({ id, title, imageUrl }) => (
          <div className="card">
            <NavLink to={`/article/${id}`} key={id}>
              <img src={imageUrl} alt="soething" className="card-img" />
              <span>{title}</span>
            </NavLink>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ArticleList;
