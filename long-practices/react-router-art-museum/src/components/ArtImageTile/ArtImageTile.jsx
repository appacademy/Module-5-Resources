import { Link } from 'react-router-dom';
import './ArtImageTile.css';

function ArtImageTile({ art }) {
  if (!art.images[0]) {
    return (
      <Link className="image-tile" to={`art/${art.id}`}>
        {art.title}
      </Link>
    );
  }
  return (
    <Link className="image-tile" to={`art/${art.id}`}>
      <img src={art.images[0].baseimageurl} alt={art.title} />
    </Link>
  );
}

export default ArtImageTile;
