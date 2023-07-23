import "./inputFile.css";

const InputFile = ({ label, uniqueId = "files" }) => {
  return (
    <>
      <label htmlFor={uniqueId} className="ca_inputFile">
        <span className="ca_inputFile_icon">
          <i className="fa-solid fa-download"></i>
        </span>{" "}
        {label}
      </label>
      <input id={uniqueId} style={{ display: "none" }} type="file" />
    </>
  );
};

export default InputFile;
