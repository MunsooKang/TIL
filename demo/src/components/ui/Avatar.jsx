// Avatar.jsx
import React, { useState } from "react";

const AvatarContainer = ({ children }) => (
  <div className="flex flex-wrap justify-between max-w-2xl mx-auto">{children}</div>
);

const AvatarItem = ({ children }) => (
  <div className="w-1/4 mb-4 p-2 relative transition-transform transform hover:scale-110">
    {children}
  </div>
);

const AvatarImage = ({ src, alt }) => (
  <img className="w-full h-full rounded-full object-cover" src={src} alt={alt} />
);

const ArtistName = ({ children }) => <div className="text-center mt-2">{children}</div>;

const AddButton = ({ children }) => (
  <button className="absolute bottom-0 right-0 bg-green-500 text-white py-1 px-2 text-xs rounded">
    {children}
  </button>
);

export function Avatar() {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  // 더미 데이터
  const artists = [
    { id: 1, name: "아티스트1", image: "/path/to/image1.jpg" },
    { id: 2, name: "아티스트2", image: "/path/to/image2.jpg" },
    { id: 3, name: "아티스트3", image: "/path/to/image3.jpg" },
    // 추가 아티스트 데이터...
  ];

  return (
    <AvatarContainer>
      {artists.map((artist) => (
        <AvatarItem
          key={artist.id}
          onMouseEnter={() => setHoveredIndex(artist.id)}
          onMouseLeave={() => setHoveredIndex(null)}
          style={{
            transform: hoveredIndex === artist.id ? "scale(1.1)" : "scale(1)",
          }}
        >
          <AvatarImage src={artist.image} alt={artist.name} />
          <ArtistName>{artist.name}</ArtistName>
          <AddButton>Add</AddButton>
        </AvatarItem>
      ))}
    </AvatarContainer>
  );
}
