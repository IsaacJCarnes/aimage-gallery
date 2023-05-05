import "../css/Gallery.css";
import { galleryLinks } from "../helpers/GalleryLinks";
//import { LazyLoadImage } from "react-lazy-load-image-component";
//import "react-lazy-load-image-component/src/effects/blur.css";
import { useEffect, useState, useMemo } from "react";

function Gallery() {
  const [photoData, setPhotoData] = useState([]);

  const [isPictureChosen, setIsPictureChosen] = useState(false);
  const [chosenImage, setChosenImage] = useState(0);

  const galleryImages = useMemo(() => photoData.map((imageData, i) => {
    return (
      <div className={"galleryFrame " + imageData.imgType} key={"galleryImage" + i}>
          <img
            className="galleryImage"
            loading="lazy"
            alt=""
            src={imageData.link}
            onClick={(e) => {e.preventDefault(); setChosenImage(i); setIsPictureChosen(true)}}
          />
      </div>
    );
  }), [photoData]);

  useEffect(() => { //Randomize photo array on page load
    var tempArr = galleryLinks;
    for (var i = tempArr.length - 1; i > 0; i--) {
      var j = Math.floor(Math.random() * (i + 1));
      var tempNum = tempArr[i];
      tempArr[i] = tempArr[j];
      tempArr[j] = tempNum;
    }
    setPhotoData(tempArr);
  }, []);

  return <div id="PictureContent"><div id="Gallery">{galleryImages}</div><div id="LargeSpace" onClick={(e) => {e.preventDefault(); if(e.target.id === "LargeSpace")setIsPictureChosen(false)}} className={(isPictureChosen ? "visibleElem":"invisibleElem")}><div id="LargeFrame" className={(isPictureChosen ? photoData[chosenImage].imgType : "")}><div id="TitleTab"><div id="CloseBtn" onClick={(e) => {e.preventDefault(); setIsPictureChosen(false);}}>X</div></div><img alt="Chosen Large Image" id="LargeImage" className={(isPictureChosen ? photoData[chosenImage].imgType:"")} src={(isPictureChosen ? photoData[chosenImage].link : "")}/></div></div></div>;
}

export default Gallery;
