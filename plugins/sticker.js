const _0x633d0c=_0xc5d9;(function(_0x1a041f,_0x5ccea0){const _0x5b6fa6=_0xc5d9,_0x4ed982=_0x1a041f();while(!![]){try{const _0x4db2d7=-parseInt(_0x5b6fa6(0x82))/0x1+-parseInt(_0x5b6fa6(0x89))/0x2*(-parseInt(_0x5b6fa6(0x6b))/0x3)+parseInt(_0x5b6fa6(0x8f))/0x4+-parseInt(_0x5b6fa6(0x74))/0x5*(-parseInt(_0x5b6fa6(0x6d))/0x6)+-parseInt(_0x5b6fa6(0x78))/0x7*(parseInt(_0x5b6fa6(0x83))/0x8)+parseInt(_0x5b6fa6(0x90))/0x9+parseInt(_0x5b6fa6(0x72))/0xa*(-parseInt(_0x5b6fa6(0x75))/0xb);if(_0x4db2d7===_0x5ccea0)break;else _0x4ed982['push'](_0x4ed982['shift']());}catch(_0x37d8eb){_0x4ed982['push'](_0x4ed982['shift']());}}}(_0x4dfa,0x61e6e));function _0xc5d9(_0x3d4928,_0x56128c){const _0x4dfa2e=_0x4dfa();return _0xc5d9=function(_0xc5d9e6,_0x3de313){_0xc5d9e6=_0xc5d9e6-0x67;let _0x282de5=_0x4dfa2e[_0xc5d9e6];return _0x282de5;},_0xc5d9(_0x3d4928,_0x56128c);}const config=require(_0x633d0c(0x7e)),{command,isPrivate,getJson,sleep,tiny}=require('../lib/'),{Image}=require(_0x633d0c(0x76));command({'pattern':_0x633d0c(0x84),'fromMe':isPrivate,'desc':_0x633d0c(0x67),'type':'converter'},async(_0x2078e,_0x408e52,_0x832002)=>{const _0x9f9eeb=_0x633d0c;if(!(_0x2078e[_0x9f9eeb(0x71)]['video']||_0x2078e[_0x9f9eeb(0x71)][_0x9f9eeb(0x88)]))return await _0x2078e[_0x9f9eeb(0x92)](_0x9f9eeb(0x6f));let _0x4eb926=await _0x832002['quoted'][_0x9f9eeb(0x69)]();_0x2078e[_0x9f9eeb(0x87)](_0x4eb926,{'packname':config[_0x9f9eeb(0x68)],'author':config[_0x9f9eeb(0x73)]},'sticker');}),command({'pattern':_0x633d0c(0x8e),'fromMe':isPrivate,'desc':'Download\x20Sticker\x20From\x20Telegram','type':_0x633d0c(0x8a)},async(_0x2fcbe2,_0x543602)=>{const _0x208e95=_0x633d0c;if(!_0x543602)return _0x2fcbe2[_0x208e95(0x92)](_0x208e95(0x6c));let _0x897bab=_0x543602[_0x208e95(0x7a)]('/addstickers/')[0x1],{result:_0x2c4c2c}=await getJson(_0x208e95(0x70)+encodeURIComponent(_0x897bab));if(_0x2c4c2c[_0x208e95(0x7c)])return _0x2fcbe2[_0x208e95(0x92)]('_Animated\x20stickers\x20are\x20not\x20supported_');_0x2fcbe2[_0x208e95(0x92)](('*Total\x20stickers\x20:*\x20'+_0x2c4c2c[_0x208e95(0x79)][_0x208e95(0x8d)]+_0x208e95(0x6a)+_0x2c4c2c[_0x208e95(0x79)][_0x208e95(0x8d)]*1.5+_0x208e95(0x8c))[_0x208e95(0x81)]());for(let _0x53a2c8 of _0x2c4c2c[_0x208e95(0x79)]){let _0x1bd933=await getJson('https://api.telegram.org/bot891038791:AAHWB1dQd-vi0IbH2NjKYUk-hqQ8rQuzPD4/getFile?file_id='+_0x53a2c8['file_id']);await _0x2fcbe2['sendMessage'](_0x208e95(0x7f)+_0x1bd933[_0x208e95(0x86)][_0x208e95(0x80)],{'packname':config[_0x208e95(0x68)],'author':config['AUTHOR']},_0x208e95(0x84)),sleep(0x5dc);}}),command({'pattern':_0x633d0c(0x93),'fromMe':isPrivate,'desc':_0x633d0c(0x7d),'type':_0x633d0c(0x8a)},async(_0x2be88f,_0x5dcfd2,_0x43a85b)=>{const _0x5bb177=_0x633d0c;if(!_0x2be88f[_0x5bb177(0x71)]&&!_0x2be88f['reply_message'][_0x5bb177(0x84)])return await _0x2be88f[_0x5bb177(0x92)](_0x5bb177(0x77));let _0x571401=await _0x43a85b[_0x5bb177(0x85)]['download'](),[_0x4c8416,_0x57ead4]=_0x5dcfd2[_0x5bb177(0x7a)](',');await _0x2be88f['sendMessage'](_0x571401,{'packname':_0x4c8416||config['PACKNAME'],'author':_0x57ead4||config[_0x5bb177(0x73)]},_0x5bb177(0x84));}),command({'pattern':_0x633d0c(0x91),'fromMe':!![],'desc':_0x633d0c(0x6e),'type':'type'},async(_0xdec488,_0x43b10b,_0x38ce0d)=>{const _0x358806=_0x633d0c;if(!_0xdec488['reply_message']||!_0xdec488[_0x358806(0x71)]['sticker'])return await _0xdec488[_0x358806(0x92)](_0x358806(0x77));let _0x369667=new Image();await _0x369667[_0x358806(0x8b)](await _0x38ce0d[_0x358806(0x85)][_0x358806(0x69)]());const _0x1b44b5=JSON['parse'](_0x369667['exif']['slice'](0x16)[_0x358806(0x7b)]());await _0xdec488[_0x358806(0x92)](_0x1b44b5);});function _0x4dfa(){const _0x2c0f8a=['460WYeoiI','AUTHOR','2717665tYafLk','15103UHIjqb','node-webpmux','_Reply\x20to\x20sticker_','808325bvyDWf','stickers','split','toString','is_animated','Changes\x20Exif\x20data\x20of\x20stickers','../config','https://api.telegram.org/file/bot891038791:AAHWB1dQd-vi0IbH2NjKYUk-hqQ8rQuzPD4/','file_path','trim','694570JCSsjR','16AkFPXS','sticker','quoted','result','sendMessage','image','605508rGgMYZ','tool','load','\x20seconds','length','tgs','713516oxMQyN','3285162ymqBSL','getexif','reply','take','_Converts\x20Photo\x20or\x20video\x20to\x20sticker_','PACKNAME','download','\x0a*Estimated\x20complete\x20in:*\x20','3dchAHt','_Enter\x20a\x20tg\x20sticker\x20url_\x0aEg:\x20https://t.me/addstickers/Oldboyfinal\x0aKeep\x20in\x20mind\x20that\x20there\x20is\x20a\x20chance\x20of\x20ban\x20if\x20used\x20frequently','6IMJmDQ','description','_Reply\x20to\x20photo\x20or\x20video_','https://api.telegram.org/bot891038791:AAHWB1dQd-vi0IbH2NjKYUk-hqQ8rQuzPD4/getStickerSet?name=','reply_message'];_0x4dfa=function(){return _0x2c0f8a;};return _0x4dfa();}
