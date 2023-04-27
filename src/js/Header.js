import { useState } from 'react';
import '../css/Header.css';
function Header() {
  const usableNames = ["AImage Gallery", "A Image Gallery"]
  const funNames = ["AI Mage Gallery", "AImageGallery"]
  //Usable names should show up twice as much as fun names
  const possibleNames = usableNames.concat(usableNames).concat(funNames);
  const [name, setName] = useState("AImage Gallery");
  return (
    <div id="Header">
        <div id='HeaderArea'>
            <div id='WebName' onAnimationIteration={(e) => {e.preventDefault(); setName(possibleNames[Math.floor(Math.random() * possibleNames.length)])}}>{name}</div>
        </div>
    </div>
  );
}

export default Header;