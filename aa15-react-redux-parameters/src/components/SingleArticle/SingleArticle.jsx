import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import './SingleArticle.css';

const SingleArticle = () => {
  const { id } = useParams();
  const articleList = useSelector((store) => store.articleState.entries)
  const article = articleList.find((a) => a.id === id)
  console.log("what is the articleList", articleList)
  
  if(!article) return null;

  return (
    <div className='singleArticle'>
      <h1>{article.title}</h1>
      <img
        src={article.imageUrl}
        alt='home'
      />
      <p>
        {article.body}
      </p>
    </div>
  );
};

export default SingleArticle;
