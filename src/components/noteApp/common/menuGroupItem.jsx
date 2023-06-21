import "./menuGroupItem.css";

const MenuGroupItem = ({ title, icon, action }) => {
  return (
    <div className="na_menu_group_item" onClick={action}>
      <span className="na_menu_group_item_icon">{icon}</span> {title}
    </div>
  );
};

export default MenuGroupItem;
