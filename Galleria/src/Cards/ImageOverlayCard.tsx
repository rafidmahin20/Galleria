import { IImageGallery } from '../Types/global.types';
import { twMerge } from "tailwind-merge";


interface IImagecard extends
Partial <IImageGallery> {
    className?: string;
    onClick?: (id: string | number) => void;
}

const ImageOverlayCard = ({ slug, className = ""}: IImagecard) => {
    return (
        <div className={twMerge("rounded-lg overflow-hidden border border-gray-400 group flex items-center justify-center h-full", className)}>
            <img 
            src={slug || "/src/assets/Images/img1.jpg"}
            alt={slug}
            className='block h-full w-full object-cover'/>
        </div>
    );
};

export default ImageOverlayCard;