import React from 'react';

export default function Sidebar({ selectedTab, onSelectTab }) {
  return (
    <div className="w-2/12 bg-gray-800 text-white p-4">
      <div 
        className={`cursor-pointer mb-4 ${selectedTab === '내정보' ? 'text-blue-500' : ''} hover:text-blue-500`} 
        onClick={() => onSelectTab('내정보')}
      >
        내 정보
      </div>
      <div 
        className={`cursor-pointer ${selectedTab === '팬싸관리' ? 'text-blue-500' : ''} hover:text-blue-500`} 
        onClick={() => onSelectTab('팬싸관리')}
      >
        팬싸 관리
      </div>
    </div>
  );
}
