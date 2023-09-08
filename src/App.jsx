import { useState } from 'react';
import './App.scss';
import React from 'react';
import ImageGallery from 'react-image-gallery';
import 'react-image-gallery/styles/css/image-gallery.css';
import employees from './data/employees.json';

const  images = employees.map(m => ({original: `images/employee_${m.employeeID}.jpg`, description: m.firstName}))

const customRenderItem = (item) => {
	return (
		<div className="custom-gallery-item">
			<img src={item.original} alt={item.description} />
			{item.description && (
				<span className="image-description"><span>{item.description}</span></span>
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
