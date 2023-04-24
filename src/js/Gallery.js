import '../css/Gallery.css';
import {galleryLinks} from '../helpers/GalleryLinks';

function Gallery() {
  const galleryImages = galleryLinks.map((imageData, i) => {
    if(imageData.ar === "1:2"){ //Tall images
      return <div className='galleryFrame tallImage' key={'galleryImage'+i}><img className='galleryImage' alt='' src={imageData.link}/></div>
    } else if(imageData.ar === "2:1"){ //Wide images
      return <div className='galleryFrame wideImage' key={'galleryImage'+i}><img className='galleryImage' alt='' src={imageData.link}/></div>
    } else { //Square images
      return <div className='galleryFrame squareImage' key={'galleryImage'+i}><img className='galleryImage' alt='' src={imageData.link}/></div>
    }
  });

  return (
    <div id="Gallery">
        {galleryImages}   
    </div>
  );
}

export default Gallery;