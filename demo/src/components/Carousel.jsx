import React, { useState } from 'react';

export default function Carousel({ items }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  // 다음 슬라이드로 이동하는 함수
  const nextSlide = () => {
    // 현재 인덱스를 기반으로 다음 슬라이드의 인덱스 계산 (원형 구조)
    const newIndex = (currentIndex + 1) % items.length;
    setCurrentIndex(newIndex);
  };

  // 이전 슬라이드로 이동하는 함수
  const prevSlide = () => {
    // 현재 인덱스를 기반으로 이전 슬라이드의 인덱스 계산 (원형 구조)
    const newIndex = (currentIndex - 1 + items.length) % items.length;
    setCurrentIndex(newIndex);
  };

  return (
    <div className="relative overflow-hidden">
      <div className="flex items-center space-x-2 transition-transform duration-300 transform">
        {items.map((item, index) => (
          <div
            key={index}
            className={`flex-shrink-0 w-full md:w-1/3 transform ${
              // 현재 보이는 슬라이드에 대해 translate 설정
              index === currentIndex ? 'translate-x-0' : 'translate-x-full md:-translate-x-0'
            }`}
          >
            <img src={item.image} alt={item.alt} className="w-full h-64 object-cover" />
          </div>
        ))}
      </div>
      <button
        className="absolute inset-y-0 left-0 flex items-center justify-center w-12 h-12 bg-gray-800 bg-opacity-50 text-white hover:bg-opacity-75 cursor-pointer"
        onClick={prevSlide}
      >
        &lt; {/* 이전 슬라이드로 이동하는 화살표 */}
      </button>
      <button
        className="absolute inset-y-0 right-0 flex items-center justify-center w-12 h-12 bg-gray-800 bg-opacity-50 text-white hover:bg-opacity-75 cursor-pointer"
        onClick={nextSlide}
      >
        &gt; {/* 다음 슬라이드로 이동하는 화살표 */}
      </button>
    </div>
  );
}
