const folders = [
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

const listItems = [
  {
    id: 1,
    title: "My goals for next year",
    dateCreated: "31/12/2022",
    content: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
        Lorem Ipsum has been the industry's standard dummy text.`,
    folderId: 1,
    favorite: true,
  },
  {
    id: 2,
    title: "Reflection on the Month of June",
    dateCreated: "21/06/2022",
    content: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
        Lorem Ipsum has been the industry's standard dummy text.`,
    folderId: 1,
    trashed: true,
  },
  {
    id: 3,
    title: "My Favorite Memories from Childhood",
    dateCreated: "21/06/2022",
    content: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
          Lorem Ipsum has been the industry's standard dummy text.`,
    folderId: 2,
    archived: true,
  },
];

const getNotes = () => {
  listItems.splice(listItems.length, 0, ...listItems);
  return listItems.map((item) => ({
    ...item,
    folderName: folders[item.folderId],
  }));
};

const saveNote = (note) => {
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
};

const getNotesInFolder = (folderId) => {
  return listItems.filter(
    (item) => item.folderId === folderId && !item.trashed && !item.archived
  );
};

const getRecents = () => {
  return listItems.slice(0, 3);
};

const getFolders = () => {
  return folders;
};

const getFolderForId = (id) => {
  return folders.find((item) => item.id === id);
};

const getFavorites = () => {
  return listItems.filter((item) => item.favorite);
};

const addToFavorites = (note) => {
  const noteInDb = listItems.find((item) => item.id === parseInt(note.id));
  noteInDb.favorite = true;
};

const getTrashedItems = () => {
  return listItems.filter((item) => item.trashed);
};

const deleteNote = (note) => {
  const noteInDb = listItems.find((item) => item.id === parseInt(note.id));
  noteInDb.trashed = true;
  console.log("deleting note :>> ", note);
  console.log("deleting noteInDb :>> ", noteInDb);
};

const getArchievedItems = () => {
  return listItems.filter((item) => item.archived);
};

const addToArchive = (note) => {
  const noteInDb = listItems.find((item) => item.id === parseInt(note.id));
  noteInDb.archived = true;
};

export default {
  getNotes,
  saveNote,
  getNotesInFolder,
  getRecents,
  getFolders,
  getFolderForId,
  getFavorites,
  addToFavorites,
  getTrashedItems,
  deleteNote,
  getArchievedItems,
  addToArchive,
};
