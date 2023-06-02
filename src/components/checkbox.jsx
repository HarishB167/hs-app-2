import "./checkbox.css";

const Checkbox = ({ label, checked, className, onChange }) => {
  return (
    <label className={"checkbox_container " + className} onChange={onChange}>
      {label}
      <input type="checkbox" checked={checked} onChange={onChange} />
      <span className="checkbox_checkmark"></span>
    </label>
  );
};

export default Checkbox;
