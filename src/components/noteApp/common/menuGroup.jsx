import "./menuGroup.css";

const MenuGroup = ({ label, children }) => {
  return (
    <div className="na_menu_group">
      <span className="na_menu_group__label">{label}</span>
      {children}
    </div>
  );
};

export default MenuGroup;
