import httpService from "./httpService";

const apiEndpoint = "https://hsapps.somee.com/Api/";

const getChatsForUserId = async (userId) => {
  const url = apiEndpoint + "Messages/ForUser/" + userId;
  const { data } = await httpService.get(url);
  return data;
};

const getChatsForUserReceiverId = async (userId, receiverId) => {
  return (await getChatsForUserId(userId)).filter(
    (item) => item.senderId == receiverId || item.receiverId == receiverId
  );
};

const getTimeMarker = (dateTime) => {
  const prevTime = new Date(dateTime);
  const duration = new Date(new Date() - prevTime);
  const days = duration.getDate();
  const hours = duration.getHours();
  const minutes = duration.getMinutes();

  if (days < 0) return `${hours}h${minutes}`;
  else
    return `${prevTime.getDate()}-${
      prevTime.getMonth() + 1
    }-${prevTime.getFullYear()}`;
};

const getDiscussionsSummaryForUserId = async (userId) => {
  const url = apiEndpoint + "Messages/SummaryForUser/" + userId;
  const { data } = await httpService.get(url);
  return data;
};

const getUserDetails = async (id) => {
  const url = apiEndpoint + "ChatUser/" + id;
  const { data } = await httpService.get(url);
  return data;
};

// TODO : after implementing login and logout
const getCurrentUserId = () => {
  return 2;
};

const sendMessage = async (message, senderId, receiverId) => {
  const url = apiEndpoint + "Messages";
  const msg = {
    senderId,
    receiverId,
    content: message,
    timestamp: new Date().getTime(),
    status: "sent",
  };
  await httpService.post(url, msg);
};

export default {
  getDiscussionsSummaryForUserId,
  getChatsForUserId,
  getChatsForUserReceiverId,
  getUserDetails,
  getCurrentUserId,
  getTimeMarker,
  sendMessage,
};
