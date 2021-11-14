const defaultDataset = {
  init: {
    answers: [
      { content: "I want to find a movie", nextId: "search" },
      {
        content: "I want to talk to you about the movie",
        nextId: "chat",
      },
      { content: "Please tell me about your favorite", nextId: "community" },
      { content: "I want to go to the cafe with you", nextId: "dating" },
    ],
    question: "Hi! What can I help you?",
  },
  search: {
    answers: [
      { content: "Action", nextId: "action" },
      { content: "Romance", nextId: "romance" },
      { content: "Comedy", nextId: "comedy" },
      { content: "Others", nextId: "other" },
    ],
    question: "What kind of movie do you like?",
  },
  action: {
    answers: [
      { content: "Contact", nextId: "contact" },
      { content: "Go back to first question", nextId: "init" },
    ],
    question: "OK. You like action movie.",
  },
  romance: {
    answers: [
      { content: "Contact", nextId: "contact" },
      { content: "Go back to first question", nextId: "init" },
    ],
    question: "OK. You like romance movie.",
  },
  comedy: {
    answers: [
      { content: "Contact", nextId: "contact" },
      { content: "Go back to first question", nextId: "init" },
    ],
    question: "OK. You like comedy movie",
  },
  other: {
    answers: [
      { content: "Tell them your favorite movie", nextId: "contact" },
      { content: "Go back to first question", nextId: "init" },
    ],
    question: "What is your favorite movie?",
  },
  chat: {
    answers: [
      { content: "Chat", nextId: "contact" },
      { content: "Go back to first question", nextId: "init" },
    ],
    question: "OK. Let's chat",
  },
  community: {
    answers: [
      { content: "どんな活動をしているの？", nextId: "community_activity" },
      {
        content: "コミュニティに参加したい",
        nextId: "https://torahack.web.app/community/",
      },
      { content: "Go back to first question", nextId: "init" },
    ],
    question:
      "2020年3月から学習コミュニティを始めました！🎉Webエンジニアへの転職を目指す人向けに、プログラミングを教えたりキャリアの相談に乗っています。",
  },
  community_activity: {
    answers: [
      {
        content: "さらに詳細を知りたい",
        nextId: "https://youtu.be/tIzE7hUDbBM",
      },
      {
        content: "コミュニティに参加したい",
        nextId: "https://torahack.web.app/community/",
      },
      { content: "Go back to first question", nextId: "init" },
    ],
    question:
      "フロントエンド向けの教材の提供、キャリアや勉強法に関するメルマガの配信、週1のオンライン作業会などを開催しています！\n詳細はYouTube動画で紹介しています。",
  },
  dating: {
    answers: [
      { content: "DM", nextId: "https://twitter.com/tat099991" },
      { content: "Go back to first question", nextId: "init" },
    ],
    question: "Let's go to have a coffee first. DM me.",
  },
};

export default defaultDataset;
