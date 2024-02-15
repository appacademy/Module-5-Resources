import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
//!!START SILENT
import { fetchArticles } from '../../store/articleReducer';
//!!END
//!!ADD
// import { loadArticles } from '../../store/articleReducer';
//!!END_ADD

const ArticleList = () => {
  const dispatch = useDispatch();
  const articles = useSelector(state=>state.articleState.entries);

  useEffect(() => {
    //!!START SILENT
    dispatch(fetchArticles());
    //!!END
    //!!ADD
    // dispatch(loadArticles());
    //!!END_ADD
  }, [dispatch]);

  return (
    <div>
      <h1>Article List</h1>
      <ol>
        {articles.map(({ id, title }) => (
          <li key={id}><NavLink to={`${id}`}>{title}</NavLink></li>
        ))}
      </ol>
    </div>
  );
};

export default ArticleList;
