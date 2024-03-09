import { useParams, Navigate } from 'react-router-dom';
import ArtImageTile from '../ArtImageTile';
import './GalleryView.css';

function GalleryView({ galleries }) {
  const { galleryId } = useParams();
  const gallery = galleries.find(gallery => gallery.id === Number(galleryId));

  console.log(gallery);

  if (!gallery) return (<Navigate to="/" replace />);

  return (
    <>
      <h2>{gallery.name}</h2>
      <div className="art-nav">
        {gallery.objects.map((art) => (
          <ArtImageTile art={art} key={art.id} />
        ))}
      </div>
    </>
  );
}

export default GalleryView;
