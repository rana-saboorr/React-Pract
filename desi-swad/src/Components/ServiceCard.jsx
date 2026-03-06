
import React from 'react';
import { useNavigate } from 'react-router-dom';

const ServiceCard = ({ obj}) => {
  const navigate = useNavigate();
  
  const handleClick = ()=>{
      if(obj.button==="View Menu")
      {
          navigate("/menu")
      }
      else if (obj.button === "Order Now")
      {
          navigate('/')
      }
  }
  return (
    <div className="border-2  border-yellow-500 rounded-xl p-6 max-w-xs bg-yellow-400 text-center shadow-md m-4">
      {obj.image && (
        <img 
          src={obj.image} 
          alt={obj.title} 
          className="w-full h-auto rounded-lg mb-4"
        />
      )}
      <h3 className="text-xl font-bold mb-2">{obj.title}</h3>
      <p className="text-gray-700 mb-4">{obj.content}</p>
      {obj.button && (
        <button onClick={handleClick} href='#' className="bg-yellow-400 text-black font-bold py-2 px-4 border-orange-900 rounded hover:bg-yellow-600 transition">
          {obj.button}
        </button>
      )}
    </div>
  );
};

export default ServiceCard;
