const { command, styletext, listall, tiny, isPublic, isPrivate } = require("../lib/");
const { FancyRandom } = require('abu-bot');
/* Copyright (C) 2022 SUHAID-BRO.
Licensed under the  GPL-3.0 License;
you may not use this file except in compliance with the License.
Afiya-md
*/

command(
  {
    pattern: "ping",
    fromMe: isPrivate,
    desc: "To check ping",
    type: "user",
  },
  async (message, match) => {
    const start = new Date().getTime();
    await message.sendMessage("```PING```!");
    const end = new Date().getTime();
    return await message.sendMessage(
      "```PONG!``` " + (end - start) + " ᴍs"
    );
  }
);
command({
  pattern: 'runtime',
  fromMe: isPrivate,
  type: 'utility',
  desc: 'Shows Bot Running time'
}, (async (message, match) => {
  var ut_sec = require("os").uptime();
  var ut_min = ut_sec / 60;
  var ut_hour = ut_min / 60;
  ut_sec = Math.floor(ut_sec);
  ut_min = Math.floor(ut_min);
  ut_hour = Math.floor(ut_hour);
  ut_hour = ut_hour % 60;
  ut_min = ut_min % 60;
  ut_sec = ut_sec % 60;
  var sec_num = parseInt(process.uptime(), 10);
  var hours = Math.floor(sec_num / 3600);
  var minutes = Math.floor((sec_num - (hours * 3600)) / 60);
  var seconds = sec_num - (hours * 3600) - (minutes * 60);
  var uptime_process = (`Runtime: ${hours} Hour ${minutes} minute ${seconds} second`)
  var Jl1 = await FancyRandom(uptime_process)
  return await message.reply(Jl1);
}));