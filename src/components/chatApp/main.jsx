import { useState } from "react";
import "./main.css";
import "./discussionItem.css";

const DiscussionItem = ({ user }) => {
  return (
    <div className="ca_discussionItem">
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

const Main = () => {
  const [data, setData] = useState({
    user: {
      name: "Nathan",
      photoLink:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRCvOFfpMHEoteB-UMQ9prsdr9lHuExqjV0eHRbhmaN&s",
    },
    discussions: [
      {
        userId: 1,
        lastMessage: "Hi",
        lastMessageTimeMarker: "12h44",
        photoLink: "https://randomuser.me/api/portraits/men/21.jpg",
        name: "John",
      },
      {
        userId: 2,
        lastMessage: "Hello",
        lastMessageTimeMarker: "18h30",
        photoLink: "https://randomuser.me/api/portraits/men/22.jpg",
        name: "Alex",
      },
      {
        userId: 3,
        lastMessage: "Hey there",
        lastMessageTimeMarker: "9h15",
        photoLink: "https://randomuser.me/api/portraits/men/23.jpg",
        name: "Michael",
      },
      {
        userId: 4,
        lastMessage: "Good morning",
        lastMessageTimeMarker: "7h20",
        photoLink: "https://randomuser.me/api/portraits/men/24.jpg",
        name: "David",
      },
      {
        userId: 5,
        lastMessage: "How are you?",
        lastMessageTimeMarker: "21h10",
        photoLink: "https://randomuser.me/api/portraits/men/25.jpg",
        name: "Daniel",
      },
      {
        userId: 6,
        lastMessage: "Nice to meet you",
        lastMessageTimeMarker: "15h55",
        photoLink: "https://randomuser.me/api/portraits/men/26.jpg",
        name: "Matthew",
      },
      {
        userId: 7,
        lastMessage: "What's up?",
        lastMessageTimeMarker: "10h05",
        photoLink: "https://randomuser.me/api/portraits/men/27.jpg",
        name: "William",
      },
      {
        userId: 8,
        lastMessage: "Long time no see",
        lastMessageTimeMarker: "16h45",
        photoLink: "https://randomuser.me/api/portraits/men/28.jpg",
        name: "James",
      },
      {
        userId: 9,
        lastMessage: "See you later",
        lastMessageTimeMarker: "14h30",
        photoLink: "https://randomuser.me/api/portraits/men/29.jpg",
        name: "Christopher",
      },
      {
        userId: 10,
        lastMessage: "Have a great day",
        lastMessageTimeMarker: "13h00",
        photoLink: "https://randomuser.me/api/portraits/men/30.jpg",
        name: "Andrew",
      },
    ],
  });

  return (
    <div className="ca_main">
      <div className="ca_messages">
        <div className="ca_messagesSection ca_accountDetails">
          <div className="ca_messages_headingLine">
            <span className="ca_messages_label">Account Details</span>
            <span className="ca_messages_settingIcon">
              <i class="fa-solid fa-gear"></i>
            </span>
          </div>
          <div className="ca_messagesHeading_line">
            <span className="ca_profilePhoto">
              <img src={data.user.photoLink} alt={data.user.name} />
            </span>
            <span className="ca_userName">{data.user.name}</span>
          </div>
        </div>

        <div className="ca_discussions ca_messagesSection">
          <div className="ca_messages_headingLine">
            <span className="ca_messages_label">Discussions</span>
            <span className="ca_messages_settingIcon">
              <i class="fa-solid fa-gear"></i>
            </span>
          </div>
          <div className="ca_discussionsList">
            {data.discussions.map((item, idx) => (
              <DiscussionItem key={idx} user={item} />
            ))}
          </div>
        </div>
      </div>
      <div className="ca_conversation">
        <div className="ca_conversationDetails">
          <span className="ca_converationDetails_title">Conversation</span>
          <span className="ca_profilePhoto">
            <img src={data.discussions[0].photoLink} alt="" />
          </span>
          <span className="ca_userName">{data.discussions[0].name}</span>
        </div>
        <div className="ca_conversation_chat">Chat</div>
        <div className="ca_conversation_inputBar">
          <span className="ca_profilePhoto">
            <img src={data.discussions[0].photoLink} alt="" />
          </span>
          <input
            type="text"
            className="ca_messageInput"
            placeholder="Message"
          />
          <button className="ca_messageInput_sendBtn">
            Send
            <span className="ca_messageInput_sendIcon">
              <i class="fa-regular fa-paper-plane"></i>
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Main;
