import { useEffect, useState, useRef } from "react";
import Discussion from "./discussion";
import chatService from "../../services/chatService";
import Conversation from "./conversation";
import "./main.css";
import Login from "./login";
import SignUp from "./signup";
import { Outlet, useNavigate } from "react-router-dom";

const Main = () => {
  const [currentUserId, setCurrentUserId] = useState(
    chatService.getCurrentUserId()
  );
  const [activeDiscussion, setActiveDiscussion] = useState();
  const [activeOtherEndUser, setActiveOtherEndUser] = useState();

  const [data, setData] = useState({
    user: {},
    discussions: [],
  });
  const navigate = useNavigate();

  useEffect(() => {
    const doSetData = async () =>
      setData({
        user: await chatService.getUserDetails(currentUserId),
        discussions: await chatService.getDiscussionsSummaryForUserId(
          currentUserId
        ),
      });

    if (currentUserId) doSetData();
    else {
      navigate("login");
    }
  }, []);

  const handleDiscussionItemClick = async (discItem) => {
    setActiveOtherEndUser(
      await chatService.getUserDetails(parseInt(discItem.userId))
    );
    setActiveDiscussion(
      await chatService.getChatsForUserReceiverId(
        currentUserId,
        parseInt(discItem.userId)
      )
    );
  };

  const handleUpdate = async () => {
    setData({
      ...data,
      discussions: await chatService.getDiscussionsSummaryForUserId(
        currentUserId
      ),
    });

    const receiverUserId = activeOtherEndUser.id;
    setActiveDiscussion(
      await chatService.getChatsForUserReceiverId(
        currentUserId,
        parseInt(receiverUserId)
      )
    );
  };

  if (currentUserId === 0) return <Outlet />;

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

        <Discussion
          discussions={data.discussions}
          handleDiscussionItemClick={handleDiscussionItemClick}
        />
      </div>
      <Conversation
        activeOtherEndUser={activeOtherEndUser}
        activeDiscussion={activeDiscussion}
        currentUserId={currentUserId}
        sendMessage={chatService.sendMessage}
        getTimeMarker={chatService.getTimeMarker}
        handleUpdate={handleUpdate}
      />
    </div>
  );
};

export default Main;
