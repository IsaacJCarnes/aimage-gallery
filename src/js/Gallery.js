import '../css/Gallery.css';
import {galleryLinks} from '../helpers/GalleryLinks';
import { LazyLoadImage } from "react-lazy-load-image-component";
import 'react-lazy-load-image-component/src/effects/blur.css';
import { useEffect, useState } from 'react';



function Gallery() {
  const [photoData, setPhotoData] = useState([]);

  const galleryImages = photoData.map((imageData, i) => {
    if(imageData.ar === "1:2"){ //Tall images
      return <div className='galleryFrame tallImage' key={'galleryImage'+i}><LazyLoadImage className='galleryImage' alt='' src={imageData.link} effect='blur'/></div>
    } else if(imageData.ar === "2:1"){ //Wide images
      return <div className='galleryFrame wideImage' key={'galleryImage'+i}><LazyLoadImage className='galleryImage' alt='' src={imageData.link} effect='blur'/></div>
    } else { //Square images
      return <div className='galleryFrame squareImage' key={'galleryImage'+i}><LazyLoadImage className='galleryImage' alt='' src={imageData.link} effect='blur'/></div>
    }
  });

  useEffect(() => {
    var tempArr = galleryLinks;
    for (var i = tempArr.length - 1; i > 0; i--) {
      var j = Math.floor(Math.random() * (i + 1));
      var tempNum = tempArr[i];
      tempArr[i] = tempArr[j];
      tempArr[j] = tempNum;
    }
    setPhotoData(tempArr);
  }, []);

  return (
    <div id="Gallery">
        {galleryImages}   
    </div>
  );
}

export default Gallery;