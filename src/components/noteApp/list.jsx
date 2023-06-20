import { useEffect, useState } from "react";
import notesService from "../../services/localStorageNotesService";
import "./list.css";

const ListItem = ({ title, dateCreated, content, handleClick, selected }) => {
  return (
    <div
      className={
        "na_list_listItem" + (selected ? " na_list_listItem--selected" : "")
      }
      onClick={handleClick}
    >
      <span className="na_list_listItem_title">{title}</span>
      <span className="na_list_listItem_dateCreated">{dateCreated}</span>
      <span className="na_list_listItem_content">{content}</span>
    </div>
  );
};

const List = ({
  data,
  setData,
  fileContainer,
  currentNote,
  setCurrentNote,
}) => {
  useEffect(() => {
    if (fileContainer && fileContainer.type === "folder") {
      const d = notesService.getNotesInFolder(fileContainer.container.id);
      console.log("d :>> ", d);
      setData(d);
    } else if (fileContainer && fileContainer.type === "recents") {
      const d = notesService.getRecents();
      setData(d);
    } else if (fileContainer && fileContainer.type === "archived") {
      const d = notesService.getArchievedItems();
      setData(d);
    } else if (fileContainer && fileContainer.type === "trash") {
      const d = notesService.getTrashedItems();
      setData(d);
    } else if (fileContainer && fileContainer.type === "favorites") {
      const d = notesService.getFavorites();
      setData(d);
    } else if (fileContainer && fileContainer.type === "search") {
      const d = notesService.searchNotes(fileContainer.container.searchText);
      setData(d);
    }
  }, [fileContainer, currentNote]);

  if (!fileContainer) return <></>;

  return (
    <div className="na_list">
      <span className="na_list_title">{fileContainer.container.title}</span>
      <div className="na_listContainer">
        {data &&
          data.map((item, idx) => (
            <ListItem
              {...item}
              key={idx}
              handleClick={() => setCurrentNote(item)}
              selected={currentNote && item.id === currentNote.id}
            />
          ))}
      </div>
    </div>
  );
};

export default List;
