// Test.jsx
import React, { useState } from 'react';
import Navbar from './Navbar';
import Sidebar from './artist/Sidebar.jsx';
import Artist from './artist/Artist.jsx';
import Group from './artist/Group.jsx';

export default function Test({}) {
  const [selectedTab, setSelectedTab] = useState('내정보');

  // 가상의 그룹 데이터
  const groupData = [
    { id: 1, imageUrl: "/member1.jpg", memberName: "Member 1" },
    { id: 2, imageUrl: "/member2.jpg", memberName: "Member 2" },
    { id: 3, imageUrl: "/member3.jpg", memberName: "Member 3" },
    { id: 4, imageUrl: "/member4.jpg", memberName: "Member 4" },
    { id: 5, imageUrl: "/member5.jpg", memberName: "Member 5" },
    { id: 6, imageUrl: "/member6.jpg", memberName: "Member 4" },
    // ... 추가적인 그룹 데이터
  ];

  // 한 페이지에 표시할 그룹 수
  const groupsPerPage = 4;

  // 현재 페이지
  const [currentPage, setCurrentPage] = useState(1);

  // 현재 페이지의 그룹 데이터 가져오기
  const currentGroups = groupData.slice((currentPage - 1) * groupsPerPage, currentPage * groupsPerPage);

  return (
    <>
      <Navbar />

      <div className="flex">
        <Sidebar selectedTab={selectedTab} onSelectTab={setSelectedTab} />

        <div className="w-10/12 flex bg-gray-200" >
          <div className="w-1/2">
            <div className="h-1/2">
              <Artist />
            </div>

            <div className="h-1/2">
              <ul className="flex flex-wrap">
                {/* 각 그룹 데이터에 대한 Group 컴포넌트 렌더링 */}
                {currentGroups.map(group => (
                  <Group key={group.id} imageUrl={group.imageUrl} memberName={group.memberName} />
                ))}
              </ul>

              {/* 페이지 네비게이션 */}
              <div className="mt-2">
                <button
                  className="px-3 py-1 mr-2 bg-blue-500 text-white rounded"
                  onClick={() => setCurrentPage(prevPage => Math.max(prevPage - 1, 1))}
                >
                  이전
                </button>
                <button
                  className="px-3 py-1 bg-blue-500 text-white rounded"
                  onClick={() => setCurrentPage(prevPage => Math.min(prevPage + 1, Math.ceil(groupData.length / groupsPerPage)))}
                >
                  다음
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
