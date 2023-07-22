import { useRef, useState, useEffect } from "react";
import ConversationsList from "./conversationsList";
import "./conversations.css";

const Conversation = ({
  activeOtherEndUser,
  activeDiscussion,
  currentUserId,
  getTimeMarker,
  sendMessage,
  handleUpdate,
}) => {
  const scrollRef = useRef();
  const [currentMessage, setCurrentMessage] = useState("");

  const handleMessageSend = async () => {
    if (currentMessage.length === 0) return;
    const receiverUserId = activeOtherEndUser.id;
    console.log(
      "Sending message...",
      currentMessage,
      " : to -",
      receiverUserId
    );
    setCurrentMessage("");
    await sendMessage(currentMessage, currentUserId, receiverUserId);
    handleUpdate();
    scrollRef.current.scrollIntoView();
  };

  useEffect(() => {
    if (scrollRef.current) scrollRef.current.scrollIntoView();
  });

  return (
    <div className="ca_conversation">
      {!activeOtherEndUser && (
        <div className="ca_conversation_notSelected">
          <span className="ca_conversation_notSelected_icon">
            <i className="fa-regular fa-hand-pointer"></i>
          </span>
          <span>Select a conversation</span>
        </div>
      )}
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
            <ConversationsList
              data={activeDiscussion}
              currentUserId={currentUserId}
              getTimeMarker={getTimeMarker}
            />
            <span
              ref={scrollRef}
              className="ca_conversation_chat_scrollPoint"
            ></span>
          </div>
          <div className="ca_conversation_inputBar">
            <span className="ca_profilePhoto">
              <img src={activeOtherEndUser.photoLink} alt="" />
            </span>
            <input
              type="text"
              className="ca_messageInput"
              placeholder="Message"
              value={currentMessage}
              onChange={(e) => setCurrentMessage(e.currentTarget.value)}
            />
            <button
              className="ca_messageInput_sendBtn"
              onClick={handleMessageSend}
            >
              Send
              <span className="ca_messageInput_sendIcon">
                <i className="fa-regular fa-paper-plane"></i>
              </span>
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default Conversation;
