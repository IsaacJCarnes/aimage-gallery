import "../css/Gallery.css";
import { galleryLinks } from "../helpers/GalleryLinks";
import { useEffect, useState, useMemo } from "react";

function Gallery() {
  const [photoData, setPhotoData] = useState([]);

  const [isPictureChosen, setIsPictureChosen] = useState(false);
  const [chosenImage, setChosenImage] = useState(0);
  
  const sortByType = (arr) => {
    return arr.sort((a, b) => {
      if(a['format'] === "wide" && b['format'] !== "wide"){
        return 1;
      }
      else {
        return -1
      }
    })
  }
  
// main function
function simplify(str) {
  var result = '', data = str.split('/'),
      numOne = Number(data[0]),
      numTwo = Number(data[1]);
  for (var i = Math.max(numOne, numTwo); i > 1; i--) {
  if ((numOne % i === 0) && (numTwo % i === 0)) {
      numOne /= i;
      numTwo /= i;
  }
  }
  result = "image"+numOne.toString() + '-' + numTwo.toString()
  return result
}

  const galleryImages = useMemo(
    () =>
      sortByType(photoData).map((imageData, i) => {
        console.log(imageData['ar'])
        let width = parseInt(imageData.size.split('x')[0]);
        let height = parseInt(imageData.size.split('x')[1]);
        return (
          <div
            className={`galleryFrame  ${imageData['ar']}`}
            key={"galleryImage" + i}
          >
            <img
              className="galleryImage"
              loading="lazy"
              alt=""
              width={width}
              height={height}
              src={imageData.link}
              onClick={(e) => {
                e.preventDefault();
                setChosenImage(i);
                setIsPictureChosen(true);
              }}
            />
          </div>
        );
      }),
    [photoData]
  );

  useEffect(() => {
    //Randomize photo array on page load
    var tempArr = galleryLinks;
    for (var i = tempArr.length - 1; i > 0; i--) {
      var j = Math.floor(Math.random() * (i + 1));
      var tempNum = tempArr[i];
      tempArr[i] = tempArr[j];
      tempArr[j] = tempNum;
    }
    for (i = 0; i < tempArr.length; i++) {
      let width = parseInt(tempArr[i]['size'].split('x')[0]);
      let height = parseInt(tempArr[i]['size'].split('x')[1]);
      tempArr[i].ar = simplify(`${width}/${height}`)
    }
    setPhotoData(tempArr);
  }, []);

  return (
    <div id="PictureContent">
      <div id="Gallery">{galleryImages}<div id="BlankSpace"/></div>
      <div
        id="LargeSpace"
        onClick={(e) => {
          e.preventDefault();
          if (e.target.id === "LargeSpace") setIsPictureChosen(false);
        }}
        className={isPictureChosen ? "visibleElem" : "invisibleElem"}
      >
        <div
          id="LargeFrame"
          className={isPictureChosen ? `${photoData[chosenImage].ar}` : ""}
        >
          <div id="TitleTab">
            <div
              id="CloseBtn"
              onClick={(e) => {
                e.preventDefault();
                setIsPictureChosen(false);
              }}
            >
              X
            </div>
          </div>
          <img
            alt="Selection Area"
            id="LargeImage"
            className={isPictureChosen ? photoData[chosenImage].ar : ""}
            src={isPictureChosen ? photoData[chosenImage].link : ""}
          />
        </div>
      </div>
    </div>
  );
}

export default Gallery;
