import React, { useRef, useEffect } from 'react';

const useImageZoom = (zoomFactor = 2) => {
  const imageRef = useRef(null);

  useEffect(() => {
    const handleMouseEnter = () => {
      if (imageRef.current) {
        imageRef.current.style.transition = 'none';
      }
    };

    const handleMouseLeave = () => {
      if (imageRef.current) {
        imageRef.current.style.transition = 'transform 0.3s ease-in-out';
        imageRef.current.style.transform = 'scale(1) translate(0, 0)';
      }
    };

    const handleMouseMove = (e) => {
      if (imageRef.current) {
        const rect = imageRef.current.getBoundingClientRect();
        const containerRect = imageRef.current.parentElement.getBoundingClientRect();

        const x = (e.clientX - rect.left) / rect.width;
        const y = (e.clientY - rect.top) / rect.height;

        const translateX = Math.min(Math.max((x - 0.5) * zoomFactor, -(rect.width - containerRect.width) / 2), (rect.width - containerRect.width) / 2);
        const translateY = Math.min(Math.max((y - 0.5) * zoomFactor, -(rect.height - containerRect.height) / 2), (rect.height - containerRect.height) / 2);

        imageRef.current.style.transform = `scale(${zoomFactor}) translate(${translateX}px, ${translateY}px)`;
      }
    };

    const imageElement = imageRef.current;

    if (imageElement) {
      imageElement.addEventListener('mouseenter', handleMouseEnter);
      imageElement.addEventListener('mouseleave', handleMouseLeave);
      imageElement.addEventListener('mousemove', handleMouseMove);

      return () => {
        imageElement.removeEventListener('mouseenter', handleMouseEnter);
        imageElement.removeEventListener('mouseleave', handleMouseLeave);
        imageElement.removeEventListener('mousemove', handleMouseMove);
      };
    }
  }, [zoomFactor]);

  return imageRef;
};

const ZoomImage = ({ src, alt, zoomFactor }) => {
  const imageRef = useImageZoom(zoomFactor);

  return (
    <div style={{ overflow: 'hidden' }}>
      <img
        ref={imageRef}
        src={src}
        alt={alt}
        style={{ transition: 'transform 0.3s ease-in-out', cursor: 'pointer' }}
      />
    </div>
  );
};

export default ZoomImage;
