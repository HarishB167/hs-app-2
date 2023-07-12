import { useEffect, useState } from "react";
import chatService from "../../services/fakeChatService";
import "./main.css";
import "./discussionItem.css";
import "./conversations.css";

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

const Conversations = ({ data, currentUserId }) => {
  const getSenderReceiverClass = (item) => {
    return currentUserId === item.senderId
      ? " ca_conversation_msgSender"
      : " ca_conversation_msgReceiver";
  };

  return (
    <>
      {data.map((item, idx) => (
        <div
          key={idx}
          className={"ca_conversation_chatItem" + getSenderReceiverClass(item)}
        >
          <div className="ca_conversation_chatMessage">{item.content}</div>
          <div className="ca_conversatin_chatTime">
            {chatService.getTimeMarker(item.timestamp)}
          </div>
        </div>
      ))}
    </>
  );
};

const Main = () => {
  const [currentUserId, setCurrentUserId] = useState(
    chatService.getCurrentUserId()
  );
  const [activeDiscussion, setActiveDiscussion] = useState();
  const [activeOtherEndUser, setActiveOtherEndUser] = useState();

  const [data, setData] = useState({
    user: {},
    discussions: [],
    chat: [],
  });

  useEffect(() => {
    setData({
      user: chatService.getUserDetails(currentUserId),
      discussions: chatService.getDiscussionsSummaryForUserId(currentUserId),
      chat: chatService.getChatsForUserId(currentUserId),
    });

    setActiveDiscussion(
      chatService.getChatsForUserReceiverId(currentUserId, 2)
    );
    setActiveOtherEndUser(chatService.getUserDetails(2));
  }, []);

  const handleDiscussionItemClick = (discItem) => {
    console.log("discItem :>> ", discItem);
    setActiveOtherEndUser(
      chatService.getUserDetails(parseInt(discItem.userId))
    );
    setActiveDiscussion(
      chatService.getChatsForUserReceiverId(
        currentUserId,
        parseInt(discItem.userId)
      )
    );
  };

  return (
    <div className="ca_main">
      <div className="ca_messages">
        <div className="ca_messagesSection ca_accountDetails">
          <div className="ca_messages_headingLine">
            <span className="ca_messages_label">Account Details</span>
            <span className="ca_messages_settingIcon">
              <i className="fa-solid fa-gear"></i>
            </span>
          </div>
          {data.user.name && (
            <div className="ca_messagesHeading_line">
              <span className="ca_profilePhoto">
                <img src={data.user.photoLink} alt={data.user.name} />
              </span>
              <span className="ca_userName">{data.user.name}</span>
            </div>
          )}
        </div>

        <div className="ca_discussions ca_messagesSection">
          <div className="ca_messages_headingLine">
            <span className="ca_messages_label">Discussions</span>
            <span className="ca_messages_settingIcon">
              <i className="fa-solid fa-gear"></i>
            </span>
          </div>
          <div className="ca_discussionsList">
            {data.discussions.map((item, idx) => (
              <DiscussionItem
                key={idx}
                user={item}
                handleClick={() => handleDiscussionItemClick(item)}
              />
            ))}
          </div>
        </div>
      </div>
      <div className="ca_conversation">
        {activeOtherEndUser && (
          <>
            <div className="ca_conversationDetails">
              <span className="ca_converationDetails_title">Conversation</span>
              <span className="ca_profilePhoto">
                <img src={activeOtherEndUser.photoLink} alt="" />
              </span>
              <span className="ca_userName">{activeOtherEndUser.name}</span>
            </div>
            <div className="ca_conversation_chat">
              <Conversations
                data={activeDiscussion}
                currentUserId={currentUserId}
              />
            </div>
            <div className="ca_conversation_inputBar">
              <span className="ca_profilePhoto">
                <img src={activeOtherEndUser.photoLink} alt="" />
              </span>
              <input
                type="text"
                className="ca_messageInput"
                placeholder="Message"
              />
              <button className="ca_messageInput_sendBtn">
                Send
                <span className="ca_messageInput_sendIcon">
                  <i className="fa-regular fa-paper-plane"></i>
                </span>
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Main;
