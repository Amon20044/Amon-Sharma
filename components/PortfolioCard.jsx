import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const PortfolioCard = ({ imageUrl, title, clientName, behanceLink }) => {
  const CardContent = () => (
  
    <div className=" bg-black bord border-2 overflow-hidden shadow-lg transition-transform duration-300 hover:scale-105 cursor-pointer">
      
      <div className=" relative h-48 w-full">
        <Image
          src={imageUrl || '/placeholder-image.jpg'}
          alt={title}
          layout="fill"
          objectFit="cover"
        />
      </div>
      <div className="p-4">
        <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-2">{title}</h3>
        <p className="text-gray-600 dark:text-gray-300">{clientName}</p>
      </div>
    </div>
  );

  if (behanceLink) {
    return (
      <Link href={behanceLink} target="_blank" rel="noopener noreferrer">
        <CardContent />
      </Link>
    );
  }

  return <CardContent />;
};

export default PortfolioCard;