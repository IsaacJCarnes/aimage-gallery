import {
  Routes,
  Route
} from "react-router-dom";

import '../css/App.css';
import Header from './Header';
import Gallery from './Gallery';

function App() {
  const basePath = "/aimage-gallery/";
  return (
    <div className="App">
      <Header />
      <div id='Content'>
        <Routes>
        <Route exact path={basePath} element={<Gallery />}/>
        </Routes>
      </div>
    </div>
  );
}

export default App;
