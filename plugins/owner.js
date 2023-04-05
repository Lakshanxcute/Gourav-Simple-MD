const { command, isPublic } = require('../lib');
const { MessageType } = require('@adiwajshing/baileys');
const exec = require('child_process').exec;
const os = require("os");
const fs = require('fs');
const Config = require('../config')
command({
  pattern: "owner ?(.*)",
  fromMe: isPublic,
  desc: "owner number",
  type: "bot creator",
},
  async (message, match, msg) => {

    //BY TOXIC KICHU
    const vcard = 'BEGIN:VCARD\n' // metadata of the contact card
      + 'VERSION:3.0\n'
      + 'FN:GOURAV SER\n' // full name
      + 'ORG:Gourav md;\n' // the organization of the contact
      + 'TEL;type=CELL;type=VOICE;waid=917025770987:+91 7025770987\n' // WhatsApp ID + phone number
      + 'END:VCARD'
    await message.client.sendMessage(
      message.jid,
      {
        contacts: {
          displayName: 'GOURAV SER',
          contacts: [{ vcard }],
        }
      }
    );
  }
)