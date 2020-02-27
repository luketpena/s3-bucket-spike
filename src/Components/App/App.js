import React from 'react';
import './App.css';

import Uploader from '../Uploader/Uploader';
import DisplayImage from '../DisplayImage/DisplayImage';

function App() {
  return (
    <div className="App">
    <Uploader />
    <DisplayImage />
    </div>
  );
}

export default App;
