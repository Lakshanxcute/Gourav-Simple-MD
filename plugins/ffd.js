

const {
	command,
	getBuffer
} = require("../lib/");

const url1 = 'https://i.imgur.com/8ywakAD.jpeg'
const url2 = 'https://i.imgur.com/MYx2KqP.jpeg'
const OWNER = 'Inrl';
const BoT = 'INRL-BOT-MD';
const duration = 2000001355
const ptt = true
const audiowave = [99,0,99,0,99];
const number = "9090904040";
const source_url = "https://wa.me/"+number+"?text=_*៚ʜᴇʟʟᴏ"+OWNER+"sᴇʀ+ʙɪɢ ғᴀɴ+ᴠʀᴏ+🪄*_";
const media_url = "https://instagram.com/" ;
const title = "testing";
const body = "hey bro";

command(
	   {
		        pattern: ['fdd'],
		        desc: 'forward msgs',
                sucReact: "🙃",
                category: ["system", "all"],
                type : "search"
	   },
	async (message, client, match) => {
	if(!message.quoted) return message.reply('need forwaedung content as audio!!');
	if (!match) return await message.reply('need jid!!')
	if (!match.match('@')) return await message.reply('*Give me a jid*\nExample .fd jid1!')
	const contact = { key: {participant: `0@s.whatsapp.net`, ...(message.key.remoteJid ? { remoteJid: `status@broadcast` } : {}) }, message: { 'contactMessage': { 'displayName':BoT, 'vcard': `BEGIN:VCARD\nVERSION:3.0\nN:XL;${BoT},;;;\nFN:${BoT}\nitem1.TEL;waid=${OWNER}:${OWNER}\nitem1.X-ABLabel:Mobile\nEND:VCARD`, 'jpegThumbnail': getBuffer(url2), thumbnail: getBuffer(url2),sendEphemeral: true}}}
	const image1 = await getBuffer(url1)
	const image2 = await getBuffer(url2)
	let jid = match.trim();
	let media = await message.quoted.download();
	return await client.sendMessage(jid, { audio : media, mimetype: 'audio/mpeg', ptt: ptt, duration: duration, quoted: contact, waveform: audiowave, contextInfo: { externalAdReply:{
        title : title,
        body : body,
        showAdAttribution: true,
        mediaType:2,
        thumbnail: image1,
        mediaUrl: media_url, 
        sourceUrl: source_url }}}, {quoted: contact })
        }
);