const config = require('../../config'),
  {
    DataTypes
  } = require('sequelize');
dnb = {}, dnb.type = DataTypes.TEXT;
const options = {};
options.db = dnb;
const DataBase = config.DATABASE.define('data', options);
exports.setDB = async () => {
  const _0x633cfa = await DataBase.findAll();
  _0x633cfa.length < 1 ? await DataBase.create({
    'db': JSON.stringify(global.db)
  }) : await _0x633cfa[0].update({
    'db': JSON.stringify(global.db)
  });
}, exports.getDB = async () => {
  const _0x142c18 = await DataBase.findAll();
  _0x142c18.length > 0 && (global.db = JSON.parse(_0x142c18[0].db));
};