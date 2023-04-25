import "../css/Gallery.css";
import { galleryLinks } from "../helpers/GalleryLinks";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import { useEffect, useState } from "react";
import { Suspense } from "react";

function Gallery() {
  const [photoData, setPhotoData] = useState([]);

  const galleryImages = photoData.map((imageData, i) => {
    //Square images by default
    let imgType = "squareImage";
    if (imageData.ar === "1:2") {
      //Tall images
      imgType = "tallImage";
    } else if (imageData.ar === "2:1") {
      //Wide images
      imgType = "wideImage";
    }
    return (
      <div className={"galleryFrame " + imgType} key={"galleryImage" + i}>
          <img
            className="galleryImage"
            alt=""
            src={imageData.link}
            effect="blur"
          />
      </div>
    );
  });

  /*
  return (
      <div className={"galleryFrame " + imgType} key={"galleryImage" + i}>
        <Suspense fallback={<div className="galleryImage"></div>}>
          <LazyLoadImage
            className="galleryImage"
            alt=""
            src={imageData.link}
            effect="blur"
          />
        </Suspense>
      </div>
    );
    */

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

  return <div id="Gallery">{galleryImages}</div>;
}

export default Gallery;
