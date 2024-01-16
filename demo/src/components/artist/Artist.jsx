import React from 'react';
import {Image} from '../../data.js'

console.log(Image)
export default function Artist({}) {
    return (
    <div className="flex">
        {/* A 화면 */}
        <div className="w-1/3 p-4">
        <div className="w-24 h-24 mb-3 overflow-hidden rounded-full bg-gray-300 flex items-center justify-center">
            <img
            alt="Artist"
            src={Image}
            className="w-full h-full object-cover"
            />
        </div>
        </div>

        {/* B 화면 */}
        <div className="w-2/3 p-4 flex flex-col">
        {/* a */}
        <div className="flex items-center mb-2">
            <h2 className="text-xl font-bold mr-2">에스파</h2>
            <button className="text-blue-500">
            <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
            >
                <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M19 9l-7 7-7-7"
                />
            </svg>
            </button>
        </div>

        {/* b */}
        <div className="text-sm text-gray-500">SM Entertainment</div>
        </div>
    </div>
    );
};

