import { useState } from 'react';
import { useDispatch } from 'react-redux';
//!!ADD
// import { nanoid } from 'nanoid';
// import { addArticle } from '../../store/articleReducer';
//!!END_ADD
//!!START SILENT
import { writeArticle } from '../../store/articleReducer';
//!!END
import './ArticleInput.css';

const ArticleInput = () => {
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const [imageUrl, setImageUrl] = useState('');

  const dispatch = useDispatch();

  //!!START SILENT
  const handleSubmit = async (e) => {
  //!!END
  //!!ADD
  // const handleSubmit = (e) => {
  //!!END_ADD
    e.preventDefault();
    const newArticle = {
      //!!ADD
      // id: nanoid(),
      //!!END_ADD
      title,
      body,
      imageUrl
    };

    //!!START SILENT
    const article = await dispatch(writeArticle(newArticle));
    if (article) reset();
    //!!END
    //!!ADD
    // dispatch(addArticle(newArticle));
    // reset();
    //!!END_ADD
  };

  const reset = () => {
    setTitle('');
    setImageUrl('');
    setBody('');
  };

  return (
    <div className='inputBox'>
      <h1>Create Article</h1>
      <form onSubmit={handleSubmit}>
        <input
          type='text'
          onChange={(e) => setTitle(e.target.value)}
          value={title}
          placeholder='Title'
          name='title'
        />
        <input
          type='text'
          onChange={(e) => setImageUrl(e.target.value)}
          value={imageUrl}
          placeholder='Image URL'
          name='imageUrl'
        />
        <textarea
          value={body}
          onChange={(e) => setBody(e.target.value)}
          name='body'
          placeholder='Add your entry'
          rows='10'
        ></textarea>
        <button type='submit'>Submit</button>
      </form>
    </div>
  );
};

export default ArticleInput;
