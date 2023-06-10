import { useEffect, useState } from "react";
import notesService from "../../services/localStorageNotesService";
import "./menu.css";

const icons = {
  page: <span className="fa-regular fa-file-lines"></span>,
  folderOpen: <span className="fa-regular fa-folder-open"></span>,
  folder: <span className="fa-regular fa-folder"></span>,
  star: <span className="fa-regular fa-star"></span>,
  trash: <span className="fa-regular fa-trash-can"></span>,
  archieve: <span className="fa-solid fa-box-archive"></span>,
};

const MenuGroup = ({ label, children }) => {
  return (
    <div className="na_menu_group">
      <span className="na_menu_group__label">{label}</span>
      {children}
    </div>
  );
};

const MenuGroupItem = ({ title, icon, action }) => {
  return (
    <div className="na_menu_group_item" onClick={action}>
      <span className="na_menu_group_item_icon">{icon}</span> {title}
    </div>
  );
};
const MenuGroupItemNewFolderInput = ({ title, icon, handleFolderCreated }) => {
  const [folderName, setFolderName] = useState(title);
  const [isInputFocused, setIsInputFocused] = useState(false);

  const handleBlur = () => {
    try {
      if (isInputFocused) notesService.createFolder(folderName);
    } catch (e) {
      alert(e.message);
    }
    handleFolderCreated();
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

const Menu = ({ fileContainer, setFileContainer, setCurrentNote }) => {
  const [recentsMenuGroup, setRecentsMenuGroup] = useState(null);
  const [foldersMenuGroup, setFoldersMenuGroup] = useState(null);
  const [isAddingFolder, setIsAddingFolder] = useState(false);

  const handleCreateFolder = () => {
    setIsAddingFolder(!isAddingFolder);
  };

  useEffect(() => {
    setRecentsMenuGroup(notesService.getRecents());
    setFoldersMenuGroup(notesService.getFolders());
  }, [fileContainer, isAddingFolder]);

  const handleNewNoteBtnClick = () => {
    setCurrentNote({
      title: "",
      dateCreated: "",
      content: "",
      folderId: "",
    });
  };

  const folderLabel = (
    <>
      Folders{" "}
      <span className="na_menu_group__labelIcon" onClick={handleCreateFolder}>
        <span className="fa-solid fa-folder-plus"></span>
      </span>
    </>
  );

  return (
    <div className="na_menu">
      <span className="na_menu_title">
        NoteApp{" "}
        <span className="na_menu_searchIcon">
          <span className="fa-solid fa-magnifying-glass"></span>
        </span>
      </span>
      <button className="na_menu_newNoteBtn" onClick={handleNewNoteBtnClick}>
        New Note
      </button>
      <div className="na_menu_menuGroupsContainer">
        <MenuGroup label="Recents">
          {recentsMenuGroup &&
            recentsMenuGroup.map((item, idx) => (
              <MenuGroupItem
                title={item.title}
                action={() => setCurrentNote({ ...item })}
                icon={icons.page}
                key={idx}
              />
            ))}
        </MenuGroup>
        <MenuGroup label={folderLabel}>
          {isAddingFolder && (
            <MenuGroupItemNewFolderInput
              title="New Folder"
              icon={icons.folder}
              handleFolderCreated={() => setIsAddingFolder(false)}
            />
          )}
          {foldersMenuGroup &&
            foldersMenuGroup.map((item, idx) => (
              <MenuGroupItem
                title={item.title}
                action={() => setFileContainer("folder", { ...item })}
                icon={
                  fileContainer
                    ? item.id === fileContainer.container.id
                      ? icons.folderOpen
                      : icons.folder
                    : icons.folder
                }
                key={idx}
              />
            ))}
        </MenuGroup>
        <MenuGroup label="More">
          <MenuGroupItem
            title="Favorites"
            icon={icons.star}
            action={() => setFileContainer("favorites", { title: "Favorites" })}
          />
          <MenuGroupItem
            title="Trash"
            icon={icons.trash}
            action={() => setFileContainer("trash", { title: "Trash" })}
          />
          <MenuGroupItem
            title="Archieved Notes"
            icon={icons.archieve}
            action={() =>
              setFileContainer("archived", { title: "Archived Notes" })
            }
          />
        </MenuGroup>
      </div>
    </div>
  );
};

export default Menu;
