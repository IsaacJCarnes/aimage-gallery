import '../css/Gallery.css';
import {galleryLinks} from '../helpers/GalleryLinks';
import { LazyLoadImage } from "react-lazy-load-image-component";
import 'react-lazy-load-image-component/src/effects/blur.css';



function Gallery() {
  const galleryImages = galleryLinks.map((imageData, i) => {
    if(imageData.ar === "1:2"){ //Tall images
      return <div className='galleryFrame tallImage' key={'galleryImage'+i}><LazyLoadImage className='galleryImage' alt='' src={imageData.link} effect='blur'/></div>
    } else if(imageData.ar === "2:1"){ //Wide images
      return <div className='galleryFrame wideImage' key={'galleryImage'+i}><LazyLoadImage className='galleryImage' alt='' src={imageData.link} effect='blur'/></div>
    } else { //Square images
      return <div className='galleryFrame squareImage' key={'galleryImage'+i}><LazyLoadImage className='galleryImage' alt='' src={imageData.link} effect='blur'/></div>
    }
  });

  return (
    <div id="Gallery">
        {galleryImages}   
    </div>
  );
}

export default Gallery;