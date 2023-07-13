const users = [
  {
    id: 1,
    photoLink: "https://randomuser.me/api/portraits/men/21.jpg",
    name: "John",
  },
  {
    id: 2,
    photoLink: "https://randomuser.me/api/portraits/men/22.jpg",
    name: "Alex",
  },
  {
    id: 3,
    photoLink: "https://randomuser.me/api/portraits/men/23.jpg",
    name: "Michael",
  },
  {
    id: 4,
    photoLink: "https://randomuser.me/api/portraits/men/24.jpg",
    name: "David",
  },
  {
    id: 5,
    photoLink: "https://randomuser.me/api/portraits/men/25.jpg",
    name: "Daniel",
  },
  {
    id: 6,
    photoLink: "https://randomuser.me/api/portraits/men/26.jpg",
    name: "Matthew",
  },
  {
    id: 7,
    photoLink: "https://randomuser.me/api/portraits/men/27.jpg",
    name: "William",
  },
  {
    id: 8,
    photoLink: "https://randomuser.me/api/portraits/men/28.jpg",
    name: "James",
  },
  {
    id: 9,
    photoLink: "https://randomuser.me/api/portraits/men/29.jpg",
    name: "Christopher",
  },
  {
    id: 10,
    photoLink: "https://randomuser.me/api/portraits/men/30.jpg",
    name: "Andrew",
  },
];

const chats = [
  {
    messageId: 1,
    senderId: 1,
    receiverId: 2,
    content: "Hey, how's it going?",
    timestamp: 1674931200000,
    status: "sent",
  },
  {
    messageId: 2,
    senderId: 2,
    receiverId: 1,
    content: "Hi! I'm doing well, thanks. How about you?",
    timestamp: 1674991200000,
    status: "delivered",
  },
  {
    messageId: 3,
    senderId: 3,
    receiverId: 4,
    content: "Did you watch the latest episode of that show?",
    timestamp: 1675248000000,
    status: "sent",
  },
  {
    messageId: 4,
    senderId: 4,
    receiverId: 5,
    content: "Yes, it was amazing! I can't wait for the next one.",
    timestamp: 1675308000000,
    status: "read",
  },
  {
    messageId: 5,
    senderId: 5,
    receiverId: 6,
    content: "Hey, are you free this weekend?",
    timestamp: 1675564800000,
    status: "sent",
  },
  {
    messageId: 6,
    senderId: 6,
    receiverId: 5,
    content:
      "I have some plans on Saturday, but Sunday should work. What's up?",
    timestamp: 1675624800000,
    status: "delivered",
  },
  {
    messageId: 7,
    senderId: 7,
    receiverId: 8,
    content: "Do you want to grab dinner tonight?",
    timestamp: 1675881600000,
    status: "sent",
  },
  {
    messageId: 8,
    senderId: 8,
    receiverId: 7,
    content: "Sure! How about that new Italian place downtown?",
    timestamp: 1675941600000,
    status: "read",
  },
  {
    messageId: 9,
    senderId: 9,
    receiverId: 10,
    content: "Have you seen the latest news about that upcoming event?",
    timestamp: 1676198400000,
    status: "sent",
  },
  {
    messageId: 10,
    senderId: 10,
    receiverId: 9,
    content: "Yes, I saw it. I'm really excited to attend!",
    timestamp: 1676258400000,
    status: "delivered",
  },
  {
    messageId: 11,
    senderId: 1,
    receiverId: 3,
    content: "What time are we meeting tomorrow?",
    timestamp: 1676515200000,
    status: "sent",
  },
  {
    messageId: 12,
    senderId: 3,
    receiverId: 1,
    content: "Let's meet at 10 AM in the coffee shop near your place.",
    timestamp: 1676575200000,
    status: "read",
  },
  {
    messageId: 13,
    senderId: 2,
    receiverId: 4,
    content: "Do you have any plans for the weekend?",
    timestamp: 1676832000000,
    status: "sent",
  },
  {
    messageId: 14,
    senderId: 4,
    receiverId: 2,
    content: "Not yet. Any suggestions?",
    timestamp: 1676892000000,
    status: "delivered",
  },
  {
    messageId: 15,
    senderId: 5,
    receiverId: 7,
    content: "Can you send me the presentation slides?",
    timestamp: 1677148800000,
    status: "sent",
  },
  {
    messageId: 16,
    senderId: 7,
    receiverId: 5,
    content: "Sure, I'll email them to you right away.",
    timestamp: 1677208800000,
    status: "read",
  },
  {
    messageId: 17,
    senderId: 6,
    receiverId: 8,
    content: "I heard there's a great concert happening next month.",
    timestamp: 1677465600000,
    status: "sent",
  },
  {
    messageId: 18,
    senderId: 8,
    receiverId: 6,
    content:
      "Yes, I've been looking forward to it. Let's book the tickets soon.",
    timestamp: 1677525600000,
    status: "delivered",
  },
  {
    messageId: 19,
    senderId: 9,
    receiverId: 3,
    content: "Did you finish reading that book we talked about?",
    timestamp: 1677782400000,
    status: "sent",
  },
  {
    messageId: 20,
    senderId: 3,
    receiverId: 9,
    content: "Yes, it was a fantastic read. I highly recommend it!",
    timestamp: 1677842400000,
    status: "read",
  },
  {
    messageId: 21,
    senderId: 2,
    receiverId: 3,
    content: "Are you interested in joining the hiking trip next weekend?",
    timestamp: 1678099200000,
    status: "sent",
  },
  {
    messageId: 22,
    senderId: 3,
    receiverId: 2,
    content: "Yes, that sounds like a great idea. Count me in!",
    timestamp: 1678159200000,
    status: "delivered",
  },
  {
    messageId: 23,
    senderId: 4,
    receiverId: 6,
    content: "What time does the movie start?",
    timestamp: 1678416000000,
    status: "sent",
  },
  {
    messageId: 24,
    senderId: 6,
    receiverId: 4,
    content: "The movie starts at 7 PM. Shall we meet at the theater?",
    timestamp: 1678476000000,
    status: "read",
  },
  {
    messageId: 25,
    senderId: 5,
    receiverId: 9,
    content:
      "I heard there's a new exhibition at the art gallery. Would you like to check it out?",
    timestamp: 1678732800000,
    status: "sent",
  },
  {
    messageId: 26,
    senderId: 9,
    receiverId: 5,
    content: "Absolutely! Let's plan a visit this weekend.",
    timestamp: 1678792800000,
    status: "delivered",
  },
  {
    messageId: 27,
    senderId: 6,
    receiverId: 7,
    content: "Did you watch the game last night?",
    timestamp: 1679049600000,
    status: "sent",
  },
  {
    messageId: 28,
    senderId: 7,
    receiverId: 6,
    content: "Yes, it was an intense match! Our team played really well.",
    timestamp: 1679109600000,
    status: "read",
  },
  {
    messageId: 29,
    senderId: 8,
    receiverId: 1,
    content: "Can you help me with some coding exercises?",
    timestamp: 1679366400000,
    status: "sent",
  },
  {
    messageId: 30,
    senderId: 1,
    receiverId: 8,
    content:
      "Of course! I'll be happy to assist you. Just let me know what you need help with.",
    timestamp: 1679426400000,
    status: "delivered",
  },
  {
    messageId: 31,
    senderId: 9,
    receiverId: 7,
    content: "Have you tried the new restaurant that opened downtown?",
    timestamp: 1679683200000,
    status: "sent",
  },
  {
    messageId: 32,
    senderId: 7,
    receiverId: 9,
    content:
      "Not yet, but I've heard good things about it. Let's plan a dinner there soon.",
    timestamp: 1679743200000,
    status: "read",
  },
  {
    messageId: 33,
    senderId: 4,
    receiverId: 3,
    content:
      "I'm thinking of organizing a surprise party for our friend. Can you help me with the arrangements?",
    timestamp: 1680000000000,
    status: "sent",
  },
  {
    messageId: 34,
    senderId: 3,
    receiverId: 4,
    content: "Sure, I'd be glad to help! Let's discuss the details.",
    timestamp: 1680060000000,
    status: "delivered",
  },
  {
    messageId: 35,
    senderId: 2,
    receiverId: 5,
    content: "Do you have any recommendations for a good book to read?",
    timestamp: 1680316800000,
    status: "sent",
  },
  {
    messageId: 36,
    senderId: 5,
    receiverId: 2,
    content: "Absolutely! I can suggest a few titles based on your interests.",
    timestamp: 1680376800000,
    status: "read",
  },
  {
    messageId: 37,
    senderId: 7,
    receiverId: 10,
    content: "Are you attending the conference next month?",
    timestamp: 1680633600000,
    status: "sent",
  },
  {
    messageId: 38,
    senderId: 10,
    receiverId: 7,
    content: "Yes, I've already registered. It looks like an exciting event!",
    timestamp: 1680693600000,
    status: "delivered",
  },
  {
    messageId: 39,
    senderId: 6,
    receiverId: 1,
    content: "How was your vacation? I saw your photos on social media!",
    timestamp: 1680950400000,
    status: "sent",
  },
  {
    messageId: 40,
    senderId: 1,
    receiverId: 6,
    content: "It was incredible! I had a fantastic time exploring new places.",
    timestamp: 1681010400000,
    status: "read",
  },
  {
    messageId: 41,
    senderId: 3,
    receiverId: 5,
    content: "Have you heard the news about the upcoming movie release?",
    timestamp: 1681267200000,
    status: "sent",
  },
  {
    messageId: 42,
    senderId: 5,
    receiverId: 3,
    content: "Yes, I'm really excited about it. Can't wait to watch it!",
    timestamp: 1681327200000,
    status: "delivered",
  },
  {
    messageId: 43,
    senderId: 2,
    receiverId: 7,
    content: "Do you want to go shopping this weekend?",
    timestamp: 1681584000000,
    status: "sent",
  },
  {
    messageId: 44,
    senderId: 7,
    receiverId: 2,
    content:
      "Sounds great! I need to buy a few things. Let's meet at the mall.",
    timestamp: 1681644000000,
    status: "read",
  },
  {
    messageId: 45,
    senderId: 4,
    receiverId: 9,
    content: "I'm planning a road trip. Are you interested in joining?",
    timestamp: 1681900800000,
    status: "sent",
  },
  {
    messageId: 46,
    senderId: 9,
    receiverId: 4,
    content: "Definitely! Road trips are always fun. Count me in!",
    timestamp: 1681960800000,
    status: "delivered",
  },
  {
    messageId: 47,
    senderId: 8,
    receiverId: 6,
    content: "Can you recommend a good workout routine?",
    timestamp: 1682217600000,
    status: "sent",
  },
  {
    messageId: 48,
    senderId: 6,
    receiverId: 8,
    content:
      "Sure! I can help you design a workout plan tailored to your goals.",
    timestamp: 1682277600000,
    status: "read",
  },
  {
    messageId: 49,
    senderId: 10,
    receiverId: 3,
    content:
      "Let's organize a game night this weekend. What games do you enjoy?",
    timestamp: 1682534400000,
    status: "sent",
  },
  {
    messageId: 50,
    senderId: 3,
    receiverId: 10,
    content: "I'm up for it! I enjoy strategy board games and card games.",
    timestamp: 1682594400000,
    status: "delivered",
  },
  {
    messageId: 51,
    senderId: 7,
    receiverId: 1,
    content: "Do you know any good hiking trails nearby?",
    timestamp: 1682851200000,
    status: "sent",
  },
  {
    messageId: 52,
    senderId: 1,
    receiverId: 7,
    content:
      "Yes, there's a beautiful trail in the national park. I can share the details with you.",
    timestamp: 1682911200000,
    status: "read",
  },
  {
    messageId: 53,
    senderId: 8,
    receiverId: 5,
    content: "I'm planning to redecorate my living room. Any suggestions?",
    timestamp: 1683168000000,
    status: "sent",
  },
  {
    messageId: 54,
    senderId: 5,
    receiverId: 8,
    content:
      "I can help you with some interior design ideas. Let's discuss it.",
    timestamp: 1683228000000,
    status: "delivered",
  },
  {
    messageId: 55,
    senderId: 6,
    receiverId: 10,
    content: "Did you watch the latest episode of your favorite TV series?",
    timestamp: 1683484800000,
    status: "sent",
  },
  {
    messageId: 56,
    senderId: 10,
    receiverId: 6,
    content: "Yes, it was mind-blowing! So many unexpected twists.",
    timestamp: 1683544800000,
    status: "read",
  },
  {
    messageId: 57,
    senderId: 9,
    receiverId: 2,
    content: "Let's go for a bike ride this weekend. Are you interested?",
    timestamp: 1683801600000,
    status: "sent",
  },
  {
    messageId: 58,
    senderId: 2,
    receiverId: 9,
    content: "Absolutely! Cycling is one of my favorite activities.",
    timestamp: 1683861600000,
    status: "delivered",
  },
  {
    messageId: 59,
    senderId: 1,
    receiverId: 5,
    content: "Have you tried the new café in town? The coffee is amazing!",
    timestamp: 1684118400000,
    status: "sent",
  },
  {
    messageId: 60,
    senderId: 5,
    receiverId: 1,
    content: "Not yet, but I've heard good things about it. Let's go together.",
    timestamp: 1684178400000,
    status: "read",
  },
  {
    messageId: 61,
    senderId: 4,
    receiverId: 7,
    content: "Are you interested in attending the concert next month?",
    timestamp: 1684435200000,
    status: "sent",
  },
  {
    messageId: 62,
    senderId: 7,
    receiverId: 4,
    content:
      "Yes, I've been looking forward to it. Let's book the tickets soon.",
    timestamp: 1684495200000,
    status: "delivered",
  },
  {
    messageId: 63,
    senderId: 3,
    receiverId: 6,
    content: "Do you want to join the fitness class with me?",
    timestamp: 1684752000000,
    status: "sent",
  },
  {
    messageId: 64,
    senderId: 6,
    receiverId: 3,
    content: "I would love to! Which fitness class are you planning to join?",
    timestamp: 1684812000000,
    status: "read",
  },
  {
    messageId: 65,
    senderId: 5,
    receiverId: 8,
    content: "Did you try the new restaurant in town? The food is delicious!",
    timestamp: 1685068800000,
    status: "sent",
  },
  {
    messageId: 66,
    senderId: 8,
    receiverId: 5,
    content: "Yes, I went there last week. It exceeded my expectations!",
    timestamp: 1685128800000,
    status: "delivered",
  },
  {
    messageId: 67,
    senderId: 10,
    receiverId: 2,
    content: "Have you seen the latest movie? I highly recommend it!",
    timestamp: 1685385600000,
    status: "sent",
  },
  {
    messageId: 68,
    senderId: 2,
    receiverId: 10,
    content:
      "Not yet, but I've heard great reviews. I'll make sure to watch it.",
    timestamp: 1685445600000,
    status: "read",
  },
  {
    messageId: 69,
    senderId: 9,
    receiverId: 1,
    content: "Do you have any suggestions for a weekend getaway destination?",
    timestamp: 1685702400000,
    status: "sent",
  },
  {
    messageId: 70,
    senderId: 1,
    receiverId: 9,
    content: "Absolutely! There's a charming beach town that you might enjoy.",
    timestamp: 1685762400000,
    status: "delivered",
  },
  {
    messageId: 71,
    senderId: 6,
    receiverId: 2,
    content: "What's your favorite hobby? I'm looking to try something new.",
    timestamp: 1686019200000,
    status: "sent",
  },
  {
    messageId: 72,
    senderId: 2,
    receiverId: 6,
    content:
      "I enjoy photography as a hobby. It's a great way to capture moments.",
    timestamp: 1686079200000,
    status: "read",
  },
  {
    messageId: 73,
    senderId: 8,
    receiverId: 4,
    content: "Let's plan a picnic in the park next weekend. Are you available?",
    timestamp: 1686336000000,
    status: "sent",
  },
  {
    messageId: 74,
    senderId: 4,
    receiverId: 8,
    content: "Sounds like a wonderful idea! Count me in for the picnic.",
    timestamp: 1686396000000,
    status: "delivered",
  },
  {
    messageId: 75,
    senderId: 10,
    receiverId: 5,
    content:
      "Have you read any good books lately? I'm looking for recommendations.",
    timestamp: 1686652800000,
    status: "sent",
  },
  {
    messageId: 76,
    senderId: 5,
    receiverId: 10,
    content:
      "Yes, I recently finished a captivating mystery novel. I can lend it to you.",
    timestamp: 1686712800000,
    status: "read",
  },
  {
    messageId: 77,
    senderId: 9,
    receiverId: 7,
    content: "I'm thinking of taking up a new language. Any suggestions?",
    timestamp: 1686969600000,
    status: "sent",
  },
  {
    messageId: 78,
    senderId: 7,
    receiverId: 9,
    content:
      "Learning a new language can be a rewarding experience. I recommend starting with Spanish or French.",
    timestamp: 1687029600000,
    status: "delivered",
  },
  {
    messageId: 79,
    senderId: 1,
    receiverId: 3,
    content: "Are you interested in joining a cooking class together?",
    timestamp: 1687286400000,
    status: "sent",
  },
  {
    messageId: 80,
    senderId: 3,
    receiverId: 1,
    content:
      "That sounds like a fun idea! Let's explore different cuisines and enhance our culinary skills.",
    timestamp: 1687346400000,
    status: "read",
  },
  {
    messageId: 81,
    senderId: 2,
    receiverId: 5,
    content: "Are you attending the music festival next month?",
    timestamp: 1687603200000,
    status: "sent",
  },
  {
    messageId: 82,
    senderId: 5,
    receiverId: 2,
    content:
      "Yes, I've been looking forward to it. It's going to be an amazing event!",
    timestamp: 1687663200000,
    status: "delivered",
  },
  {
    messageId: 83,
    senderId: 3,
    receiverId: 7,
    content:
      "I'm planning to visit the art exhibition this weekend. Want to join?",
    timestamp: 1687920000000,
    status: "sent",
  },
  {
    messageId: 84,
    senderId: 7,
    receiverId: 3,
    content:
      "That sounds interesting! I'll be happy to join you at the exhibition.",
    timestamp: 1687980000000,
    status: "read",
  },
  {
    messageId: 85,
    senderId: 4,
    receiverId: 8,
    content: "Let's go for a hike and enjoy nature this weekend.",
    timestamp: 1688236800000,
    status: "sent",
  },
  {
    messageId: 86,
    senderId: 8,
    receiverId: 4,
    content: "I'm in! Hiking is a great way to unwind and connect with nature.",
    timestamp: 1688296800000,
    status: "delivered",
  },
  {
    messageId: 87,
    senderId: 9,
    receiverId: 5,
    content: "Have you watched the latest documentary on climate change?",
    timestamp: 1688553600000,
    status: "sent",
  },
  {
    messageId: 88,
    senderId: 5,
    receiverId: 9,
    content:
      "Yes, it was eye-opening and thought-provoking. It's an important topic.",
    timestamp: 1688613600000,
    status: "read",
  },
  {
    messageId: 89,
    senderId: 6,
    receiverId: 1,
    content:
      "Can you recommend any good podcasts? I'm looking for new ones to listen to.",
    timestamp: 1688870400000,
    status: "sent",
  },
  {
    messageId: 90,
    senderId: 1,
    receiverId: 6,
    content: "Certainly! What genres or topics are you interested in?",
    timestamp: 1688930400000,
    status: "delivered",
  },
  {
    messageId: 91,
    senderId: 7,
    receiverId: 2,
    content:
      "Let's plan a day trip to the nearby countryside. It will be refreshing.",
    timestamp: 1689187200000,
    status: "sent",
  },
  {
    messageId: 92,
    senderId: 2,
    receiverId: 7,
    content: "I couldn't agree more! Spending time in nature is rejuvenating.",
    timestamp: 1689247200000,
    status: "read",
  },
  {
    messageId: 93,
    senderId: 8,
    receiverId: 3,
    content: "Do you have any tips for starting a vegetable garden?",
    timestamp: 1689504000000,
    status: "sent",
  },
  {
    messageId: 94,
    senderId: 3,
    receiverId: 8,
    content:
      "Yes, I can share some beginner-friendly tips to help you get started.",
    timestamp: 1689564000000,
    status: "delivered",
  },
  {
    messageId: 95,
    senderId: 10,
    receiverId: 6,
    content:
      "Have you tried meditation? It can help reduce stress and improve focus.",
    timestamp: 1689820800000,
    status: "sent",
  },
  {
    messageId: 96,
    senderId: 6,
    receiverId: 10,
    content:
      "Yes, I practice meditation regularly. It has had a positive impact on my well-being.",
    timestamp: 1689880800000,
    status: "read",
  },
  {
    messageId: 97,
    senderId: 9,
    receiverId: 4,
    content:
      "Let's plan a visit to the local museum. They have interesting exhibits.",
    timestamp: 1690137600000,
    status: "sent",
  },
  {
    messageId: 98,
    senderId: 4,
    receiverId: 9,
    content:
      "I'm up for it! Museums are a great way to appreciate art and culture.",
    timestamp: 1690197600000,
    status: "delivered",
  },
  {
    messageId: 99,
    senderId: 5,
    receiverId: 3,
    content: "Have you tried the new fitness studio that opened downtown?",
    timestamp: 1690454400000,
    status: "sent",
  },
  {
    messageId: 100,
    senderId: 3,
    receiverId: 5,
    content:
      "Not yet, but I've heard great things about it. Let's check it out together.",
    timestamp: 1690514400000,
    status: "read",
  },
];

const getChatsForUserId = (userId) => {
  return chats.filter(
    (item) => item.senderId == userId || item.receiverId == userId
  );
};

const getChatsForUserReceiverId = (userId, receiverId) => {
  return getChatsForUserId(userId).filter(
    (item) => item.senderId == receiverId || item.receiverId == receiverId
  );
};

const getTimeMarker = (timeInMillisec) => {
  const prevTime = new Date(timeInMillisec);
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

const getDiscussionsSummaryForUserId = (userId) => {
  const c = getChatsForUserId(userId);
  let discussions = c.reduce((accumulator, curVal) => {
    const otherPerson =
      curVal.senderId == userId ? curVal.receiverId : curVal.senderId;

    if (!accumulator[otherPerson]) accumulator[otherPerson] = curVal;
    else if (accumulator[otherPerson].timestamp < curVal.timestamp) {
      accumulator[otherPerson] = curVal;
    }

    return accumulator;
  }, {});

  discussions = Object.entries(discussions).map((item) => {
    const u = users.find((i) => i.id == parseInt(item[0]));
    const currentMsg = item[1];

    return {
      userId: item[0],
      lastMessage: currentMsg.content,
      lastMessageTimeMarker: getTimeMarker(currentMsg.timestamp),
      photoLink: u.photoLink,
      name: u.name,
    };
  });

  return discussions;
};

const getUserDetails = (id) => {
  return users.find((item) => item.id === id);
};

const getCurrentUserId = () => {
  return 1;
};

const sendMessage = (message, senderId, receiverId) => {
  const msg = {
    messageId: new Date().getTime(),
    senderId,
    receiverId,
    content: message,
    timestamp: new Date().getTime(),
    status: "sent",
  };
  console.log("sendMessage msg :>> ", msg);
  chats.push(msg);
  // console.log("chats :>> ", chats);
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
