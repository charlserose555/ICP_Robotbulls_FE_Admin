import { useRef, useEffect, useState } from "react";

import ImageUploading from "react-images-uploading";
import Cropper from "react-easy-crop";
import { cropImage } from "../../utils/cropUtils";

const ImageCropper = ({
    open,
    image,
    onComplete,
    containerStyle,
    ...props
  }) => {
    const [crop, setCrop] = useState({ x: 5, y: 3 });
    const [zoom, setZoom] = useState(1);
    const [croppedAreaPixels, setCroppedAreaPixels] = useState(null);
  
    return (
        <dialog open={open} className="container py-4 px-8">
            <span className="font-bold text-[16px]">Crop Image</span>    
            <div style={containerStyle}>
                <Cropper
                image={image}
                crop={crop}
                zoom={zoom}
                cropShape={"rect"}
                aspect={1.2}
                onCropChange={setCrop}
                onCropComplete={(_, croppedAreaPixels) => {
                    setCroppedAreaPixels(croppedAreaPixels);
                }}
                onZoomChange={setZoom}
                {...props}
                />
            </div>
            <span className="font-bold text-[16px] pt-2 mt-2 cursor-pointer"
                onClick={() =>
                onComplete(cropImage(image, croppedAreaPixels, console.log))
                }>
                Save & Done
            </span>
        </dialog>
    );
};

export function ThumbnailInput({setThumbnail}) {
    const dropContainer = useRef(null);
    const [dragging, setDragging] = useState(false);
    const [filename, setFilename] = useState("");
    const [image, setImage] = useState([]);
    const [croppedImage, setCroppedImage] = useState(null);
    const [dialogOpen, setDialogOpen] = useState(false);

    function handleCroppedImage(image) {
        setCroppedImage(image);
        setThumbnail(image);
    }

    const ImageUploadingButton = ({ value, onChange, ...props }) => {
        return (
          <ImageUploading value={value} onChange={onChange}>
            {({ onImageUpload, onImageUpdate }) => (
                <div className="flex px-4 py-4 flex-col justify-center items-center">

                    <img className="w-48 h-32 rounded-md cursor-pointer" src={croppedImage? croppedImage : "/demo/assets/default_image.svg"} 
                    onClick={value ? onImageUpload : () => onImageUpdate(0)}
                    {...props}
                    alt="blab"/>
                    <p className="text-gray-330 text-18 font-bold">Drag and Drop</p>
                </div>

            )}
          </ImageUploading>
        );
    };

    return (
        <>
        {/* Container Drop */}
        <div
            className={`${
            dragging
                ? "border-dashed border-[#b1becc] bg-primary-700"
                : "border-dashed border-[#b1becc]"
            } flex items-center justify-center mx-auto text-center border-2 rounded-md mt-4 py-5 px-4 w-full h-48`}
            ref={dropContainer}
        >
            <div className="flex-1 flex flex-col">
            <div className="flex justify-around items-center flex-col text-[14px] font-normal text-gray-200">
                <ImageUploadingButton
                    value={image}
                    onChange={(newImage) => {
                    setDialogOpen(true);
                    setImage(newImage);
                    }}
                />
                <ImageCropper
                    open={dialogOpen}
                    image={image.length > 0 && image[0].dataURL}
                    onComplete={(imagePromisse) => {
                    imagePromisse.then((image) => {
                        handleCroppedImage(image);
                        setDialogOpen(false);
                    });
                    }}
                    containerStyle={{
                    position: "relative",
                    width: "100%",
                    height: 300,
                    background: "#ffffff"
                    }}
                />
            </div>
            <p className="text-[16px] font-normal text-darkblue-300">{filename}</p>
            </div>
        </div>
        </>
    );
}


