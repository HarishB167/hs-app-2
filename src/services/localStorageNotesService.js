const basicFolders = [
  {
    id: 1,
    title: "Personal",
  },
  {
    id: 2,
    title: "Work",
  },
  {
    id: 3,
    title: "Travel",
  },
  {
    id: 4,
    title: "Events",
  },
  {
    id: 5,
    title: "Finances",
  },
];

const getListItems = () => {
  return JSON.parse(localStorage.getItem("listItems")) || [];
};

const setListItems = (listItems) => {
  localStorage.setItem("listItems", JSON.stringify(listItems));
};

const getFoldersLocalStorage = () => {
  return JSON.parse(localStorage.getItem("folders")) || [];
};

const setFoldersLocalStorage = (folders) => {
  localStorage.setItem("folders", JSON.stringify(folders));
};

if (getFoldersLocalStorage().length === 0) setFoldersLocalStorage(basicFolders);

const getNotes = () => {
  const listItems = getListItems();
  const folders = getFoldersLocalStorage();
  listItems.splice(listItems.length, 0, ...listItems);
  return listItems.map((item) => ({
    ...item,
    folderName: folders[item.folderId],
  }));
};

const saveNote = (note) => {
  const listItems = getListItems();
  let noteInDb = null;
  if (note.id) {
    noteInDb = listItems.find((item) => item.id === note.id);
  } else {
    const now = new Date();
    const date = `${now.getDate()}/${now.getMonth() + 1}/${now.getFullYear()}`;
    noteInDb = { id: now.getMilliseconds() };
    noteInDb.dateCreated = date;
    listItems.push(noteInDb);
  }
  noteInDb.title = note.title;
  noteInDb.content = note.content;
  noteInDb.folderId = parseInt(note.folderId);
  noteInDb.favorite = note.favorite;
  noteInDb.trashed = note.trashed;
  setListItems(listItems);
};

const getNotesInFolder = (folderId) => {
  const listItems = getListItems();
  return listItems.filter(
    (item) => item.folderId === folderId && !item.trashed && !item.archived
  );
};

const getRecents = () => {
  const listItems = getListItems();

  return listItems.slice(0, 3);
};

const getFolders = () => {
  const folders = getFoldersLocalStorage();
  return folders;
};

const getFolderForId = (id) => {
  const folders = getFoldersLocalStorage();
  return folders.find((item) => item.id === id);
};

const createFolder = (name) => {
  const folders = getFoldersLocalStorage();
  if (folders.find((item) => item.title === name))
    throw Error("Folder with given name already exists");
  folders.push({ id: new Date().getMilliseconds(), title: name });
  setFoldersLocalStorage(folders);
};

const getFavorites = () => {
  const listItems = getListItems();
  return listItems.filter((item) => item.favorite);
};

const addToFavorites = (note) => {
  const listItems = getListItems();
  const noteInDb = listItems.find((item) => item.id === parseInt(note.id));
  noteInDb.favorite = true;
  setListItems(listItems);
};

const getTrashedItems = () => {
  const listItems = getListItems();

  return listItems.filter((item) => item.trashed);
};

const deleteNote = (note) => {
  const listItems = getListItems();
  const noteInDb = listItems.find((item) => item.id === parseInt(note.id));
  noteInDb.trashed = true;
  console.log("deleting note :>> ", note);
  console.log("deleting noteInDb :>> ", noteInDb);
  setListItems(listItems);
};

const getArchievedItems = () => {
  const listItems = getListItems();
  return listItems.filter((item) => item.archived);
};

const addToArchive = (note) => {
  const listItems = getListItems();
  const noteInDb = listItems.find((item) => item.id === parseInt(note.id));
  noteInDb.archived = true;
  setListItems(listItems);
};

export default {
  getNotes,
  saveNote,
  getNotesInFolder,
  getRecents,
  getFolders,
  createFolder,
  getFolderForId,
  getFavorites,
  addToFavorites,
  getTrashedItems,
  deleteNote,
  getArchievedItems,
  addToArchive,
};
