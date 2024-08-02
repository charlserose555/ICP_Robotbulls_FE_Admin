import { useRef, useEffect, useState } from "react";
import alert from "../../utils/Alert";

export function CSVFileInput({
  onUpload,
  formats
}) {
    const dropContainer = useRef(null);
    const [dragging, setDragging] = useState(false);
    const fileRef = useRef(null);
    const [filename, setFilename] = useState("");

    function handleDrop(e, type) {
        let files;
        if (type === "inputFile") {
        files = [...e.target.files];
        } else {
        e.preventDefault();
        e.stopPropagation();
        setDragging(false);
        files = [...e.dataTransfer.files];
        }

        let file = files[0];

        let isFileValid = false;

        isFileValid = formats.some((format) => file.type.endsWith(`${format}`))

        if(!isFileValid) {
            alert("warning", `Invalid file format. Please only upload ${formats
                .join(", ")
                .toUpperCase()}`);
            
            return;
        } 

        if(file.size > 10 * 1024 * 1024) {
            alert("warning", `Invalid file size. Please only upload the smaller than 10MB`);
            
            return;
        }

        setFilename(file.name);

        onUpload(file);
    }

    async function convertFileBase64(file) {
        return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = () => {
            resolve(reader.result);
        };
        reader.onerror = (error) => {
            reject(error);
        };
        });
    }

    useEffect(() => {
        function handleDragOver(e) {
        e.preventDefault();
        e.stopPropagation();
        setDragging(true);
        }
        function handleDragLeave(e) {
        e.preventDefault();
        e.stopPropagation();
        setDragging(false);
        }
        dropContainer.current.addEventListener("dragover", handleDragOver);
        dropContainer.current.addEventListener("drop", handleDrop);
        dropContainer.current.addEventListener("dragleave", handleDragLeave);

        return () => {
        if (dropContainer.current) {
            dropContainer.current.removeEventListener("dragover", handleDragOver);
            dropContainer.current.removeEventListener("drop", handleDrop);
            dropContainer.current.removeEventListener("dragleave", handleDragLeave);
        }
        };
    }, []);

    return (
        <>
        {/* Container Drop */}
        <div
            className={`${
            dragging
                ? "1px border-dashed border-[#2B92EC] bg-primary-700"
                : "1px border-dashed border-[#e0e0e0]"
            } flex items-center justify-center w-full mx-auto text-center border-2 rounded-md mt-4 py-5 bg-gray-100`}
            ref={dropContainer}
        >
            <div className="flex-1 flex flex-col">
            <div className="text-[14px] font-normal text-gray-700 flex flex-col justify-center items-center gap-4">
                <input
                className="opacity-0 hidden"
                type="file"
                accept="application/pdf"
                ref={fileRef}
                onChange={(e) => handleDrop(e, "inputFile")}
                />
                Drag and drop file or
                <a className="text-14 w-40 px-2 mx-2 py-2 fill-btn-continue text-white font-medium bg-darkblue-550 rounded-2 flex flex-row flex-wrap justify-around gap-45 items-center"
                    style={{textAlign: 'center', cursor: 'pointer'}}
                    onClick={() => {fileRef.current.click();}}>
                    <p className='text-white font-medium text-14'>Click to upload</p>
                </a>  {" "}
            </div>
            <div className="text-[12px] px-2 font-normal text-gray-700 pt-4">
                Only files CSV
            </div>
            <p className="text-[16px] font-normal text-green-700">{filename}</p>
            </div>
        </div>
        </>
    );
}
