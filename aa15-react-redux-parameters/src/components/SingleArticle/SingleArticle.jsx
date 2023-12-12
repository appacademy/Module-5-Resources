import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import "./SingleArticle.css";
import { Suspense } from "react";

const SingleArticle = () => {
  // which article are we interested in?
  const { id } = useParams();

  // where's all the articles?
  const articleArr = useSelector((store) => {
    return store.articleState.entries;
  });
  const isLoading = useSelector((store) => {
    return store.articleState.isLoading;
  });

  console.log("is the array populated: ", articleArr);
  console.log("isLoading: ", isLoading);

  const article = articleArr.find((article) => article.id === id);

  console.log(article);

  if (!article || !isLoading) return null; // hey react, chill out

  return (
    <Suspense fallback={<h1>we are still loading</h1>}>
      <div className="singleArticle">
        <h1>{article.title}</h1>
        <img src={article.imageUrl} alt="home" />
        <p>{article.body}</p>
      </div>
    </Suspense>
  );
};

export default SingleArticle;
