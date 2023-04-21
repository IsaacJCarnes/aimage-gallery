import '../css/App.css';
import Header from './Header';
import Gallery from './Gallery';

function App() {
  return (
    <div className="App">
      <Header />
      <div id='Content'>
        <Gallery />
      </div>
    </div>
  );
}

export default App;
