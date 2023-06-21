import { useEffect, useState } from "react";
import notesService from "../../services/localStorageNotesService";
import MenuGroup from "./common/menuGroup";
import MenuGroupItem from "./common/menuGroupItem";
import MenuGroupItemNewFolderInput from "./common/menuGroupItemNewFolderInput";
import "./menu.css";

const icons = {
  page: <span className="fa-regular fa-file-lines"></span>,
  folderOpen: <span className="fa-regular fa-folder-open"></span>,
  folder: <span className="fa-regular fa-folder"></span>,
  star: <span className="fa-regular fa-star"></span>,
  trash: <span className="fa-regular fa-trash-can"></span>,
  archieve: <span className="fa-solid fa-box-archive"></span>,
};

const Menu = ({ fileContainer, setFileContainer, setCurrentNote }) => {
  const [recentsMenuGroup, setRecentsMenuGroup] = useState(null);
  const [foldersMenuGroup, setFoldersMenuGroup] = useState(null);
  const [isAddingFolder, setIsAddingFolder] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchText, setSearchText] = useState("");

  const handleCreateFolder = (folderName) => {
    notesService.createFolder(folderName);
    setIsAddingFolder(false);
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
      <span
        className="na_menu_group__labelIcon"
        onClick={() => setIsAddingFolder(!isAddingFolder)}
      >
        <span className="fa-solid fa-folder-plus"></span>
      </span>
    </>
  );

  const handleSearch = (e) => {
    setSearchText(e.target.value);
  };

  const handleSearchKeyDown = (e) => {
    if (e.key === "Enter") {
      setFileContainer("search", {
        title: "Search Results",
        searchText: searchText,
      });
    }
  };

  return (
    <div className="na_menu">
      <span className="na_menu_title">
        NoteApp{" "}
        <span
          className="na_menu_searchIcon"
          onClick={() => setIsSearchOpen(!isSearchOpen)}
        >
          <span className="fa-solid fa-magnifying-glass"></span>
        </span>
      </span>
      {!isSearchOpen && (
        <button className="na_menu_newNoteBtn" onClick={handleNewNoteBtnClick}>
          New Note
        </button>
      )}
      {isSearchOpen && (
        <div className="na_menu_searchBox">
          <span className="fa-solid fa-magnifying-glass"></span>
          <input
            type="text"
            placeholder="Search note"
            value={searchText}
            onChange={handleSearch}
            onKeyDown={handleSearchKeyDown}
          />
        </div>
      )}
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
              handleFolderCreate={handleCreateFolder}
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
