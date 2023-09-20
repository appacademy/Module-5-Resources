import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { fetchArticles } from "../../store/articleReducer";

const ArticleList = () => {
  const dispatch = useDispatch();

  const articles = useSelector((state) => state.articleState);

  if (Object.keys(articles).length < 2) {
    dispatch(fetchArticles());
    return null
  }

  return (
    <div>
      <h1>Article List</h1>
      <ol>
        {Object.values(articles).map(({ id, title }) => (
          <li key={id}>
            <NavLink to={`/article/${id}`}>{title}</NavLink>
          </li>
        ))}
      </ol>
    </div>
  );
};

export default ArticleList;
