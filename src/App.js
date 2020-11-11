import Unsplash from 'unsplash-js';

import './App.css';
import 'antd/dist/antd.css';
import { ACCESS_KEY } from './constants';
import SearchBar from './components/SearchBar';
import Grid from './components/Grid';
import Footer from './components/Footer';
// TODO: Replace "APP_ACCESS_KEY" with your own key, which
// can be generated here: https://unsplash.com/developers
const unsplash = new Unsplash({
  accessKey: ACCESS_KEY,
});

function App() {
  return (
    <div className="App">
      <SearchBar />
      <Grid />
      <Footer />
    </div>
  );
}

export default App;
