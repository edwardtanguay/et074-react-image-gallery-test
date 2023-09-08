import { useState } from 'react';
import './App.scss';
import React from 'react';
import ImageGallery from 'react-image-gallery';
import 'react-image-gallery/styles/css/image-gallery.css';

  const images = [
    {
      original: 'images/employee_1.jpg',
      description: 'Jill',
    },
    {
      original: 'images/employee_2.jpg',
      description: 'Alex',
    },
  ];

const customRenderItem = (item) => {
  return (
    <div className="custom-gallery-item">
      <img src={item.original} alt={item.description} />
      {item.description && (
        <span className="image-description">{item.description}</span>
      )}
    </div>
  );
};

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <h1>React Image Gallery Test</h1>
      <ImageGallery items={images} renderItem={customRenderItem} />
    </>
  );
}

export default App;
