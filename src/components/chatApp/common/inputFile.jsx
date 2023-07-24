import { useEffect, useRef, useState } from "react";
import "./inputFile.css";

const InputFile = ({ label, onChange, name, value, uniqueId = "files" }) => {
  const ref = useRef();

  const [fileName, setFileName] = useState(label);

  useEffect(() => {
    if (ref.current.files && ref.current.files.length)
      setFileName(ref.current.files[0].name);
  });
  return (
    <>
      <label htmlFor={uniqueId} className="ca_inputFile">
        <span className="ca_inputFile_icon">
          <i className="fa-solid fa-download"></i>
        </span>{" "}
        {fileName}
      </label>
      <input
        id={uniqueId}
        name={name}
        style={{ display: "none" }}
        type="file"
        onChange={onChange}
        value={value}
        ref={ref}
      />
    </>
  );
};

export default InputFile;
