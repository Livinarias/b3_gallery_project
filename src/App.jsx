import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import { Image1 } from './components/Image1';
import { Image2 } from './components/Image2';
import { Image3 } from './components/Image3';
import { Image4 } from './components/Image4';
import { Image5 } from './components/Image5';
import { Navigation } from './components/Navigation';

function App() {

  return (
    <>
      <BrowserRouter>
        <div>
          <h1 className='text-center my-3'>Gallery Project</h1>
        </div>
        <div className='container d-flex justify-content-center'>
          <Routes>
            <Route path='/image1' element={<Image1 className='main-img-container'/>} />
            <Route path='/image2' element={<Image2 className='main-img-container'/>} />
            <Route path='/image3' element={<Image3 className='main-img-container'/>} />
            <Route path='/image4' element={<Image4 className='main-img-container'/>} />
            <Route path='/image5' element={<Image5 className='main-img-container'/>} />
          </Routes>
        </div>
        <div className='container'>
          <Navigation />
        </div>
      </BrowserRouter>
    </>
  );
};

export default App;
