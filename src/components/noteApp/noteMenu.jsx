import { useEffect, useState } from "react";
import "./noteMenu.css";

const NoteMenu = ({
  defaultAction,
  handleAddToFavorite,
  handleArchive,
  handleDelete,
  alreadyFavorited,
  alreadyArchived,
  alreadyTrashed,
}) => {
  const [isActive, setIsActive] = useState(false);

  const handleMenuClick = () => {
    setIsActive(!isActive);
  };

  const handleFavClick = () => {
    setIsActive(!isActive);
    handleAddToFavorite();
    defaultAction();
  };

  const handleArchiveClick = () => {
    setIsActive(!isActive);
    handleArchive();
    defaultAction();
  };

  const handleTrashClick = () => {
    setIsActive(!isActive);
    handleDelete();
    defaultAction();
  };

  if (alreadyArchived && alreadyArchived && alreadyTrashed) return <></>;

  return (
    <div className="na_details_noteMenuContainer">
      <span className="na_details_menuIcon" onClick={handleMenuClick}>
        <span className="fa-solid fa-ellipsis"></span>
      </span>
      {isActive && (
        <div className="na_details_noteMenu">
          {!alreadyFavorited && (
            <span className="na_details_noteMenu_item" onClick={handleFavClick}>
              <span className="fa-regular fa-star"></span>{" "}
              <span className="na_details_noteMenu_itemText">
                Add to favorites
              </span>
            </span>
          )}
          {!alreadyArchived && (
            <span
              className="na_details_noteMenu_item"
              onClick={handleArchiveClick}
            >
              <span className="fa-solid fa-box-archive"></span>{" "}
              <span className="na_details_noteMenu_itemText">Archieve</span>
            </span>
          )}
          {!alreadyArchived && !alreadyTrashed && <hr />}
          {!alreadyTrashed && (
            <span
              className="na_details_noteMenu_item"
              onClick={handleTrashClick}
            >
              <span className="fa-regular fa-trash-can"></span>{" "}
              <span className="na_details_noteMenu_itemText">Delete</span>
            </span>
          )}
        </div>
      )}
    </div>
  );
};

export default NoteMenu;
