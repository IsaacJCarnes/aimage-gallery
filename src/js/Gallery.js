import '../css/Gallery.css';
import {galleryLinks} from '../helpers/GalleryLinks';

function Gallery() {
  const galleryImages = galleryLinks.map((imageData, i) => {
    return <div className='galleryFrame' key={'galleryImage'+i}><img className='galleryImage' alt='' src={imageData.link}/></div>
  });  
  return (
    <div id="Gallery">
        {galleryImages}   
    </div>
  );
}

export default Gallery;