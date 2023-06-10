import { useEffect, useState } from "react";
import Details from "./details";
import List from "./list";
import "./main.css";
import Menu from "./menu";
import notesService from "../../services/localStorageNotesService";

const Main = () => {
  const [menuData, setMenuData] = useState();
  const [listData, setListData] = useState();
  const [detailPageData, setDetailPageData] = useState();
  const [fileContainer, setFileContainer] = useState();
  const [currentNote, setCurrentNote] = useState();

  useEffect(() => {
    setFileContainer({
      type: "folder",
      container: notesService.getFolderForId(1),
    });
  }, []);

  const setFContainer = (type, container) => {
    setFileContainer({ type, container });
  };

  return (
    <div className="na_container">
      <Menu
        data={menuData}
        setData={setMenuData}
        fileContainer={fileContainer}
        setFileContainer={setFContainer}
        currentNote={currentNote}
        setCurrentNote={setCurrentNote}
      />
      <List
        data={listData}
        setData={setListData}
        fileContainer={fileContainer}
        currentNote={currentNote}
        setCurrentNote={setCurrentNote}
      />
      <Details
        data={detailPageData}
        setData={setDetailPageData}
        currentNote={currentNote}
        setCurrentNote={setCurrentNote}
      />
    </div>
  );
};

export default Main;
