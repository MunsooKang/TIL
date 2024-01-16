import React, { useState } from 'react';
import Header from '../components/Header.jsx';
import Content from '../components/Content.jsx';
import Carousel from '../components/Carousel.jsx';
import Navbar from '../components/Navbar.jsx';
import { ContentsData, Poster } from '../data.js';
import logo from '../assets/img/f.jpg';

export default function Main(){ 
    const [selectedCategory, setSelectedCategory] = useState('진행');

    const handleCategoryClick = (category) => {
      setSelectedCategory(category);
    };
  return(
    <div>
        {/* Navbar Component */}
        <Navbar image={logo} />

        {/* Header Component */}
        <Header />

        {/* Carousel Component */}
        <Carousel items={Poster} />

        {/* Main Section */}
        <section className="flex flex-col md:flex-row items-stretch bg-gray-900 text-white">
          {/* Category List Section (20%) */}
          <ul className="flex flex-col items-center md:items-start space-y-4 md:space-y-0 mb-4">
            {['진행', '예정', '미정'].map((category) => (
              <li
                key={category}
                className={`cursor-pointer ${
                  selectedCategory === category
                    ? 'bg-purple-500 text-white'
                    : 'hover:bg-purple-500 hover:text-white'
                } py-3 px-6 rounded`}
                onClick={() => handleCategoryClick(category)}
              >
                {category}
              </li>
            ))}
          </ul>

          {/* Content Section (80%) */}
          <div className="w-full md:w-4/5 p-4">
            {/* Contents Title */}
            <div className="mb-4">
              <h2 className="text-2xl font-bold text-center">Contents</h2>
            </div>

            {/* Content Items */}
            <div className="flex flex-wrap justify-around">
              {ContentsData.map((content, index) => (
                <Content
                  key={index}
                  {...content}
                  className="w-full md:w-1/2 lg:w-1/4 mb-4"
                />
              ))}
            </div>
          </div>
        </section>
    </div>
  );    
}