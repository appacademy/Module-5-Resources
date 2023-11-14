import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { nanoid } from 'nanoid';
import { actionAddArticle } from '../../store/articleReducer';
import './ArticleInput.css';

const ArticleInput = () => {
  const dispatch = useDispatch();
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const [imageUrl, setImageUrl] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = {
      id: nanoid(),
      title,
      body,
      imageUrl
    }

    console.log("form data: ", formData)

    dispatch(actionAddArticle(formData))

    reset();
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
