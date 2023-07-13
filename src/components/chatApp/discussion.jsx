import React from "react";
import DiscussionItem from "./discussionItem";
import "./discussion.css";

const Discussion = ({ discussions, handleDiscussionItemClick }) => {
  return (
    <div className="ca_discussions ca_messagesSection">
      <div className="ca_messages_headingLine">
        <span className="ca_messages_label">Discussions</span>
        <span className="ca_messages_settingIcon">
          <i className="fa-solid fa-gear"></i>
        </span>
      </div>
      <div className="ca_discussionsList">
        {discussions.map((item, idx) => (
          <DiscussionItem
            key={idx}
            user={item}
            handleClick={() => handleDiscussionItemClick(item)}
          />
        ))}
      </div>
    </div>
  );
};

export default Discussion;
