import React from 'react';
import { IImageGallery } from '../Types/global.types';


interface IImagecard extends
Partial <IImageGallery> {
    className?: string;
    onClick?: (id: string | number) => void;
}

const ImageOverlayCard = ({ slug, className = ""}: IImagecard) => {
    return (
        <div className={twMerge("rounded-lg overflow-hidden border border-gray-400 group flex items-center justify-center h-full", className)}>
            
        </div>
    );
};

export default ImageOverlayCard;