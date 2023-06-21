import { useState } from "react";
import "./menuGroupItem.css";

const MenuGroupItemNewFolderInput = ({ title, icon, handleFolderCreate }) => {
  const [folderName, setFolderName] = useState(title);
  const [isInputFocused, setIsInputFocused] = useState(false);

  const handleBlur = () => {
    try {
      if (isInputFocused) handleFolderCreate(folderName);
    } catch (e) {
      alert(e.message);
    }
  };

  return (
    <div className="na_menu_group_item">
      {icon}
      <input
        type="text"
        value={folderName}
        className="na_menu_group_item_input"
        onBlur={handleBlur}
        onChange={(e) => setFolderName(e.target.value)}
        onFocus={() => setIsInputFocused(true)}
      ></input>
    </div>
  );
};

export default MenuGroupItemNewFolderInput;
