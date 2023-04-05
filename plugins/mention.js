const {
    SUDO,
    AUDIO_DATA,
    STICKER_DATA
  } = require('../config'),
  {
    command,
    addAudioMetaData,
    getBuffer,
    isPublic,
    toAudio,
    parseJsonModule,
    setDB,
    PREFIX,
    isFile
  } = require('../lib/');
async function toSticker(_0x23ee17) {
  const _0xe9c1ac = require('path'),
    {
      spawn: _0x4b84b9
    } = require('child_process'),
    _0x758c1 = require('fs'),
    _0xebb425 = require('os'),
    _0x2ea678 = _0xe9c1ac.join(_0xebb425.tmpdir(), 'sticker.webp'),
    _0x27af29 = _0x4b84b9('ffmpeg', ['-i', '-', '-vf', 'scale=512:-1', '-loop', '0', '-vcodec', 'libwebp', _0x2ea678]);
  return _0x27af29.stdin.end(_0x23ee17), new Promise((_0x33612e, _0x1045f2) => {
    _0x27af29.on('close', () => {
      _0x758c1.readFile(_0x2ea678, (_0x5a4bd6, _0x416753) => {
        _0x5a4bd6 ? _0x1045f2(_0x5a4bd6) : (_0x758c1.unlinkSync(_0x2ea678), _0x33612e(_0x416753));
      });
    });
  });
}
const mediaCache = {},
  audioCache = {},
  stickerCache = {};
command({
  'pattern': 'mention ?(.*)',
  'fromMe': isPublic,
  'desc': 'mention msg reply',
  'type': 'group'
}, async (_0x3d86a5, _0x51fa34) => {
  const _0x3e2036 = db.database.mention_reply || {
      'data': false,
      'enabled': false
    },
    _0x36219c = [{
      'buttonId': PREFIX + 'mention on',
      'buttonText': {
        'displayText': 'ON'
      },
      'type': 0x1
    }, {
      'buttonId': PREFIX + 'mention off',
      'buttonText': {
        'displayText': 'OFF'
      },
      'type': 0x1
    }],
    _0x1631ae = {
      'text': 'Mention Manager',
      'footer': 'status: ' + _0x3e2036.enabled,
      'buttons': _0x36219c,
      'headerType': 0x1
    };
  if (!_0x51fa34) return _0x3d86a5.client.sendMessage(_0x3d86a5.chat, _0x1631ae);
  if (_0x51fa34 === 'get') {
    if (!_0x3e2036.data) return _0x3d86a5.reply('*No mention msg found!*');
    return _0x3d86a5.reply(_0x3e2036.data);
  }
  if (_0x51fa34 === 'on' || _0x51fa34 === 'off') return _0x3e2036.enabled = _0x51fa34 === 'on', await setDB(), _0x3d86a5.reply('_Mention ' + (_0x51fa34 === 'on' ? 'Activated' : 'Deactivated') + '_');
  return _0x3e2036.data = _0x51fa34, _0x3e2036.enabled = true, await setDB(), _0x3d86a5.reply('_Mention Updated_');
}), command({
  'on': 'messages.upsert',
  'fromMe': false
}, async (_0x20be64, _0x18f68d, _0x207e8a) => {
  const {
    data: _0x3cb786,
    enabled: _0x529508
  } = db.database.mention_reply || {
    'data': false,
    'enabled': false
  };
  if (!_0x529508 || !_0x3cb786) return;
  const _0x3911aa = require('../lib/Message'),
    _0x204259 = _0x20be64.messages[0];
  _0x204259.message = Object.keys(mek.message)[0] === 'ephemeralMessage' ? mek.message.ephemeralMessage.message : mek.message;
  const _0x5982da = new _0x3911aa(_0x207e8a, _0x204259),
    {
      mentionedJid: _0x50b005
    } = _0x5982da;
  if (!_0x50b005) return;
  const _0x348b21 = _0x5982da.mentionedJid.some(_0xd1f122 => _0xd1f122.includes(_0x207e8a.user.jid) || SUDO.includes(_0xd1f122.split('@')[0]));
  if (!_0x348b21) return;
  const _0x506a3b = new RegExp(/type\/(image|video|gif|audio|text|sticker)/),
    _0x1ca343 = _0x506a3b.exec(_0x3cb786),
    _0x550626 = _0x1ca343 ? _0x1ca343[1] : '',
    _0x5395ef = _0x3cb786.match(/http.+?(mp4|jpg|png|webp|jpeg)/g) || [],
    _0xad55fb = {
      'mentionedJid': [_0x5982da.sender],
      'quoted': _0x5982da.data
    },
    _0x2eb022 = Math.floor(Math.random() * _0x5395ef.length);
  async function _0x8396a6(_0x212a8c) {
    if (mediaCache[_0x212a8c]) return mediaCache[_0x212a8c];
    const _0x391421 = await getBuffer(_0x212a8c);
    return mediaCache[_0x212a8c] = _0x391421, _0x391421;
  }
  if (!_0x550626) {
    const _0x22e8b9 = {
      'text': 'Please specify the type of media you want to send using the \'type/(image/video/audio/sticker/gif)\' property in the mention message.'
    };
    return await _0x207e8a.sendMessage(_0x5982da.chat, _0x22e8b9);
  } else {
    if (_0x550626 === 'audio') {
      const _0x54ff60 = _0x5395ef[_0x2eb022];
      let _0x4a5038 = audioCache[_0x54ff60];
      if (!_0x4a5038) {
        const _0x543d6b = await _0x8396a6(_0x54ff60);
        _0x4a5038 = await toAudio(_0x543d6b), audioCache[_0x54ff60] = _0x4a5038;
      }
      _0xad55fb.audio = _0x4a5038, _0xad55fb.mimetype = 'audio/mpeg', _0xad55fb.ptt = true;
    } else {
      if (_0x550626 === 'video') {
        const _0x42f688 = _0x5395ef[_0x2eb022],
          _0x315de5 = await _0x8396a6(_0x42f688);
        _0xad55fb.video = _0x315de5;
      } else {
        if (_0x550626 === 'sticker') {
          const _0x54691b = _0x5395ef[_0x2eb022];
          let _0x451bec = stickerCache[_0x54691b];
          if (!_0x451bec) {
            const _0x48d224 = await _0x8396a6(_0x54691b);
            _0x451bec = await toSticker(_0x48d224), stickerCache[_0x54691b] = _0x451bec;
          }
          _0xad55fb.sticker = _0x451bec;
        } else {
          if (_0x550626 === 'image') {
            const _0x3dc579 = _0x5395ef[_0x2eb022],
              _0x345e52 = await _0x8396a6(_0x3dc579);
            _0xad55fb.image = _0x345e52;
          } else {
            if (_0x550626 === 'gif') {
              const _0x5b13bf = _0x5395ef[_0x2eb022],
                _0x21cd46 = await _0x8396a6(_0x5b13bf);
              _0xad55fb.video = _0x21cd46, _0xad55fb.gifPlayback = true;
            } else {
              const _0x34c8e9 = {
                'text': 'Sorry, I can\'t send this ' + _0x550626 + ' type of media.'
              };
              return await _0x207e8a.sendMessage(_0x5982da.chat, _0x34c8e9);
            }
          }
        }
      }
    }
  }
  const _0x50e327 = await parseJsonModule(_0x3cb786),
    _0x40a689 = Object.assign({}, _0xad55fb, _0x50e327);
  return await _0x207e8a.sendMessage(_0x5982da.chat, {
    ..._0x40a689
  }, {
    ..._0x40a689
  });
});