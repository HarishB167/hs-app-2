import "./conversationsList.css";

const ConversationsList = ({ data, currentUserId, getTimeMarker }) => {
  const getSenderReceiverClass = (item) => {
    return currentUserId === item.senderId
      ? " ca_conversation_msgSender"
      : " ca_conversation_msgReceiver";
  };

  return (
    <>
      {data &&
        data.map((item, idx) => (
          <div
            key={idx}
            className={
              "ca_conversation_chatItem" + getSenderReceiverClass(item)
            }
          >
            <div className="ca_conversation_chatMessage">{item.content}</div>
            <div className="ca_conversation_chatTime">
              {getTimeMarker(item.dateTime)}
            </div>
          </div>
        ))}
    </>
  );
};

export default ConversationsList;
