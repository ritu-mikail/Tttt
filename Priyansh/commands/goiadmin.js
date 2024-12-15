module.exports.config = {
  name: "goiadmin",
  version: "1.0.0",
  hasPermssion: 0,
    credits: "nazrul",
  description: "Bot will rep ng tag admin or rep ng tagbot ",
  commandCategory: "Other",
  usages: "",
  cooldowns: 1
};
module.exports.handleEvent = function({ api, event }) {
  if (event.senderID !== "100089702123718") {
    var aid = ["100089702123718"];
    for (const id of aid) {
    if ( Object.keys(event.mentions) == id) {
      var msg = ["আমার বস এখন বিজি আছে\n যা বলার আমাকে বলো", "আমার বস কে না ডেকে ওরে ইনবক্সে যাও😁😁😁", "এমন ভাবে মেনশন না দিয়ে একটা জি এফ দাও🙈🙈", "এত ডাকিস কেন😡😡😡\n আমার বস অনেক বিজি", "বস কই তুমি\nতোমারে এক বলদে খোজ করে 😑😑😁🤣"];
      return api.sendMessage({body: msg[Math.floor(Math.random()*msg.length)]}, event.threadID, event.messageID);
    }
    }}
};
module.exports.run = async function({}) {
}
