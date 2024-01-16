import React from 'react';

export default function Group({ imageUrl, memberName }) {
  return (
    <li className="flex items-center mb-2">
      {/* A: 이미지가 들어갈 수 있는 동그라미 */}
      <div className="w-12 h-12 overflow-hidden rounded-full bg-gray-300 flex items-center justify-center mr-2">
        <img
          alt="Group Member"
          src={imageUrl || "/default-image-placeholder.png"}
          className="w-full h-full object-cover"
        />
      </div>

      {/* B: 맴버 이름을 적을 수 있는 부분 */}
      <div>{memberName}</div>
    </li>
  );
};
