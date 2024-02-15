import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import './SingleArticle.css';

const SingleArticle = () => {
  const { id } = useParams();
  const singleArticle = useSelector(
    //!!START SILENT
    state => state.articleState.entries.find(article => article.id === +id)
    //!!END
    //!!ADD
    // state => state.articleState.entries.find(article => article.id === id)
    //!!END_ADD
  )

  return (
    <div className='singleArticle'>
      <h1>{singleArticle?.title}</h1>
      <img
        src={singleArticle?.imageUrl}
        alt={singleArticle?.title}
      />
      <p>
        {singleArticle?.body}
      </p>
    </div>
  );
};

export default SingleArticle;
