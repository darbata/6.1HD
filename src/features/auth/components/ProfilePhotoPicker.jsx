import { useState, useRef } from "react";

const ProfilePhotoPicker = ({file, setFile}) => {
  const [preview, setPreview] = useState(null);
  const inputRef = useRef();

  const handleFile = (file) => {
    if (file && file.type.startsWith("image/")) {
      setFile(file)
      console.log(file)
      setPreview(URL.createObjectURL(file));
    }
  };

  return (
    <div className="flex justify-center items-center ">
      <div
        className=" rounded-full aspect-square size-16 flex items-center justify-center cursor-pointer overflow-hidden border"
        onClick={() => inputRef.current.click()}
        onDragOver={(event) => event.preventDefault()}
        onDrop={(event) => {
          event.preventDefault();
          handleFile(event.dataTransfer.files[0]);
        }}
      >
        {preview ? (
          <img src={preview} alt="preview" className="w-full h-full object-cover" />
        ) : (
          <p className="text-xs text-balance text-muted-foreground ">Add photo</p>
        )}
        <input
          type="file"
          accept="image/*"
          ref={inputRef}
          className="hidden"
          onChange={(event) => handleFile(event.target.files[0])}
        />
      </div>
    </div>
  );
}

export default ProfilePhotoPicker