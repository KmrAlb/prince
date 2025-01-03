// src/components/ModalImageViewer.tsx

import { useState } from 'react';

const ModalImageViewer = ({ images }: { images: string[] }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const openModal = (index: number) => {
    setCurrentImageIndex(index);
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  return (
    <>
      <div className="flex flex-wrap gap-6">
        {images.map((image, index) => (
          <div key={index} className="w-full sm:w-1/2 lg:w-1/3">
            <img
              src={image}
              alt={`Engagement image ${index + 1}`}
              className="w-full h-auto object-cover rounded-lg cursor-pointer"
              onClick={() => openModal(index)}
            />
          </div>
        ))}
      </div>

      {isOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="relative">
            <img src={images[currentImageIndex]} alt="Large view" className="max-w-full max-h-full object-contain" />
            <button
              onClick={closeModal}
              className="absolute top-0 right-0 p-4 text-white bg-opacity-50 hover:bg-opacity-100"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default ModalImageViewer;
