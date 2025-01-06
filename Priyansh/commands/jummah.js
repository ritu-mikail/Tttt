const axios = require("axios");
const fs = require("fs");
const request = require("request");
 
const link = [
  "https://i.imgur.com/aTiPSVL.jpeg",
 
];
 
module.exports.config = {
  name: "jummah",
  version: "1.0.0",
  hasPermssion: 0,
  credits: "nazrul",
  description: "",
  commandCategory: "no prefix", 
  usages: "🥵",
  cooldowns: 5,
  dependencies: {
    "request": "",
    "fs-extra": "",
    "axios": ""
  }
};
 
module.exports.handleEvent = async ({ api, event, Threads }) => {
  const content = event.body ? event.body : '';
    const body = content.toLowerCase();
  if (body.startsWith("jummah")) {
    const rahad = [
      "▬▬▬▬▬▬▬▬▬▬▬\n${name}\n▬▬▬▬▬▬▬▬▬▬▬▬\n﷽𝐀𝐬𝐬𝐚𝐥𝐚𝐦𝐮𝐥𝐚𝐢𝐤𝐮𝐦 🕋︎︎︎𝐉𝐮𝐦𝐦𝐚 𝐌𝐨𝐛𝐚𝐫𝐚𝐤🕋🕌শুক্রবার মানেই🕌シ︎গুনাহ シ︎মাফের シ︎আরও এক্টা シ︎সুন্দর シ︎দিন🥀♧︎︎︎হে♧︎︎︎ আল্লাহ 🤲🤲☘︎এই দিনের উছিলায়..!!..আমাদের সবাইকে মাফ করে দাও☘︎.......𝐀𝐦𝐢𝐧.\n▬▬▬▬▬▬▬▬▬▬▬▬\n-- 人 _(___)__║∩║_______''人_║∩║_____ .-:'''"''":-._║∩║____ (*(*(*|*)*)*)___║∩║____║∩∩∩∩∩∩║_▬▬▬▬▬▬▬▬▬▬▬▬██◣𝐉𝐮𝐦𝐦𝐚𝐡◢████}▉▉▉▉⚄ 𝐌𝐮𝐛𝐚𝐫𝐚𝐤 ⚄▉\n▬▬▬▬▬▬▬▬▬▬▬▬"
    
    ];
    const rahad2 = rahad[Math.floor(Math.random() * rahad.length)];
 
    const callback = () => api.sendMessage({
      body: `${rahad2}`,
      attachment: fs.createReadStream(__dirname + "/cache/2024.jpg")
    }, event.threadID, () => fs.unlinkSync(__dirname + "/cache/2024.jpg"), event.messageID);
    
    const requestStream = request(encodeURI(link[Math.floor(Math.random() * link.length)]));
    requestStream.pipe(fs.createWriteStream(__dirname + "/cache/2024.jpg")).on("close", () => callback());
    return requestStream;
  }
};
 
module.exports.languages = {
  "vi": {
    "on": "Dùng sai cách rồi lêu lêu",
    "off": "sv ngu, đã bão dùng sai cách",
    "successText": `🧠`,
  },
  "en": {
    "on": "on",
    "off": "off",
    "successText": "success!",
  }
};
 
module.exports.run = async ({ api, event, Threads, getText }) => {
  const { threadID, messageID } = event;
  let data = (await Threads.getData(threadID)).data;
  if (typeof data["🥵"] === "undefined" || data["🥵"]) data["🥵"] = false;
  else data["🥵"] = true;
  await Threads.setData(threadID, { data });
  global.data.threadData.set(threadID, data);
  api.sendMessage(`${(data["🥵"]) ? getText("off") : getText("on")} ${getText("successText")}`, threadID, messageID);
};
 
