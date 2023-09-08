import { useState } from 'react';
import './App.scss';
import React from 'react';
import ImageGallery from 'react-image-gallery';
import 'react-image-gallery/styles/css/image-gallery.css';

// const images = [
//   {
//     original: "https://picsum.photos/id/1018/1000/600/",
//     thumbnail: "https://picsum.photos/id/1018/250/150/",
//   },
//   {
//     original: "https://picsum.photos/id/1015/1000/600/",
//     thumbnail: "https://picsum.photos/id/1015/250/150/",
//   },
//   {
//     original: "https://picsum.photos/id/1019/1000/600/",
//     thumbnail: "https://picsum.photos/id/1019/250/150/",
//   },
// ];

  const images = [
    {
      original: 'https://picsum.photos/id/1018/1000/600/',
      description: 'Description for Image 1',
    },
    {
      original: 'https://picsum.photos/id/1015/1000/600/',
      description: 'Description for Image 2',
    },
    // Add more images as needed
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
