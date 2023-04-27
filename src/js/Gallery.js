import "../css/Gallery.css";
import { galleryLinks } from "../helpers/GalleryLinks";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import { useEffect, useState, useMemo } from "react";
import { Suspense } from "react";

function Gallery() {
  const [photoData, setPhotoData] = useState([]);

  const [isPictureChosen, setIsPictureChosen] = useState(false);
  const [chosenImage, setChosenImage] = useState("");
  const [chosenImageType, setChosenImageType] = useState("");



  const galleryImages = useMemo(() => photoData.map((imageData, i) => {
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
            onClick={(e) => {e.preventDefault(); setChosenImage(imageData.link); setChosenImageType(imgType); setIsPictureChosen(true)}}
          />
      </div>
    );
  }), [photoData]);

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

  return <div id="PictureContent"><div id="Gallery">{galleryImages}</div><div id="LargeSpace" onClick={(e) => {e.preventDefault(); if(e.target.id === "LargeSpace")setIsPictureChosen(false)}} className={(isPictureChosen ? "visibleElem":"invisibleElem")}><div id="LargeFrame" className={chosenImageType}><div id="TitleTab"><div id="CloseBtn" onClick={(e) => {e.preventDefault(); setIsPictureChosen(false);}}>X</div></div><img alt="Chosen Large Image" id="LargeImage" className={chosenImageType} src={chosenImage}/></div></div></div>;
}

export default Gallery;
