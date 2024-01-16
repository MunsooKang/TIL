import React, {useState} from 'react';
import ApplyModal from '../components/ApplyModal.jsx'

export default function Content({ artist, image, description }) {
  const [isOpen, setIsOpen] = useState(false)
  
  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  return (
    <div  onClick={openModal}  className="max-w-md rounded overflow-hidden shadow-lg mx-2 my-4 bg-gray-800 text-white">
      {/* 아티스트 정보 */}
      <div className="text-center py-2">
        <h3 className="text-xl font-semibold">{artist}</h3>
      </div>

      {/* 이미지 */}
      <div className="aspect-w-4 aspect-h-3">
        <img className="object-cover w-full h-full" src={image} alt="Artist" />
      </div>

      {/* 설명 */}
      <div className="text-gray-300 text-base px-4 py-2">
        <p>{description}</p>
      </div>

      {/* 모달 컴포넌트*/}
      <ApplyModal isOpen={isOpen} closeModal={closeModal}/>
    </div>
  );
}
