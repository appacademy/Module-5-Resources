import { NavLink } from 'react-router-dom';
import './GalleryNavigation.css';

function GalleryNavigation({ galleries }) {
  // console.log(galleries);
  const galleryList = galleries.map(gallery => (
    <NavLink key={gallery.id} to={`galleries/${gallery.id}`}>
      {gallery.name}
    </NavLink>
  ))

  return (
    <nav>
      <h1>Galleries</h1>
      <NavLink to="/">Home</NavLink>
      {galleryList}
    </nav>
  )
}

export default GalleryNavigation;
