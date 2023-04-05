const {
  command,
  isPublic,
  isPrivate,
  tiny,
  clockString,
} = require("../lib");
var config = require("../config");
const prefix = config.PREFIX
const { FancyRandom } = require('abu-bot');
const { OWNER_NAME, BOT_NAME, HANDLERS } = require("../config");
const { hostname, uptime } = require("os");

command(
  {
    pattern: "alive",
    fromMe: isPrivate,
    dontAddCommandList: true,
  },
  async (message, match) => {

    let [date, time] = new Date()
      .toLocaleString("en-IN", { timeZone: "Asia/Kolkata" })
      .split(",");
    let alive = `
╭━━〘 "A ✰ L ✰ I ✰ V ✰ E" 〙━━──⊷`
    alive += `
┃ ⛥  *BOTNAME* : ${BOT_NAME}
┃ ⛥  *USER* : ${message.pushName}
┃ ⛥  *OWNER* :  ${OWNER_NAME}
┃ ⛥  *MY PREFIX* : ${HANDLERS}
┃ ⛥  *CURRENT DATE* : ${date}
┃ ⛥  *TIME* : ${time}
┃ ⛥  *I've been up for* : ${clockString(uptime())} 
╰━━━━━━━━━━━──⊷\n
*Powered by ${message.pushName}*
`

    await message.client.sendMessage(message.jid, {
      image: { url: `https://telegra.ph/file/56f641c3cf138aa7f27b2.jpg` },
      caption: tiny(alive),
      footer: tiny(`Gourav-MD`),
      buttons: [
        {
          buttonId: ".owner",
          buttonText: { displayText: tiny("⫷OWNER⫸") },
        },
        {
          buttonId: ".menu",
          buttonText: { displayText: tiny("⫷ MENU⫸") },
        },
      ],
    });
  }
);