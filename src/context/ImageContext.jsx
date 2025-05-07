import { createContext, useContext } from 'react';

const ImageContext = createContext();

const imageList = [
  '1.webp',
  '2.webp',
  '3.webp',
  '4.webp',
  '5.webp',
  '6.webp',
  '7.webp',
  '8.webp',
  '9.webp',
  '10.webp'
];

export function ImageProvider({ children }) {
  const basePath = '/assets/images';

  const getFullPath = (filename) => `${basePath}/${filename}`;

  return (
    <ImageContext.Provider value={{ imageList, getFullPath }}>
      {children}
    </ImageContext.Provider>
  );
}

export const useImageContext = () => useContext(ImageContext);
