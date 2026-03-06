import React from 'react'

function MenuCard({ title, onClick }) {
  return (
    <li
      onClick={onClick}
      className="rounded-lg border border-yellow-300 p-6 text-center 
                 hover:bg-yellow-600 hover:text-white 
                 transition-colors duration-300 cursor-pointer"
    >
      {title}
    </li>
  );
}

export default MenuCard
