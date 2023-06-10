import { useEffect, useState } from "react";
import notesService from "../../services/localStorageNotesService";
import DetailsEmpty from "./detailsEmpty";
import NoteMenu from "./noteMenu";
import "./details.css";

const DetailsForm = ({ note, setCurrentNote }) => {
  const [isReadOnly, setIsReadOnly] = useState(true);
  const [noteObj, setNoteObj] = useState();

  useEffect(() => {
    console.log("note :>> ", note);
    setNoteObj(note);
    setIsReadOnly(!!note.id);
  }, [note]);

  const handleChange = (e) => {
    if (isReadOnly) return;
    const input = e.currentTarget.name;
    setNoteObj({ ...noteObj, [input]: e.currentTarget.value });
  };

  const handleSave = () => {
    notesService.saveNote(noteObj);
    console.log("Saving noteObj :>> ", noteObj);
    setIsReadOnly(true);
    setCurrentNote(null);
  };

  const renderPrimaryAction = () => {
    return isReadOnly ? (
      <span
        className="fa-regular fa-pen-to-square"
        onClick={() => setIsReadOnly(false)}
      ></span>
    ) : (
      <span className="fa-regular fa-floppy-disk" onClick={handleSave}></span>
    );
  };

  if (!noteObj) return <></>;
  return (
    <div className="na_details">
      <span className="na_details_title">
        <input
          name="title"
          type="text"
          value={noteObj.title}
          onChange={handleChange}
        />{" "}
        <span className="na_details_saveIcon">{renderPrimaryAction()}</span>
        <NoteMenu
          handleAddToFavorite={() => notesService.addToFavorites(noteObj)}
          handleArchive={() => notesService.addToArchive(noteObj)}
          handleDelete={() => notesService.deleteNote(noteObj)}
          defaultAction={() => setCurrentNote(null)}
          alreadyFavorited={noteObj.favorite === true}
          alreadyArchived={noteObj.archived === true}
          alreadyTrashed={noteObj.trashed === true}
        />
      </span>
      <div className="na_details_attr">
        <span className="na_details_attrIcon">
          <span className="fa-solid fa-calendar-days"></span>
        </span>
        <span className="na_details_attrKey">Date :</span>
        <span className="na_details_attrValue">{noteObj.dateCreated}</span>
      </div>
      <hr />
      <div className="na_details_attr">
        <span className="na_details_attrIcon">
          <span className="fa-regular fa-folder"></span>
        </span>
        <span className="na_details_attrKey">Folder :</span>
        <select
          name="folderId"
          value={noteObj.folderId}
          onChange={handleChange}
        >
          <option>Select</option>
          {notesService.getFolders().map((item) => (
            <option key={item.id} value={item.id}>
              {item.title}
            </option>
          ))}
        </select>
      </div>
      <textarea
        name="content"
        className="na_details_content"
        value={noteObj.content}
        onChange={handleChange}
      ></textarea>
    </div>
  );
};

const Details = ({ currentNote, setCurrentNote }) => {
  return (
    <div className="na_details_container">
      {!currentNote && <DetailsEmpty />}
      {currentNote && (
        <DetailsForm note={currentNote} setCurrentNote={setCurrentNote} />
      )}
    </div>
  );
};

export default Details;
