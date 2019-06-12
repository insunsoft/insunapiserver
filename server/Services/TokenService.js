'use strict';
const jwt = require('jsonwebtoken');
const config = require('../config')//配置文件加载
const TOKEN_CONFIG = {
  KEY: config.security.secret,
  expires: config.security.expires,
  alg: config.security.alg,
};

module.exports = {
  /**
   * Generate token from users data
   * @param {Object} - user's data
   * @returns {string} - encoded value, token
   */
   generateToken:function (data) {

    const token = jwt.sign(data, TOKEN_CONFIG.KEY, {
      expiresIn: TOKEN_CONFIG.expires,
      algorithm: TOKEN_CONFIG.alg,
    });
    console.log('显示=>原始数据：' + data + 'token:' + token);
    return token;
  },

  /**
   * Decode given payload (usually, authorization field from request header)
   * @param {string} - string with token to decore
   * @returns {object|null} - object with users data
   */
   decodeToken:function (payload) {
    try {
      return jwt.verify(payload, TOKEN_CONFIG.KEY);
    } catch (e) {
      return null;
    }
  }
}