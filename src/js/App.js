import {
  Outlet,
} from "react-router-dom";

import '../css/App.css';
import Header from './Header';

function App() {
  const basePath = "/aimage-gallery/";
  return (
    <div className="App">
      <Header />
      <div id='Content'>
        <Outlet />
      </div>
    </div>
  );
}

export default App;
