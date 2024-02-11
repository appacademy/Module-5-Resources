import { useParams, Link } from 'react-router-dom';
import './ArtDescription.css';

function ArtDescription({ galleries }) {
  const { galleryId, artId } = useParams();
  const gallery = galleries.find(gallery => gallery.id === Number(galleryId));
  const art = gallery.objects.find(art => art.id === Number(artId));

  console.log(art);

  return (
    <div className="art-description">
      <a href={art.url}><h3>{art.title}</h3></a>
      <Link to={`..`}>Back to {gallery.name} Gallery</Link>
      <p>{art.description}</p>
      <p>Credit: {art.creditline}</p>
      <p>Technique: {art.technique}</p>
      <div className="art-image-list">
        {art.images.map(image => (
          <img src={image.baseimageurl} key={image.imageid} alt={art.title} />
        ))}
      </div>
    </div>
  );
}

export default ArtDescription;
