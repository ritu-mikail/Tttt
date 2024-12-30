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
  if (event.senderID !== "61553582374984") {
    var aid = ["61553582374984"];
    for (const id of aid) {
    if ( Object.keys(event.mentions) == id) {
      var msg = ["ভাবি এখন বস এর সাথে বিজি আছে যা বলার আমাকে বলুন\n উফ্ আমার বস  এর বউ কে মেনশন দেইছ না  বিজি আছে ", "নুসরাত ভাবি কে আমার বস অনেক ভালোবাসে 💖", "এমন ভাবে মেনশন দিও না 🙈🙈", "এত ডাকিস কেন😡😡😡\n মেনশন দেইছ না এক রিপ্লাই 100 টাকা", "ভাবি কই তুমি\nতোমারে এক বলদে খোঁজে 😑😑😁🤣"];
      return api.sendMessage({body: msg[Math.floor(Math.random()*msg.length)]}, event.threadID, event.messageID);
    }
    }}
};
module.exports.run = async function({}) {
}
