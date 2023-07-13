import "./discussionItem.css";

const DiscussionItem = ({ user, handleClick }) => {
  return (
    <div className="ca_discussionItem" onClick={handleClick}>
      <span className="ca_profilePhoto">
        <img src={user.photoLink} alt={user.name} />
      </span>
      <div className="ca_discussionItem_details">
        <span className="ca_userName">{user.name}</span>
        <span className="ca_lastMessageTimeMarker">
          {user.lastMessageTimeMarker}
        </span>
        <span className="ca_userLastMessage">{user.lastMessage}</span>
      </div>
    </div>
  );
};

export default DiscussionItem;
