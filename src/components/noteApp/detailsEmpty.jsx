import "./detailsEmpty.css";

const DetailsEmpty = () => {
  return (
    <div className="na_details__default">
      <span className="na_details_defaultIcon">
        <span className="fa-regular fa-file-lines"></span>
      </span>
      <span className="na_details_defaultTitle">Select a note to view</span>
      <span className="na_details_defaultHint">
        Choose a note from the list on the left to view its contents, or create
        a new note to add to your collection.
      </span>
    </div>
  );
};

export default DetailsEmpty;
